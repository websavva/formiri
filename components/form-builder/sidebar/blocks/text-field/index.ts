import { LetterTextIcon } from 'lucide-react';

import { defineFormBuilderBlock } from '../utils';

import type { TextFieldBuilderBlockProps } from './types';

export const textFieldFormBuilderBlockConfig = defineFormBuilderBlock({
  type: 'textField',

  buttonProps: {
    Icon: LetterTextIcon,
    label: 'Text Field',
  },

  getInitialProps: (): TextFieldBuilderBlockProps => ({
    required: true,
    hint: '',
    placeholder: '',
  }),

  builderComponent: () => '',

  formComponent: () => '',

  propertiesComponent: () => '',
});
