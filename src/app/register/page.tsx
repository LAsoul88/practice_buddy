import { RegistrationForm } from './_components/RegistrationForm'
import { POST } from '@/lib/fetch'

export default function Register() {

  const register = async (body: any) => {
    'use server'
    await POST('/auth/register', body)
  }

	return (
		<div className="w-full h-full flex justify-center">
      <div className="flex justify-center items-center">
        <RegistrationForm
          submit={register}
        />
      </div>
		</div>
	)
}
