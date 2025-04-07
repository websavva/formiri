'use client';

import type { HTMLAttributes } from 'react';
import type { Form } from '@prisma/client';
import { useDndMonitor, useDroppable } from '@dnd-kit/core';

import { cn } from '@/lib/utils';
import { useFormBuilderContext } from '@/hooks/use-form-builder-context';

import {
  type FormBuilderBlockDragPayload,
  BUILDER_FORM_BLOCK_CONFIGS_MAP,
} from './sidebar/blocks';

export interface FormBuilderCanvasProps extends HTMLAttributes<HTMLDivElement> {
  form: Form;
}

export function FormBuilderCanvas({
  form,
  className,
  ...attrs
}: FormBuilderCanvasProps) {
  const { elements, addElement } = useFormBuilderContext();

  const droppable = useDroppable({
    id: 'form-builder-canvas',
  });

  useDndMonitor({
    onDragEnd({ active, over }) {
      if (!active || !over) return;

      const { data: draggedItemPayload } = active;

      if (draggedItemPayload?.current) {
        if (draggedItemPayload.current.isFormBuilderSidebarButton) {
          const { type } =
            draggedItemPayload.current as FormBuilderBlockDragPayload;

          const { getInitialProps } = BUILDER_FORM_BLOCK_CONFIGS_MAP[type];

          addElement({
            id: crypto.randomUUID(),
            type,
            props: getInitialProps(),
          });
        }
      }
    },
  });

  return (
    <div
      ref={droppable.setNodeRef}
      className="relative size-full flex justify-center items-center"
    >
      <div
        {...attrs}
        className={cn(
          'bg-secondary-foreground/50 absolute top-0 left-0 size-full',
          className,
        )}
        style={{
          mask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.53'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative z-[1] w-7/12 h-[95%] rounded-xl space-y-5 bg-background overflow-auto shadow-2xl dark:shadow-primary/50 p-5">
        {!droppable.isOver && !elements.length && (
          <div className="size-full grid grid-cols-[1fr] grid-rows-[1fr] items-center text-3xl font-bold text-muted-foreground text-center rounded-[inherit]">
            Drop here
          </div>
        )}

        {elements.map((element) => {
          const { BuilderComponent } =
            BUILDER_FORM_BLOCK_CONFIGS_MAP[element.type];

          return (
            <div key={element.id} className='py-2 rounded-md'>
              <BuilderComponent props={element.props} />
            </div>
          );
        })}

        {droppable.isOver && (
          <div className="w-full h-28 rounded-lg bg-foreground/10"></div>
        )}
      </div>
    </div>
  );
}
