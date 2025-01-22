import { FormBuilderContext } from '@/contexts/form-builder';

import { useAssertedContext } from './use-asserted-context';

export const useFormBuilderContext = () =>
  useAssertedContext(FormBuilderContext);
