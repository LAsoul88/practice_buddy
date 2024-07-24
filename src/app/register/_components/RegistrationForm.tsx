'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@/components/Button'

interface RegistrationInfo {
	email: string
	username: string
	password: string
  passwordConfirm: string
}

export const RegistrationForm = ({ submit }: FormProps) => {
	const { register, handleSubmit, watch, formState: { errors }} = useForm<RegistrationInfo>()
	
	const onSubmit: SubmitHandler<RegistrationInfo> = data => submit(data)

	const confirmPassMatch = () => {
		return (watch('password') !== watch('passwordConfirm')) && (watch('password').length > 3 && watch('passwordConfirm').length > 3)
	}

	return (
		<form
			className="flex flex-col w-full h-full border rounded-md justify-center items-center bg-slateGray gap-4"
			onSubmit={handleSubmit(onSubmit)}
			autoComplete="off"
		>
			<h2 className="text-4xl">Registration</h2>
			<div>
				<div className="flex flex-col text-center items-center p-2">
					<label>Email</label>
					<input 
						{...register('email', {
							required: {
                value: true, 
                message: 'This field is required to submit.'
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'This field must be a valid email.'
              }
						})}
						className='input w-[200px] h-[36px]'
					/>
					{ errors.email && <span role="alert">{errors.email.message}</span> }
				</div>
				<div className="flex flex-col text-center items-center p-2">
					<label>Username</label>
					<input 
						{...register('username', {
							required: {
                value: true, 
                message: 'This field is required to submit.'
              },
						})}
						className='input w-[200px] h-[36px]'
					/>
					{ errors.username && <span role="alert">{errors.username.message}</span> }
				</div>
				<div className="flex flex-col text-center items-center p-2">
					<label>Password</label>
					<input 
						{...register('password', {
							required: {
                value: true,
                message: 'This field is required to submit.'
              },
              minLength: {
                value: 4,
                message: 'Password must be 4 or more characters.'
              }
						})}
						type="password"
						className='input w-[200px] h-[36px]'
					/>
					{ errors.password && <span role="alert">{errors.password.message}</span> }
				</div>
				<div className="flex flex-col text-center items-center p-2">
					<label>Confirm Password</label>
					<input 
						{...register('passwordConfirm', {
							required: {
                value: true,
                message: 'This field is required to submit.'
              },
						})}
						type="password"
						className='input w-[200px] h-[36px]'
					/>
					{ confirmPassMatch() && <span role="alert">'Passwords do not match'</span> }
					{ (errors.passwordConfirm && <span role="alert">{errors.passwordConfirm.message}</span>) }
				</div>
				<div className="flex flex-col text-center items-center p-2">
					<Button>Submit</Button>
				</div>
			</div>
		</form>
	)
}
 