import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { register } from '@/lib/actions'

export const RegistrationForm = () => {
	return (
		<form
			className="flex flex-col w-fit h-fit border rounded-md justify-center items-center bg-slateGray p-12 gap-4"
			action={register}
			autoComplete="off"
		>
			<h2 className="text-4xl">Registration</h2>
			<div className="flex flex-col">
				<div className="flex flex-col text-center items-center p-2">
					<Input 
						id={'email'}
						label={'Email'}
						type={'email'}
						width={'200px'}
						height={'36px'}
					/>
				</div>
				<div className="flex flex-col text-center items-center p-2">
					<Input 
						id={'username'}
						label={'Username'}
						type={'text'}
						width={'200px'}
						height={'36px'}
					/>
				</div>
				<div className="flex flex-col text-center items-center p-2">
					<Input
						id={'password'}
						label={'Password'}
						type={'password'}
						width={'200px'}
            height={'36px'}
					/>
				</div>
				<div className="flex flex-col text-center items-center p-2">
					<Input 
						id={'passwordConfirm'}
						label={'Password Confirm'}
						type={'password'}
						width={'200px'}
            height={'36px'}
					/>
				</div>
				<div className="flex flex-col text-center items-center p-2">
					<Button>Submit</Button>
				</div>
			</div>
		</form>
	)
}
 