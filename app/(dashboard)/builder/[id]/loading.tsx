import { Loader2Icon } from 'lucide-react';

export default function BuilderPageLoader() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Loader2Icon className="size-20 animate-spin text-muted-foreground/80 stroke-1" />
    </div>
  );
}
