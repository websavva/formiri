import type { FormBuilderBlock, FormBuilderBlockType } from './types';

export const defineFormBuilderBlock = <
  T extends FormBuilderBlockType | `${FormBuilderBlockType}`,
  P extends Record<string, any>,
>(
  blockDefinition: FormBuilderBlock<T, P>,
) => blockDefinition;
