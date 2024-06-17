'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/app/(component)/Button'
import Metronome from '@/util/metronome'

export default function Home() {
  const [metronome, setMetronome] = useState<Metronome>()

  const startMetronome = () => {
    if (metronome) metronome.startStop()
    console.log(metronome)
  }

  const createMetronome = () => {
    setMetronome(new Metronome)
  }

  console.log(metronome)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Practice Buddy</h1>
      <Button 
        onClick={() => {
          createMetronome()
        }}
      >
        Create
      </Button>
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
