'use client'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

interface LoginInfo {
  email: string
  password: string
}

export const LoginForm = ({ children, submit }: FormProps) => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: '',
    password: ''
  })

  const handleSubmit = (e: OnSubmitEvent) => {
    e.preventDefault()
    submit('')
    setLoginInfo({ email: '', password: '' })
  }

  const handleChange = (e: OnChangeEvent) => {
    const value: string = e.target.value
    const field: string = e.target.id.toLowerCase()
    setLoginInfo({ ...loginInfo, [field]: value })
  }
  return (
    <form className="flex p-2 space-between w-full border rounded-md" onSubmit={handleSubmit}>
      <div className="flex flex-col text-center items-center w-1/2 p-2">
        <Input 
          type="text"
          name={'Email'}
          value={loginInfo.email}
          handleChange={handleChange}
        />
      </div>
      <div className="flex flex-col text-center items-center w-1/2 p-2">
        <Input 
          type="text"
          name={'Password'}
          value={loginInfo.password}
          handleChange={handleChange}
        />
      </div>
      <Button>Submit</Button>
    </form>
  )
}