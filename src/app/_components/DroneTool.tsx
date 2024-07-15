'use client'
import { useState, useEffect, ChangeEvent } from 'react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Drone, freqMap } from '@/util/drone'
import { Play, Pause } from '@/assets/SVGS'

interface DroneSettings {
	frequency: string
	volume: number
}

const notes = Object.keys(freqMap)

const convertVolume = (gain: number) => gain / 10

export const DroneTool = () => {
	const [drone, setDrone] = useState<Drone>()
	const [settings, setSettings] = useState<DroneSettings>({
		frequency: 'A',
		volume: 3,
	})
	const [isRunning, setIsRunning] = useState(false)

	const handleDrone = () => {
		if (!drone) {
			const newDrone = new Drone(
				freqMap[settings.frequency],
				convertVolume(settings.volume)
			)
			newDrone.startStop()
			setDrone(newDrone)
		} else {
			drone.startStop()
		}
		setIsRunning(!isRunning)
	}

	const handleChange = (
		e: ChangeEvent<FormElements>
	) => {
		const value: string | number = e.target.value
		const field: string = e.target.id.toLowerCase()
		setSettings({ ...settings, [field]: value })
	}

	useEffect(() => {
		if (drone) {
			const freq = freqMap[settings.frequency]
			const vol = convertVolume(settings.volume)
			drone.frequency = freq
			drone.oscillator.frequency.value = freq
			drone.gain = vol
			drone.envelope.gain.value = vol
		}
	}, [settings.frequency, settings.volume])

	return (
		<>
			<Button
				onClick={() => {
					handleDrone()
				}}
			>
				{isRunning ? (
					<Pause height={'200px'} width={'200px'} fill={'#0B183E'} />
				) : (
					<Play height={'200px'} width={'200px'} fill={'#0B183E'} />
				)}
			</Button>
			<div className="flex p-2 space-between w-full">
				<div className="flex flex-col text-center items-center w-1/2 p-2">
					<Input
						inputType="select"
						id={'frequency'}
						name={'Frequency'}
						value={settings.frequency}
						handleChange={handleChange}
						options={notes}
					/>
				</div>
				<div className="flex flex-col text-center items-center w-1/2 p-2">
					<Input
						id={'volume'}
						name={'Volume'}
						min={0}
						max={10}
						value={settings.volume}
						handleChange={handleChange}
					/>
				</div>
			</div>
		</>
	)
}
