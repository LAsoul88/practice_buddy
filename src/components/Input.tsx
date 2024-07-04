import { ChangeEvent } from 'react'

interface InputProps {
  inputType: string
  type: string
  name: string
  min?: number
  max?: number
  value: number
  onChange: (e: ChangeEvent) => void
  width: string
  height: string
}

export const Input = ({ 
  inputType,
  type,
  name,
  min,
  max,
  value,
  width,
  height,
  onChange
}: InputProps) => {
  const createInput = () => {
    switch (inputType) {
      case 'input':
        return (
          <input 
            type={type}
            min={min}
            max={max}
            value={value}
            onChange={onChange}
            className={`input w-[${width}] h-[${height}]`}
          />
        )
      case 'select':
        return (
          <select
          
          >
  
          </select>
        )
      case 'textarea':
        return (
          <textarea
          
          >
  
          </textarea>
        )

    }
  }
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      { createInput() }
    </div>
  )
}