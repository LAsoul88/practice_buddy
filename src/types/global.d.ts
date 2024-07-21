import type { ReactNode, FormEvent, ChangeEvent } from 'react'

export {}
declare global {
  type FormElements =
	| HTMLInputElement
	| HTMLSelectElement
	| HTMLTextAreaElement
  type OnSubmitEvent = FormEvent
  type OnChangeEvent = ChangeEvent<FormElements>

  interface FormProps {
    children?: ReactNode
    submit: (body: any) => void
  }

  interface JournalEntry {
    text: string
    _id?: string
  }

  interface UserInfo {
    email: string
    username?: string
    password: string
    passwordConfirm?: string
  }

}