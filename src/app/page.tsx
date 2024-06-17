'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/app/(component)/Button'
import Metronome from '@/util/metronome'

export default function Home() {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)
  const [metronome, setMetronome] = useState<Metronome>()

  const startMetronome = () => {
    if (metronome) metronome.startStop()
    console.log(metronome)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const val = window.AudioContext = window.AudioContext || window.webkitAudioContext
      setAudioContext(new val)
      if (audioContext !== null) {
        setMetronome(new Metronome(audioContext))
      }
    }
  }, [])
  console.log(metronome)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Practice Buddy</h1>
      <Button 
        onClick={() => {
          startMetronome()
        }}
      >
        Start
      </Button>
    </main>
  )
}
