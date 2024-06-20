'use client'
import { useState, useEffect, ChangeEvent } from 'react'
import { Button } from './Button'
import { Drone, freqMap } from '@/util/drone'

interface DroneSettings {
  frequency: string
}

const notes = Object.keys(freqMap)

export const DroneTool = () => {
  const [drone, setDrone] = useState<Drone>()
  const [settings, setSettings] = useState<DroneSettings>({
    frequency: 'A'
  })

  const handleDrone = () => {
    if (!drone) {
      const newDrone = new Drone(settings.frequency)
      newDrone.startStop()
      setDrone(newDrone)
    } else {
      drone.startStop()
    }
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value: string = e.target.value
    setSettings({ ...settings, frequency: value })
  }

  useEffect(() => {
    if (drone) {
      drone.frequency = freqMap[settings.frequency]
    }
  }, [settings.frequency])

  console.log(settings)
  return (
    <>
      <Button
        onClick={() => {
          handleDrone()
        }} 
      >
        Start
      </Button>
      <select
        onChange={handleChange}
        defaultValue={settings.frequency}
      >
        { notes.map(note => {
            return <option key={note}>{note}</option>
          }
        )}
      </select>
    </>
  )
}