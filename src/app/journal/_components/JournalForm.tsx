'use client'
import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

export const JournalForm = ({ submit }: FormProps) => {
	const router = useRouter()
	const [isPending, startTransition] = useTransition()
	const [entry, setEntry] = useState<JournalEntry>({ text: '' })

	const handleSubmit = (e: OnSubmitEvent) => {
		e.preventDefault()
		submit(entry)
		setEntry({ text: '' })
		startTransition(() => {
			router.refresh()
		})
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
				id={'text'}
				name={'Text'}
				value={entry.text}
				handleChange={handleChange}
				width={'200px'}
				height={'200px'}
				disabled={isPending}
			/>
			<Button>Submit</Button>
		</form>
	)
}
