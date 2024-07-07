'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/Button'
import { Metronome } from '@/util/metronome'
import { Play, Pause } from '@/assets/SVGS'
import { Input } from '@/components/Input'

interface MetronomeSettings {
	tempo: number
	beats: number
}

export const MetronomeTool = () => {
	const [metronome, setMetronome] = useState<Metronome>()
	const [settings, setSettings] = useState<MetronomeSettings>({
		tempo: 120,
		beats: 4,
	})
	const [isRunning, setIsRunning] = useState(false)

	const handleMetronome = () => {
		if (!metronome) {
			const newMetronome = new Metronome(settings.tempo, settings.beats)
			newMetronome.startStop()
			setMetronome(newMetronome)
		} else {
			metronome.startStop()
		}
		setIsRunning(!isRunning)
	}

	const handleChange = (e: OnChangeEvent) => {
		const value: string = e.target.value
		const field: string = e.target.id.toLowerCase()
		setSettings({ ...settings, [field]: value })
	}

	useEffect(() => {
		if (metronome) {
			metronome.tempo = settings.tempo
			metronome.beatsPerBar = settings.beats
		}
	}, [settings.tempo, settings.beats])

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
					<Input 
						name={'Tempo'}
						value={settings.tempo}
						handleChange={handleChange}
						min={24}
						max={300}
					/>
				</div>
				<div className="flex flex-col text-center items-center w-1/2 p-2">
					<Input 
						name="Beats"
						value={settings.beats}
						handleChange={handleChange}
						min={2}
						max={32}
					/>
				</div>
			</div>
		</>
	)
}
