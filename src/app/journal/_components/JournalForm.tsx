'use client'
import { useState, useEffect } from 'react'
import type { ReactNode, FormEvent, ChangeEvent } from 'react'
import { Button } from '@/components/Button'
import { Input, FormElements } from '@/components/Input'

interface FormProps {
  submit: (body: any) => void
}

export const JournalForm = ({ submit }: FormProps) => {
	const [entry, setEntry] = useState('')

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		submit(entry)
		setEntry('')
	}

	const handleChange = (e: ChangeEvent<FormElements>) => {
		const value: string = e.target.value
		setEntry(value)
	}
	return (
		<form className="flex flex-col" onSubmit={handleSubmit}>
			<Input
				inputType="textarea"
				name="entry"
				value={entry}
				handleChange={handleChange}
				width={'200px'}
				height={'200px'}
			/>
			<Button onClick={() => {}}>Submit</Button>
		</form>
	)
}
