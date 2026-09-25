import { beforeEach, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/dashboard/page'

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

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}))

vi.mock('@/app/servicos/api', () => ({
  default: {
    get: vi.fn().mockResolvedValue({
      data: {
        nome: 'Usuário Teste',
        email: 'teste@email.com',
      },
    }),
  },
}))

beforeEach(() => {
  localStorage.setItem('token', 'mock-token')
})

test('Page', async () => {
  render(<Page />)
  expect(await screen.findByText('Notificações')).toBeDefined()
})