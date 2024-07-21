'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@/components/Button'
import { FormInput } from '@/components/Input'

interface LoginInfo {
  email: string
  password: string
}

export const LoginForm = ({ submit }: FormProps) => {
  const { register, handleSubmit, watch, formState: { errors }} = useForm<LoginInfo>()


  console.log(errors)
  const onSubmit: SubmitHandler<LoginInfo> = data => submit(data)
  return (
    <form className="flex flex-col w-full h-full border rounded-md justify-center items-center bg-slateGray gap-16" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-4xl">Login</h2>
      <div>
        <div className="flex flex-col text-center items-center p-2">
          <FormInput 
            name={'email'}
            label={'Email'}
            register={register}
            errors={errors}
          />
        </div>
        <div className="flex flex-col text-center items-center p-2">
          <FormInput 
            name={'password'}
            label={'Password'}
            register={register}
            errors={errors}
          />
        </div>
        <div className="flex flex-col text-center items-center p-2">
          <Button>Submit</Button>
        </div>
      </div>
    </form>
  )
}