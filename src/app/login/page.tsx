import { LoginForm } from './_components/LoginForm'
import { POST } from '@/lib/fetch'

export default function Login() {

  const login = async (body: any) => {
    'use server'
    const res = await POST('/auth/login', body)
  }

	return (
		<div className="w-full h-full flex justify-center">
      <div className="flex justify-center items-center">
        <LoginForm
          submit={login}
        />
      </div>
		</div>
	)
}
