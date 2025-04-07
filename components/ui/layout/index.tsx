import type { HTMLAttributes } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Logo } from '../logo';
import { ThemeSwitcher } from '../theme-switcher';
import { AuthButton } from './auth-button';

export function Layout({
  children,
  className,
  ...attrs
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...attrs}
      className={cn(
        'grid grid-cols-[100%] grid-rows-[auto_1fr] min-h-screen w-full bg-background',
        className,
      )}
    >
      <nav className="flex items-center py-5 border-b border-foreground-50 px-5">
        <Link href="/">
          <Logo className="h-10 w-auto" />
        </Link>

        <ThemeSwitcher className="ml-auto" />

        <AuthButton className="ml-5" />
      </nav>

      <main className="mt-5 flex-grow">{children}</main>
    </div>
  );
}
