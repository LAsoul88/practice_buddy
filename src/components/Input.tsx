import { ChangeEvent } from 'react'
import { UseFormRegister, FieldValues, Path } from 'react-hook-form'

// type InputProps = {
//   inputType?: 'input' | 'select' | 'textarea'
//   type?: string
//   id: string
//   name: string
//   min?: number
//   max?: number
//   value: number | string
//   width?: string
//   height?: string
//   options?: string[]
//   disabled?: boolean
//   register?: UseFormRegister<FormRegisterValues>
//   handleChange?: (e: ChangeEvent<FormElements>) => void
// }

// export const Input = ({ 
//   inputType = 'input',
//   type = 'number',
//   id,
//   name,
//   min,
//   max,
//   value,
//   width = '72px',
//   height = '34px',
//   options = [],
//   disabled = false,
//   register,
//   handleChange
// }: InputProps) => {
//   const style = `input w-[${width}] h-[${height}]`
//   const createInput = () => {
//     switch (inputType) {
//       case 'select':
//         return (
//           <select
//             id={id}
//             name={name}
//             defaultValue={value}
//             onChange={handleChange}
//             className={style}
//             style={{width: `${width}`, height: `${height}`}}
//             disabled={disabled}
//           >
//             { options.map(option => {
//               return <option key={option}>{option}</option>
//             })}
//           </select>
//         )
//       case 'textarea':
//         return (
//           <textarea
//             id={id}
//             name={name}
//             value={value}
//             onChange={handleChange}
//             className={style}
//             disabled={disabled}
//           />
//             // find a way to correctly handle change of text area
//         )
//       default:
//         // if (register) return (
//         //   <input 
//         //     {...register(id)}
//         //     id={id}
//         //     name={name}
//         //     min={min}
//         //     max={max}
//         //     className={style}
//         //   />
//         // )
//         return (
//           <input 
//             type={type}
//             name={name}
//             id={id}
//             min={min}
//             max={max}
//             value={value}
//             onChange={handleChange}
//             className={style}
//             disabled={disabled}
//           />
//         )
//     }
//   }
//   return (
//     <>
//       <label htmlFor={name}>{name}</label>
//       { createInput() }
//     </>
//   )
// }
interface InputProps {
  name: Path<RegistrationFormValues>
  label: string
  register: UseFormRegister<FormRegisterValues>
  required?: boolean
  width?: string
  height?: string
}

export const Input = ({ 
  name,
  label, 
  register, 
  required, 
  width = '72px', 
  height = '36px' 
}: InputProps) => {
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

interface SelectProps {
  name: Path<RegistrationFormValues>
  label: string
  register: UseFormRegister<FormRegisterValues>
  options: string[]
  width: string
  height: string
}

export const Select = ({ 
  name,
  label, 
  register, 
  options,
  width = '72px', 
  height = '36px'  
}: SelectProps) => {
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