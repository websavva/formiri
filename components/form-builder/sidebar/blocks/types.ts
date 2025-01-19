import type { FC } from 'react';
import type { LucideIcon } from 'lucide-react';

export enum FormBuilderBlockType {
  TextField = 'textField',
  DateInput = 'dateInput'
}

export interface FormBuilderBlock<
  T extends FormBuilderBlockType | `${FormBuilderBlockType}`,
  P extends Record<string, any>,
> {
  type: T;

  getInitialProps: () => P;

  builderComponent: FC;

  formComponent: FC;

  editorComponent: FC;

  buttonProps: {
    Icon: LucideIcon;
    label: string;
  };
}
