import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/pesquisar/page'

vi.mock('next/font/google', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>

  return {
    ...actual,
    Playfair_Display: () => ({
      className: 'mocked-playfair',
      variable: '--font-mocked',
      style: { fontFamily: 'mocked' },
    }),
  }
})

test('Page', () => {
  render(<Page />)
  expect(screen.getByPlaceholderText("Insira o nome do livro")).toBeDefined()
})