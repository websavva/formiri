'use client';

import { ErrorIllustration } from '@/components/ui/illustrations/error';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { } from 'lucide-react'

export default function ErrorLayout({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="h-full flex flex-col items-center mt-5">
      <ErrorIllustration className="h-[30rem] text-primary" />

      <div className="text-2xl mt-5 text-foreground/80 font-semibold">
        {error?.message || 'Unknown cause'}
      </div>

      <Button asChild className='mt-5 text-md py-6' size='lg' variant={'secondary'}>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}
