import type { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return <div className="flex flex-col items-center mt-5">{children}</div>;
}
