import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { login } from '@/lib/actions'

export const LoginForm = () => {
  return (
    <form className="flex flex-col w-fit h-fit border rounded-md justify-center items-center bg-slateGray p-12 gap-8" action={login}>
      <h2 className="text-4xl">Login</h2>
      <div className="flex flex-col">
        <div className="flex flex-col text-center items-center p-2">
          <Input
            id={'user'}
            name={'emailUsername'}
            label={'Email/Username'}
            type={'text'}
            width={'200px'}
            height={'36px'}
          />
        </div>
        <div className="flex flex-col text-center items-center p-2">
        <Input
            id={'password'}
            name={'password'}
            label={'Password'}
            type={'password'}
            width={'200px'}
            height={'36px'}
          />
        </div>
        <div className="flex flex-col text-center items-center p-2">
          <Button>Submit</Button>
        </div>
      </div>
    </form>
  )
}