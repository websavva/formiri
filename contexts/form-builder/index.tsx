import { createContext, PropsWithChildren, useCallback, useState } from 'react';

import { FormBuilderElement } from '@/components/form-builder/sidebar/blocks';

export interface FormBuilderContextSchema {
  elements: FormBuilderElement[];

  addElement: (element: FormBuilderElement, index: number) => void;
}

export const FormBuilderContext =
  createContext<FormBuilderContextSchema | null>(null);

export function FormBuilderContextProvider({ children }: PropsWithChildren) {
  const [elements, setElements] = useState<FormBuilderElement[]>(() => []);

  const addElement = useCallback(
    (element: FormBuilderElement, index?: number) => {
      setElements((prevElements) => {
        index = index ?? elements.length - 1;

        const updatedElements = prevElements.slice();

        updatedElements.splice(index, 0, element);

        return updatedElements;
      });
    },
    [],
  );

  return (
    <FormBuilderContext
      value={{
        elements,
        addElement,
      }}
    >
      {children}
    </FormBuilderContext>
  );
}
