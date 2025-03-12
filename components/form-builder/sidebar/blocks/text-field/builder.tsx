import { Label } from '@/components/ui/label';
import type { TextFieldBuilderBlockProps } from './types';
import { Input } from '@/components/ui/input';

export function TextFieldBuilderComponent({
  props: { placeholder, required, hint, label },
}: {
  props: TextFieldBuilderBlockProps;
}) {
  return (
    <div className="flex flex-col gap-3">
      <Label>
        {label}

        {required && '*'}
      </Label>

      <Input placeholder={placeholder} type="text" readOnly disabled />

      {hint && <p className="text-[.75em] text-muted-foreground">{hint}</p>}
    </div>
  );
}
