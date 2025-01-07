import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Formiri',
  description: 'Form builder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <html lang="en">
          <body className={`${roboto.className} antialiased`}>{children}</body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}
