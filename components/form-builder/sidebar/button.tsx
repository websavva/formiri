'use client'

import type { HTMLAttributes, useState } from 'react';
import {useDndMonitor} from '@dnd-kit/core';

import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDraggable } from '@dnd-kit/core';
import { FormBuilderBlockType, RawFormBuilderBlockType } from './blocks/types';

export interface FormBuilderSidebarButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  Icon: LucideIcon;
  label: string;
  type: FormBuilderBlockType | RawFormBuilderBlockType;
  isDragDisabled?: boolean;
}

export function FormBuilderSidebarButton({
  Icon,
  label,
  className,
  type,
  isDragDisabled,
  ...attrs
}: FormBuilderSidebarButtonProps) {
  const draggable = useDraggable({
    id: `form-builder-block_${type}`,
    disabled: isDragDisabled,

    data: {
      isFormBuilderBlocl: true,
    },
  });

  return (
    <button
      {...attrs}
      ref={draggable.setNodeRef}
      {...draggable.attributes}
      className={cn(
        'cursor-grab p-3 flex flex-col items-center rounded-lg border border-foreground/20 text-foreground w-36',
        className,
      )}
      {...draggable.listeners}
    >
      <Icon className="mb-3 size-8" />

      {label}
    </button>
  );
}

export function FormBuilderSidebarButtonDragOverlay(props: HTMLAttributes<HTMLButtonElement>) {
  // const [active]
  // return <FormBuilderSidebarButton />
}
