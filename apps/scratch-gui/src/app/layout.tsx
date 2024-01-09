import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const globalFont = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'ScratchNext - Editor',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={globalFont.className}>{children}</body>
    </html>
  );
}
