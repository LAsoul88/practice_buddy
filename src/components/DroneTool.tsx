'use client'
import { useState, } from 'react'
import { Button } from './Button'
import { Drone } from '@/util/drone'

export const DroneTool = () => {
  const [drone, setDrone] = useState<Drone>()

  const handleDrone = () => {
    if (!drone) {
      const newDrone = new Drone()
      newDrone.startStop()
      setDrone(newDrone)
    } else {
      drone.startStop()
    }
  }

  return (
    <>
    <Button
      onClick={() => {
        handleDrone()
      }} 
    >
      Start
    </Button>
    </>
  )
}