'use client'
import { useState, ChangeEvent } from 'react'
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
			metronome.tempo = settings.tempo
			metronome.startStop()
		}
		setIsRunning(!isRunning)
	}

	const updateMetronome = () => {
		if (metronome) {
			metronome.tempo = settings.tempo
			metronome.beatsPerBar = settings.beatsPerBar
		}
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value
		setSettings({ ...settings, [e.target.id]: value })
	}

	return (
		<>
			<Button
				onClick={() => {
					handleMetronome()
				}}
			>
				{isRunning ? (
					<Pause
						height={'100px'}
						width={'100px'}
            fill={'#0B183E'}
					/>
				) : (
					<Play
						height={'100px'}
						width={'100px'}
            fill={'#0B183E'}
					/>
				)}
			</Button>
			<input
				type="number"
				id="tempo"
				name="tempo"
				value={settings.tempo}
				onChange={handleChange}
			/>
			<input
				type="number"
				id="beatsPerBar"
				name="beatsPerBar"
				value={settings.beatsPerBar}
				onChange={handleChange}
			/>
			<Button
				onClick={() => {
					updateMetronome()
				}}
			>
				Submit
			</Button>
		</>
	)
}
