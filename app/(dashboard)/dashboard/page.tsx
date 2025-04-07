import { CreateFormButton } from '@/components/create-form-button';
import { FormStatCardsGrid } from '@/components/form-stat-cards-grid';
import { Separator } from '@/components/ui/separator';
import { FormCardsList } from '@/components/form-card';

export default function DashboardPage() {
  return (
    <div className='py-5 max-w-[100rem] mx-auto'>
      <FormStatCardsGrid />

      <h1 className="text-2xl text-foreground font-bold mt-14 mb-5">
        Your Forms
      </h1>

      <Separator />

      <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-6 auto-rows-fr">
        <CreateFormButton />

        <FormCardsList />
      </div>
    </div>
  );
}
