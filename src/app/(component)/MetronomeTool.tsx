'use client'
import { useState } from 'react'
import { Button } from './Button'
import { Icon } from './Icon'
import Metronome from '@/util/metronome'

export const MetronomeTool = () => {
  const [metronome, setMetronome] = useState<Metronome>()
  const [isRunning, setIsRunning] = useState(false)

  const startStopMetronome = () => {
    if (!metronome) {
      const newMetronome = new Metronome
      newMetronome.startStop()
      setMetronome(newMetronome)
    } else {
      metronome.startStop()
    }
    setIsRunning(!isRunning)
  }
  return (
    <Button 
        onClick={() => {
          startStopMetronome()
        }}
      >
        { isRunning 
            ? 
          <Icon 
            path={'/images/pause.svg'} 
            alt={'pause button'} 
          />
            :
          <Icon 
            path={'/images/play.svg'} 
            alt={'play button'} 
          />
        }
      </Button>
  )
}