import { ChangeEvent } from 'react'

type InputProps = {
  inputType?: 'input' | 'select' | 'textarea'
  type?: string
  name: string
  min?: number
  max?: number
  value: number | string
  width?: string
  height?: string
  options?: string[]
  handleChange: (e: ChangeEvent<FormElements>) => void
}

export const Input = ({ 
  inputType = 'input',
  type = 'number',
  name,
  min,
  max,
  value,
  width = '72px',
  height = '34px',
  options = [],
  handleChange
}: InputProps) => {
  const style = `input w-[${width}] h-[${height}]`
  const createInput = () => {
    switch (inputType) {
      case 'select':
        return (
          <select
            id={name}
            name={name}
            defaultValue={value}
            onChange={handleChange}
            className={style}
            style={{width: `${width}`, height: `${height}`}}
          >
            { options.map(option => {
              return <option key={option}>{option}</option>
            })}
          </select>
        )
      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            className={style}
          />
            // find a way to correctly handle change of text area
        )
      default:
        return (
          <input 
            type={type}
            name={name}
            id={name}
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            className={style}
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