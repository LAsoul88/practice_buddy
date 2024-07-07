'use client'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

export const JournalForm = ({ submit }: FormProps) => {
	const [entry, setEntry] = useState('')

	const handleSubmit = (e: OnSubmitEvent) => {
		e.preventDefault()
		submit(entry)
		setEntry('')
	}

	const handleChange = (e: OnChangeEvent) => {
		const value: string = e.target.value
		setEntry(value)
	}
	return (
		<form className="flex flex-col" onSubmit={handleSubmit}>
			<Input
				inputType="textarea"
				name="Entry"
				value={entry}
				handleChange={handleChange}
				width={'200px'}
				height={'200px'}
			/>
			<Button>Submit</Button>
		</form>
	)
}
