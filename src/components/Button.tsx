import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  type?: 'primary' | 'secondary'
  disabled?: boolean
  onClick: () => void
}

export const Button = ({ 
  children, 
  type = 'primary', 
  disabled = false, 
  onClick 
}: ButtonProps) => {
  return (
    <button 
      disabled={disabled}
      className={''}
      onClick={onClick}
    >
      {children}
    </button>
  )
}