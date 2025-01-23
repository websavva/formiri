'use client';

import { HTMLAttributes, ReactNode, useState } from 'react';
import {
  useDndMonitor,
  type DataRef,
  DragOverlay,
  useDraggable,
} from '@dnd-kit/core';
import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import {
  FormBuilderBlockType,
  RawFormBuilderBlockType,
  BUILDER_FORM_BLOCK_CONFIGS_MAP,
  FormBuilderBlockDragPayload,
} from './blocks';

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
    id: `form-builder-block`,
    disabled: isDragDisabled,

    data: {
      type,
      isFormBuilderSidebarButton: true,
    },
  });

  return (
    <button
      {...attrs}
      ref={draggable.setNodeRef}
      {...draggable.attributes}
      className={cn(
        'cursor-grab p-3 flex flex-col items-center rounded-lg border border-foreground/20 text-foreground w-36 bg-background',
        className,
      )}
      {...draggable.listeners}
    >
      <Icon className="mb-3 size-8" />

      {label}
    </button>
  );
}

export function FormBuilderSidebarButtonDragOverlay() {
  const [draggedItemPayload, setDraggedItemPayload] = useState<DataRef | null>(
    null,
  );

  useDndMonitor({
    onDragStart(e) {
      setDraggedItemPayload(e.active.data);
    },

    onDragEnd() {
      setDraggedItemPayload(null);
    },

    onDragCancel() {
      setDraggedItemPayload(null);
    },
  });

  let draggedItemNode: ReactNode | null = null;

  if (draggedItemPayload?.current) {
    if (draggedItemPayload.current.isFormBuilderSidebarButton) {
      const { type } =
        draggedItemPayload.current as FormBuilderBlockDragPayload;

      const { buttonProps } = BUILDER_FORM_BLOCK_CONFIGS_MAP[type];

      draggedItemNode = (
        <FormBuilderSidebarButton isDragDisabled type={type} {...buttonProps} />
      );
    }
  }

  return <DragOverlay dropAnimation={null}>{draggedItemNode}</DragOverlay>;
}
