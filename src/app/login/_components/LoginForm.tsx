'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@/components/Button'

interface LoginInfo {
  user: string
  password: string
}

export const LoginForm = ({ submit }: FormProps) => {
  const { register, handleSubmit, formState: { errors }} = useForm<LoginInfo>()

  const onSubmit: SubmitHandler<LoginInfo> = data => submit(data)
  return (
    <form className="flex flex-col w-fit h-fit border rounded-md justify-center items-center bg-slateGray p-12 gap-8" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-4xl">Login</h2>
      <div className="flex flex-col">
        <div className="flex flex-col text-center items-center p-2">
          <label>Email/Username</label>
          <input 
            {...register('user', {
              required: {
                value: true, 
                message: 'This field is required to submit.'
              },
            })}
            className='input w-[200px] h-[36px]'
          />
          { errors.user && <span role="alert">{errors.user.message}</span> }
        </div>
        <div className="flex flex-col text-center items-center p-2">
          <label>Password</label>
          <input 
            {...register('password', {
              required: {
                value: true,
                message: 'This field is required to submit.'
              },
              minLength: {
                value: 4,
                message: 'Password must be 4 or more characters.'
              }
            })}
            type="password"
            className='input w-[200px] h-[36px]'
          />
          { errors.password && <span role="alert">{errors.password.message}</span> }
        </div>
        <div className="flex flex-col text-center items-center p-2">
          <Button>Submit</Button>
        </div>
      </div>
    </form>
  )
}