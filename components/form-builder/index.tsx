'use client';

import type { HTMLAttributes } from 'react';
import { Form } from '@prisma/client';
import { DndContext } from '@dnd-kit/core';

import { cn } from '@/lib/utils';

import { FormBuilderToolbar } from './toolbar';
import { FormBuilderCanvas } from './canvas';
import { FormBuilderSidebar } from './sidebar';
import { FormBuilderContextProvider } from '@/contexts/form-builder';

export interface FormBuilderProps extends HTMLAttributes<HTMLDivElement> {
  form: Form;
}

export function FormBuilder({ form, className, ...attrs }: FormBuilderProps) {
  return (
    <FormBuilderContextProvider>
      <DndContext>
        <div
          {...attrs}
          className={cn(
            'grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] h-full pb-5',
            className,
          )}
        >
          <FormBuilderToolbar
            form={form}
            className="pb-4 border-b border-foreground-50 col-span-full"
          />

          <FormBuilderCanvas form={form} />

          <FormBuilderSidebar className="min-[400px] w-[400px]" />
        </div>
      </DndContext>
    </FormBuilderContextProvider>
  );
}
