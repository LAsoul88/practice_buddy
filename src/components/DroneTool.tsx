'use client'
import { useState, useEffect, ChangeEvent } from 'react'
import { Button } from './Button'
import { Drone, freqMap } from '@/util/drone'
import { Play, Pause } from '@/assets/SVGS'

interface DroneSettings {
  frequency: string
}

const notes = Object.keys(freqMap)

export const DroneTool = () => {
  const [drone, setDrone] = useState<Drone>()
  const [settings, setSettings] = useState<DroneSettings>({
    frequency: 'A'
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

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value: string = e.target.value
    setSettings({ ...settings, frequency: value })
  }

  useEffect(() => {
    if (drone) {
      drone.frequency = freqMap[settings.frequency]
      drone.oscillator.frequency.value = freqMap[settings.frequency]
    }
  }, [settings.frequency])

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
        className="input"
      >
        { notes.map(note => {
            return <option key={note}>{note}</option>
          }
        )}
      </select>
    </>
  )
}