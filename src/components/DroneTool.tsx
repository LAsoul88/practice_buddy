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

export const DroneTool = () => {
  const [drone, setDrone] = useState<Drone>()
  const [settings, setSettings] = useState<DroneSettings>({
    frequency: 'A',
    volume: -0.7
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
    const value: string = e.target.value
    const field: string = e.target.id
    setSettings({ ...settings, [field]: value })
  }

  useEffect(() => {
    if (drone) {
      drone.frequency = freqMap[settings.frequency]
      drone.oscillator.frequency.value = freqMap[settings.frequency]
      drone.envelope.gain.value = settings.volume
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
        min={-1}
        max={1}
        step="0.1"
        value={settings.volume}
        onChange={handleChange}
        className="input"
      />

    </>
  )
}