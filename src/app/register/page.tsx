import { RegistrationForm } from './_components/RegistrationForm'
import { POST } from '@/lib/fetch'

export default function Register() {

  const register = async (body: any) => {
    'use server'
    await POST('/auth/register', body)
  }

	return (
		<div className="w-full h-full flex justify-center p-40">
      <div className="flex w-full h-full">
        <RegistrationForm
          submit={register}
        />
      </div>
		</div>
	)
}
