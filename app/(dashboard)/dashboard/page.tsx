import { CreateFormButton } from '@/components/create-form-button';
import { FormStatCardsGrid } from '@/components/form-stat-cards-grid';
import { Separator } from '@/components/ui/separator';

export default function DashboardPage() {
  return (
    <div>
      <FormStatCardsGrid />

      <h1 className="text-3xl text-foreground font-bold mt-14 mb-5">
        Your Forms
      </h1>

      <Separator />

      <div>
        <CreateFormButton />
      </div>
    </div>
  );
}
