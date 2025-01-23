import { useContext, type Context } from 'react';

export const useAssertedContext = <ContextValue>(
  Context: Context<ContextValue>,
  name: string = Context.name,
) => {
  const contextValue = useContext(Context);

  if (contextValue === undefined || contextValue === null)
    throw new Error(`Context "${name}" is not found !`);

  return contextValue;
};
