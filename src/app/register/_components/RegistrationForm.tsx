'use client'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

interface RegistrationInfo {
	email: string
	username: string
	password: string
  passwordConfirm: string
}

export const RegistrationForm = ({ submit }: FormProps) => {
	const [registrationInfo, setRegistrationInfo] = useState<RegistrationInfo>({
		email: '',
		username: '',
		password: '',
    passwordConfirm: ''
	})

	const handleSubmit = (e: OnSubmitEvent) => {
		e.preventDefault()
		submit(registrationInfo)
		setRegistrationInfo({ 
      email: '', 
      username: '', 
      password: '', 
      passwordConfirm: '' 
    })
	}

	const handleChange = (e: OnChangeEvent) => {
		const value: string = e.target.value
		const field: string = e.target.id
		setRegistrationInfo({ ...registrationInfo, [field]: value })
	}
  console.log(registrationInfo)
	return (
		<form
			className="flex flex-col w-full h-full border rounded-md justify-center items-center bg-slateGray gap-4"
			onSubmit={handleSubmit}
		>
			<h2 className="text-4xl">Registration</h2>
			<div>
				<div className="flex flex-col text-center items-center p-2">
					<Input
						type="email"
						id={'email'}
            name={'Email'}
						value={registrationInfo.email}
						handleChange={handleChange}
					/>
				</div>
				<div className="flex flex-col text-center items-center p-2">
					<Input
						type="text"
						id={'username'}
            name={'Username'}
						value={registrationInfo.username}
						handleChange={handleChange}
					/>
				</div>
				<div className="flex flex-col text-center items-center p-2">
					<Input
						type="password"
						id={'password'}
            name={'Password'}
						value={registrationInfo.password}
						handleChange={handleChange}
					/>
				</div>
        <div className="flex flex-col text-center items-center p-2">
					<Input
						type="password"
            id={'passwordConfirm'}
						name={'Password Confirm'}
						value={registrationInfo.passwordConfirm}
						handleChange={handleChange}
					/>
				</div>
				<div className="flex flex-col text-center items-center p-2">
					<Button>Submit</Button>
				</div>
			</div>
		</form>
	)
}
