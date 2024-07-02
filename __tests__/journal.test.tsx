import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Journal from '@/app/journal/page'
// import { POST } from '@/util/fetch'

describe('Journal Page', () => {
  it('should render a heading', () => {
    render(<Journal />)

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading).toBeInTheDocument()
  })

  it('should create an empty textbox', () => {
    render(<Journal />)

    const textbox = screen.getByRole('textbox')

    expect(textbox).toBe('')
  })

  it('should update textbox with user input', async () => {
    render(<Journal />)

    const textbox = screen.getByRole('textbox')
    await userEvent.type(textbox, 'Today I practiced playing the head of Donna Lee at 140bpm')
    

    expect(textbox).toHaveValue('Today I practiced playing the head of Donna Lee at 140bpm')
  })
  it('should clear textbox on submit', async () => {
    render(<Journal />)

    const textbox = screen.getByRole('textbox')
    await userEvent.type(textbox, 'Today I practiced playing the head of Donna Lee at 140bpm')
    

    expect(textbox).toHaveValue('Today I practiced playing the head of Donna Lee at 140bpm')

    const button = screen.getByRole('button')
    await userEvent.click(button)

    expect(textbox).toHaveValue('')
  })
})