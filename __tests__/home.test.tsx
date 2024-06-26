import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Page', () => {
  it('renders a heading', () => {
    render(<Home />)

    const sections = screen.getAllByRole('region')
    for (const section of sections) expect(section).toBeInTheDocument()
  })
})