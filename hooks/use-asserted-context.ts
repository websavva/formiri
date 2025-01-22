import { useContext, type Context } from 'react';

export const useAssertedContext = <C extends Context<any>>(
  Context: C,
  name: string = Context.name,
) => {
  const contextValue = useContext(Context);

  if (!contextValue) throw new Error(`Context "${name}" is not found !`);

  return contextValue;
};
