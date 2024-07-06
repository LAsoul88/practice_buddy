import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  type?: 'primary' | 'secondary'
  border?: boolean
  disabled?: boolean
  onClick: () => void
}

export const Button = ({ 
  children, 
  type = 'primary', 
  border,
  disabled = false, 
  onClick 
}: ButtonProps) => {
  return (
    <button 
      disabled={disabled}
      className={`${border ? 'border border-2 border-oxfordBlue rounded-md' : ''} px-2 py-1`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}