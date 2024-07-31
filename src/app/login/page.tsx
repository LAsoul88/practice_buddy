import { LoginForm } from './_components/LoginForm'
import { redirect } from 'next/navigation'
import { POST } from '@/lib/fetch'

export default function Login() {

  const login = async (body: any) => {
    'use server'
    try {
      const res = await POST('/auth/login', body)
      redirect(res.redirect)
    } catch (error) {
      console.log(error)
    }
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
