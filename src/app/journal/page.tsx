'use client'
import { useState, FormEvent, ChangeEvent } from 'react'
import { Button } from '@/components/Button'

export default function Journal() {
  const [entry, setEntry] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setEntry('')
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value: string = e.target.value
    setEntry(value)
  }
  return (
    <div className="w-full h-full flex flex-col">
      <h2>Practice Journal</h2>
      <form className="flex flex-col w-fit h-fit" onSubmit={handleSubmit}>
        <textarea 
          className="input" 
          value={entry}
          onChange={handleChange}
        ></textarea>
        <Button
          onClick={() => {}}
        >
          Submit
        </Button>
      </form>
    </div>
  )
}