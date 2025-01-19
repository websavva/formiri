import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import { BUILDER_FORM_BLOCK_CONFIGS } from './blocks';
import { FormBuilderSidebarButton } from './button';

export interface FormBuilderSidebarProps extends HTMLAttributes<HTMLElement> {}

export function FormBuilderSidebar({
  className,
  ...attrs
}: FormBuilderSidebarProps) {
  return (
    <aside {...attrs} className={cn('py-4', className)}>
      <div className="px-3 pb-3 mb-5 border-b border-foreground-50 text-muted-foreground font-semibold text-sm">
        Drag and drop elements
      </div>

      <div className="px-3">
        {BUILDER_FORM_BLOCK_CONFIGS.map(({ type, buttonProps }) => {
          return <FormBuilderSidebarButton key={type} {...buttonProps} />;
        })}
      </div>
    </aside>
  );
}
