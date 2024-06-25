'use client'
import { useState, useEffect, ChangeEvent } from 'react'
import { Button } from './Button'
import { Metronome } from '@/util/metronome'
import { Play, Pause } from '@/assets/SVGS'

interface MetronomeSettings {
	tempo: number
	beatsPerBar: number
}

export const MetronomeTool = () => {
	const [metronome, setMetronome] = useState<Metronome>()
	const [settings, setSettings] = useState<MetronomeSettings>({
		tempo: 120,
		beatsPerBar: 4,
	})
	const [isRunning, setIsRunning] = useState(false)

	const handleMetronome = () => {
		if (!metronome) {
			const newMetronome = new Metronome(settings.tempo, settings.beatsPerBar)
			newMetronome.startStop()
			setMetronome(newMetronome)
		} else {
			metronome.startStop()
		}
		setIsRunning(!isRunning)
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value: string = e.target.value
		const field: string = e.target.id
		setSettings({ ...settings, [field]: value })
	}

	useEffect(() => {
		if (metronome) {
			metronome.tempo = settings.tempo
			metronome.beatsPerBar = settings.beatsPerBar
		}
	}, [settings.tempo, settings.beatsPerBar])

	return (
		<>
			<Button
				onClick={() => {
					handleMetronome()
				}}
			>
				{ isRunning ? (
					<Pause height={'200px'} width={'200px'} fill={'#0B183E'} />
				) : (
					<Play height={'200px'} width={'200px'} fill={'#0B183E'} />
				)}
			</Button>
			<div className="flex p-2 space-between w-full">
				<div className="flex flex-col text-center items-center w-1/2 p-2">
					<label htmlFor="tempo">Tempo</label>
					<input
						type="number"
						min={24}
						max={300}
						id="tempo"
						name="tempo"
						value={settings.tempo}
						onChange={handleChange}
						className="input w-[72px]"
					/>
				</div>
				<div className="flex flex-col text-center items-center w-1/2 p-2">
					<label htmlFor="beatsPerBar">Beats Per Bar</label>
					<input
						type="number"
						min={2}
						max={32}
						id="beatsPerBar"
						name="beatsPerBar"
						value={settings.beatsPerBar}
						onChange={handleChange}
						className="input w-[72px] "
					/>
				</div>
			</div>
		</>
	)
}
