import { LoginForm } from './_components/LoginForm'
import { POST } from '@/lib/fetch'

export default function Login() {

  const login = async (body: any) => {
    'use server'
    await POST('/login', body)
  }

	return (
		<div>
			<LoginForm
        submit={login}
      >
      </LoginForm>
		</div>
	)
}
