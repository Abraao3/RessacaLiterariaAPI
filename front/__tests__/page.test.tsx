import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

vi.mock('next/font/google', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>

  return {
    ...actual,
    Limelight: () => ({
      className: 'mocked-limelight',
      variable: '--font-mocked',
      style: { fontFamily: 'mocked' },
    }),
  }
})

test('Page', () => {
  render(<Page />)
  expect(screen.getByRole('heading', { level: 1, name: 'Ressaca Literária' })).toBeDefined()
})