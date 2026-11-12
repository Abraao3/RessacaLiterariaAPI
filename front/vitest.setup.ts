import { vi } from 'vitest';

const mockGoogleFont = () => ({
  className: 'mocked-font',
  variable: '--font-mocked',
  style: { fontFamily: 'mocked' },
});

vi.mock('next/font/google', () => ({
  Geist: mockGoogleFont,
  Geist_Mono: mockGoogleFont,
  Limelight: mockGoogleFont,
  Playfair_Display: mockGoogleFont,
}));