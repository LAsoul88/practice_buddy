'use client'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

interface LoginInfo {
  email: string
  password: string
}

export const LoginForm = ({ submit }: FormProps) => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: '',
    password: ''
  })

  const handleSubmit = (e: OnSubmitEvent) => {
    e.preventDefault()
    submit(loginInfo)
    setLoginInfo({ email: '', password: '' })
  }

  const handleChange = (e: OnChangeEvent) => {
    const value: string = e.target.value
    const field: string = e.target.id.toLowerCase()
    setLoginInfo({ ...loginInfo, [field]: value })
  }
  return (
    <form className="flex w-full h-full border rounded-md justify-center items-center bg-slateGray" onSubmit={handleSubmit}>
      <div>
        <div className="flex flex-col text-center items-center p-2">
          <Input 
            type="email"
            name={'Email'}
            value={loginInfo.email}
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-col text-center items-center p-2">
          <Input 
            type="password"
            name={'Password'}
            value={loginInfo.password}
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-col text-center items-center p-2">
          <Button>Submit</Button>
        </div>
      </div>
    </form>
  )
}