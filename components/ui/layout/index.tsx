import type { PropsWithChildren } from 'react';
import Link from 'next/link';

import { Logo } from '../logo';
import { ThemeSwitcher } from '../theme-switcher';
import { AuthButton } from './auth-button';

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background px-12">
      <nav className="flex items-center py-5 border-b border-foreground-50">
        <Link href="/">
          <Logo className="h-10 w-auto" />
        </Link>

        <ThemeSwitcher className="ml-auto" />

        <AuthButton className='ml-5'/>
      </nav>

      <main className='mt-5'>{children}</main>
    </div>
  );
}
