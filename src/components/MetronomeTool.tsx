'use client'
import { useState, useEffect, ChangeEvent } from 'react'
import { Button } from './Button'
import { Icon } from './Icon'
import Metronome from '@/util/metronome'

interface MetronomeProps {
  tempo: number
  beatsPerBar: number
}

export const MetronomeTool = () => {
  const [metronome, setMetronome] = useState<Metronome>()
  const [tempo, setTempo] = useState(120)
  const [beatsPerBar, setBeatsPerBar] = useState(4)
  const [isRunning, setIsRunning] = useState(false)

  const handleMetronome = () => {
    if (!metronome) {
      const newMetronome = new Metronome(tempo, beatsPerBar)
      newMetronome.startStop()
      setMetronome(newMetronome)
    } else {
      metronome.tempo = tempo
      metronome.startStop()
    }
    setIsRunning(!isRunning)
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    let value = e.target.value
    setTempo(parseInt(value))
  }
  console.log(tempo)

  return (
    <>
      <Button 
        onClick={() => {
          handleMetronome()
        }}
      >
        { isRunning 
            ? 
          <Icon 
            path={'/images/pause.svg'} 
            alt={'pause button'} 
            height={100}
            width={100}
          />
            :
          <Icon 
            path={'/images/play.svg'} 
            alt={'play button'} 
            height={100}
            width={100}
          />
        }
      </Button>
      <input
        type="number"
        name="tempo"
        value={tempo}
        onChange={handleChange}
      />
      <Button 
        onClick={() => {
          // setTempo()
        }}
      >Submit</Button>
    </>
  )
}