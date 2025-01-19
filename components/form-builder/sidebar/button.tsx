import type { HTMLAttributes } from 'react';

import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FormBuilderSidebarButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  Icon: LucideIcon;
  label: string;
}

export function FormBuilderSidebarButton({
  Icon,
  label,
  className,
  ...attrs
}: FormBuilderSidebarButtonProps) {
  return (
    <button
      {...attrs}
      className={cn(
        'cursor-grab p-3 flex flex-col items-center rounded-lg border border-foreground/20 text-foreground w-36',
        className,
      )}
    >
      <Icon className="mb-3 size-8" />

      {label}
    </button>
  );
}
