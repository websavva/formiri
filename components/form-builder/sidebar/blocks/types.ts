import type { FC } from 'react';
import type { LucideIcon } from 'lucide-react';

export enum FormBuilderBlockType {
  TextField = 'textField',
}

export type RawFormBuilderBlockType = `${FormBuilderBlockType}`;

export interface FormBuilderBlock<
  T extends FormBuilderBlockType | RawFormBuilderBlockType,
  P extends Record<string, any>,
> {
  type: T;

  getInitialProps: () => P;

  BuilderComponent: FC<{ props: P }>;

  FormComponent: FC;

  PropertiesComponent: FC<{ props: P; onPropsUpdate: (props: P) => any }>;

  buttonProps: {
    Icon: LucideIcon;
    label: string;
  };
}

export interface FormBuilderBlockDragPayload {
  type: FormBuilderBlockType;
  isFormBuilderSidebarButton: true;
}
