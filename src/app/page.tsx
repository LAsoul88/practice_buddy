'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/app/(component)/Button'
import { Icon } from '@/app/(component)/Icon'
import Metronome from '@/util/metronome'

export default function Home() {
  const [metronome, setMetronome] = useState<Metronome>({} as Metronome)
  const [isRunning, setIsRunning] = useState(false)

  const startMetronome = () => {
    if (metronome) {
      metronome.startStop()
      setIsRunning(!isRunning)
    }
    console.log(metronome)
  }

  useEffect(() => {
    setMetronome(new Metronome)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Practice Buddy</h1>
      <Button 
        onClick={() => {
          startMetronome()
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
    </main>
  )
}
