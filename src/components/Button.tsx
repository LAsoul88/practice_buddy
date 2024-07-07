import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  type?: 'submit' | 'reset' | 'button'
  border?: boolean
  disabled?: boolean
  onClick?: () => void
}

export const Button = ({ 
  children, 
  type = 'submit', 
  border,
  disabled = false, 
  onClick 
}: ButtonProps) => {
  return (
    <button 
      disabled={disabled}
      className={`${border ? 'border border-2 border-oxfordBlue rounded-md' : ''} px-2 py-1`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}