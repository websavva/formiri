import type { HTMLAttributes } from 'react';
import Link from 'next/link';

import { Logo } from '../logo';
import { ThemeSwitcher } from '../theme-switcher';
import { AuthButton } from './auth-button';
import { cn } from '@/lib/utils';

export function Layout({
  children,
  className,
  ...attrs
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...attrs}
      className={cn(
        'flex flex-col min-h-screen w-full bg-background px-12',
        className,
      )}
    >
      <nav className="flex items-center py-5 border-b border-foreground-50">
        <Link href="/">
          <Logo className="h-10 w-auto" />
        </Link>

        <ThemeSwitcher className="ml-auto" />

        <AuthButton className="ml-5" />
      </nav>

      <main className="mt-5">{children}</main>
    </div>
  );
}
