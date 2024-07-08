import { LoginForm } from './_components/LoginForm'
import { POST } from '@/lib/fetch'

export default function Login() {

  const login = async (body: any) => {
    'use server'
    await POST('/login', body)
  }

	return (
		<div className="w-full h-full flex justify-center p-40">
      <div className="flex w-full h-full">
        <LoginForm
          submit={login}
        />
      </div>
		</div>
	)
}
