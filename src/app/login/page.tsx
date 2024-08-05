import { LoginForm } from './_components/LoginForm'
import { redirect } from 'next/navigation'
import { POST } from '@/lib/fetch'

export default function Login() {
  const login = async (body: any) => {
    'use server'
    let redirectPath: string | null = null
    try {
      const res = await POST('/auth/login', body)
      redirectPath = res.redirect
    } catch (error) {
      console.log(error)
    } finally {
      if (redirectPath) redirect(redirectPath)
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
