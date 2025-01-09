import type { HTMLAttributes } from 'react';
import type { LucideIcon } from 'lucide-react';

import { Card, CardTitle, CardContent, CardHeader } from './ui/card';
import { Skeleton } from './ui/skeleton';

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value?: string | number;
  description: string;
  Icon: LucideIcon;

  isLoading?: boolean;
}

export function StatCard({
  title,
  value = 0,
  Icon,
  description,

  isLoading = false,
  ...attrs
}: StatCardProps) {
  return (
    <Card {...attrs}>
      <CardHeader className='flex flex-row items-center justify-between pb-2 text-muted-foreground'>
        <CardTitle className='text-base font-medium'>{title}</CardTitle>

        <Icon className=''/>
      </CardHeader>

      <CardContent>
        <div className='text-2xl font-bold pb-5'>
          {isLoading ? (
            <Skeleton className='w-10'>
              <span className="opacity-0">0</span>
            </Skeleton>
          ) : <span className='animate-in duration-300 slide-in-from-bottom-2 fade-in inline-block'>
            {value}
          </span>
          }
        </div>

        <p className='text-sm text-foreground'>{description}</p>
      </CardContent>
    </Card>
  );
}
