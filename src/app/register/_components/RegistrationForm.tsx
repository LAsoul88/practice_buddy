'use client'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@/components/Button'
import { FormInput } from '@/components/Input'

interface RegistrationInfo {
	email: string
	username: string
	password: string
  passwordConfirm: string
}

export const RegistrationForm = ({ submit }: FormProps) => {
	const { register, handleSubmit, watch, formState: { errors }} = useForm<RegistrationInfo>()
	const onSubmit: SubmitHandler<RegistrationInfo> = data => submit(data)

	console.log(watch('email'))

	return (
		<form
			className="flex flex-col w-full h-full border rounded-md justify-center items-center bg-slateGray gap-4"
			onSubmit={handleSubmit(onSubmit)}
		>
			<h2 className="text-4xl">Registration</h2>
			<div>
				<div className="flex flex-col text-center items-center p-2">
					<FormInput 
						name={'email'}
						label={'Email'}
						register={register}
						required
					/>
					{errors.email && <span>This field is required.</span>}
				</div>
				<div className="flex flex-col text-center items-center p-2">
					<FormInput 
						name={'username'}
						label={'Username'}
						register={register}
						required
					/>
					{errors.username && <span>This field is required.</span>}
				</div>
				<div className="flex flex-col text-center items-center p-2">
					<FormInput 
						name={'password'}
						label={'Password'}
						register={register}
						required
					/>
					{errors.password && <span>This field is required.</span>}
				</div>
				<div className="flex flex-col text-center items-center p-2">
					<FormInput 
						name={'passwordConfirm'}
						label={'Password Confirm'}
						register={register}
						required
					/>
					{errors.passwordConfirm && <span>This field is required.</span>}
				</div>
				<div className="flex flex-col text-center items-center p-2">
					<Button>Submit</Button>
				</div>
			</div>
		</form>
	)
}
 