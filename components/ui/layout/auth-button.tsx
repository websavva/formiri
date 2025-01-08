import type { HTMLAttributes } from 'react';
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

import { Button } from '../button';

export function AuthButton(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <SignInButton>
          <Button variant='default' size='lg' className='px-6 text-base'>
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}
