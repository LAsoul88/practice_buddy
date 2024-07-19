import { ChangeEvent } from 'react'
import { UseFormRegister, Path } from 'react-hook-form'

type InputProps = {
  inputType?: 'input' | 'select' | 'textarea'
  type?: string
  id: string
  name: string
  min?: number
  max?: number
  value: number | string
  width?: string
  height?: string
  options?: string[]
  disabled?: boolean
  handleChange?: (e: ChangeEvent<FormElements>) => void
}

export const Input = ({ 
  inputType = 'input',
  type = 'number',
  id,
  name,
  min,
  max,
  value,
  width = '72px',
  height = '34px',
  options = [],
  disabled = false,
  handleChange
}: InputProps) => {
  const style = `input w-[${width}] h-[${height}]`
  const createInput = () => {
    switch (inputType) {
      case 'select':
        return (
          <select
            id={id}
            name={name}
            defaultValue={value}
            onChange={handleChange}
            className={style}
            style={{width: `${width}`, height: `${height}`}}
            disabled={disabled}
          >
            { options.map(option => {
              return <option key={option}>{option}</option>
            })}
          </select>
        )
      case 'textarea':
        return (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={handleChange}
            className={style}
            disabled={disabled}
          />
        )
      default:
        return (
          <input 
            type={type}
            name={name}
            id={id}
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            className={style}
            disabled={disabled}
          />
        )
    }
  }
  return (
    <>
      <label htmlFor={name}>{name}</label>
      { createInput() }
    </>
  )
}
interface FormInputProps {
  name: Path<RegistrationFormValues>
  label: string
  register: UseFormRegister<FormRegisterValues>
  required?: boolean
  width?: string
  height?: string
}

export const FormInput = ({ 
  name,
  label, 
  register, 
  required,
  width = '72px', 
  height = '36px' 
}: FormInputProps) => {
  const style = `input w-[${width}] h-[${height}]`
  return (
    <>
      <label>{label}</label>
      <input 
        {...register(name, { required })}
        className={style}
      />
    </>
  )
}

interface FormSelectProps {
  name: Path<RegistrationFormValues>
  label: string
  register: UseFormRegister<FormRegisterValues>
  options: string[]
  width: string
  height: string
}

export const FormSelect = ({ 
  name,
  label, 
  register, 
  options,
  width = '72px', 
  height = '36px'  
}: FormSelectProps) => {
  const style = `input w-[${width}] h-[${height}]`
  return (
    <>
      <label>{label}</label>
      <select
        {...register(name)}
        className={style}
      >
        { options.map(option => {
          return <option key={option}>{option}</option>
        })}
      </select>
    </>
  )
}