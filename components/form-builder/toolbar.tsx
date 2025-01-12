import type { HTMLAttributes } from 'react';
import { Form } from '@prisma/client';
import { ScanQrCode, CopyCheckIcon, ArrowUpCircleIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

export interface FormBuilderToolbarProps
  extends HTMLAttributes<HTMLDivElement> {
  form: Form;
}

export function FormBuilderToolbar({
  form,
  className,
  ...attrs
}: FormBuilderToolbarProps) {
  return (
    <div
      {...attrs}
      className={cn('flex items-center justify-between', className)}
    >
      <h1 className="flex items-center space-x-1 text-lg">
        <span className="text-muted-foreground">Form:</span>

        <span className="text-foreground font-semibold">{form.name}</span>
      </h1>

      <div className="flex items-center space-x-2">
        <Button variant={'outline'}>
          <ScanQrCode />
          Preview
        </Button>

        {!form.isPublished && (
          <>
            <Button variant={'outline'}>
              <CopyCheckIcon />
              Save
            </Button>

            <Button>
              <ArrowUpCircleIcon />
              Publish
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
