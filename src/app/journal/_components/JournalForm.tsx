'use client'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

interface JournalEntry {
	text: string
}

export const JournalForm = ({ submit }: FormProps) => {
	const [entry, setEntry] = useState<JournalEntry>({ text: '' })

	const handleSubmit = (e: OnSubmitEvent) => {
		e.preventDefault()
		submit(entry)
		setEntry({ text: '' })
	}

	const handleChange = (e: OnChangeEvent) => {
		const value: string = e.target.value
		const field: string = e.target.id.toLowerCase()
		setEntry({ ...entry, [field]: value })
	}
	return (
		<form className="flex flex-col" onSubmit={handleSubmit}>
			<Input
				inputType="textarea"
				name="Text"
				value={entry.text}
				handleChange={handleChange}
				width={'200px'}
				height={'200px'}
			/>
			<Button>Submit</Button>
		</form>
	)
}
