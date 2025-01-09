import { HTMLAttributes, Suspense } from 'react';
import {
  UsersIcon,
  AwardIcon,
  TicketPlusIcon,
  TicketMinusIcon,
} from 'lucide-react';

import { loadFormStats } from '@/lib/server/api';

import { StatCard } from './stat-card';
import { cn } from '@/lib/utils';

export interface FormStatCardsListProps
  extends Partial<Awaited<ReturnType<typeof loadFormStats>>> {
  isLoading?: boolean;
}

export async function FormStatCardsList({
  totalSubmissionsCount,
  totalVisitsCount,
  submissionRate,
  bounceRate,
  isLoading,
}: FormStatCardsListProps) {
  const cardItems = [
    {
      id: 'visitsCount',
      title: 'Total visits',
      value: totalVisitsCount,
      description: 'All time form visits',
      Icon: UsersIcon,
    },
    {
      id: 'submissionsCount',
      title: 'Total submissions',
      value: totalSubmissionsCount,
      description: 'All time form submissions',
      Icon: AwardIcon,
    },
    {
      id: 'submissionRate',
      title: 'Submission rate',
      value: `${submissionRate}%`,
      description: 'Visits that result in form submission',
      Icon: TicketPlusIcon,
    },
    {
      id: 'bounceRate',
      title: 'Bounce rate',
      value: `${bounceRate}%`,
      description: 'Visits that give no form submission',
      Icon: TicketMinusIcon,
    },
  ];

  return (
    <>
      {cardItems.map(({ id, title, value, description, Icon }) => (
        <StatCard
          key={id}
          title={title}
          value={value}
          description={description}
          isLoading={isLoading}
          Icon={Icon}
          className="shadow-xl dark:shadow-md dark:shadow-primary/50"
        />
      ))}
    </>
  );
}

async function FormStatCardsListWrapper() {
  const formStats = await loadFormStats();

  return <FormStatCardsList {...formStats} />;
}

export type FormStatCardsGridProps = HTMLAttributes<HTMLDivElement>;

export function FormStatCardsGrid({
  className,
  ...attrs
}: FormStatCardsGridProps) {
  return (
    <div
      {...attrs}
      className={cn(
        'grid grid-cols-[repeat(2,1fr)] gap-x-12 gap-y-5',
        className,
      )}
    >
      <Suspense fallback={<FormStatCardsList isLoading />}>
        <FormStatCardsListWrapper />
      </Suspense>
    </div>
  );
}
