import type {
  FormBuilderBlock,
  FormBuilderBlockType,
  RawFormBuilderBlockType,
} from './types';

export const defineFormBuilderBlock = <
  T extends FormBuilderBlockType | RawFormBuilderBlockType,
  P extends Record<string, any>,
>(
  blockDefinition: FormBuilderBlock<T, P>,
) => blockDefinition;
