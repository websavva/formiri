import { LetterTextIcon } from 'lucide-react';

import { defineFormBuilderBlock } from '../utils';

import { TextFieldBuilderComponent } from './builder';
import type { TextFieldBuilderBlockProps } from './types';

export const textFieldFormBuilderBlockConfig = defineFormBuilderBlock({
  type: 'textField',

  buttonProps: {
    Icon: LetterTextIcon,
    label: 'Text Field',
  },

  getInitialProps: (): TextFieldBuilderBlockProps => ({
    required: false,
    hint: '',
    placeholder: 'Placeholder',
    label: 'Text Field',
  }),

  BuilderComponent: TextFieldBuilderComponent,

  FormComponent: () => '',

  PropertiesComponent: () => '',
});
