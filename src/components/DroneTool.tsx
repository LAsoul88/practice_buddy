'use client'
import { useState, useEffect, ChangeEvent } from 'react'
import { Button } from './Button'
import { Drone, freqMap } from '@/util/drone'
import { Play, Pause } from '@/assets/SVGS'

interface DroneSettings {
  frequency: string
  volume: number
}

const notes = Object.keys(freqMap)

// gain value on GainNode requires value to be >= -1 and <= 1
// this function allows volume to be presented to user as value between 0 - 20
const convertVolume = (gain: number) => gain / 10 - 1

export const DroneTool = () => {
  const [drone, setDrone] = useState<Drone>()
  const [settings, setSettings] = useState<DroneSettings>({
    frequency: 'A',
    volume: 3
  })
  const [isRunning, setIsRunning] = useState(false)

  const handleDrone = () => {
    if (!drone) {
      const newDrone = new Drone(settings.frequency)
      newDrone.startStop()
      setDrone(newDrone)
    } else {
      drone.startStop()
    }
    setIsRunning(!isRunning)
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const value: string | number = e.target.value
    const field: string = e.target.id
    setSettings({ ...settings, [field]: value })
  }

  useEffect(() => {
    if (drone) {
      drone.frequency = freqMap[settings.frequency]
      drone.oscillator.frequency.value = freqMap[settings.frequency]
      drone.envelope.gain.value = convertVolume(settings.volume)
      console.log(drone.envelope)
    }
  }, [settings.frequency, settings.volume])

  return (
    <>
      <Button
        onClick={() => {
          handleDrone()
        }} 
      >
        { isRunning ? (
          <Pause height={'200px'} width={'200px'} fill={'#0B183E'} />
        ) : (
          <Play height={'200px'} width={'200px'} fill={'#0B183E'} />
        )}
      </Button>
      <select
        onChange={handleChange}
        defaultValue={settings.frequency}
        id="frequency"
        className="input"
      >
        { notes.map(note => {
            return <option key={note}>{note}</option>
          }
        )}
      </select>
      <input 
        type="number"
        id="volume"
        min={0}
        max={20}
        value={settings.volume}
        onChange={handleChange}
        className="input"
      />
    </>
  )
}