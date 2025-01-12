import { Suspense, type HTMLAttributes } from 'react';
import Link from 'next/link';
import type { Form } from '@prisma/client';
import { EditIcon, ExternalLinkIcon, UsersIcon, AwardIcon } from 'lucide-react';

import { formatDistanceToNow } from 'date-fns';
import { getForms } from '@/lib/server/api/form';

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
  CardDescription,
} from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';

export interface FormCardProps extends HTMLAttributes<HTMLDivElement> {
  form: Form;
}

export function FormCard({ form, ...attrs }: FormCardProps) {
  const {
    id,
    name,
    description,
    isPublished,
    createdAt,
    visitsCount,
    submissionsCount,
  } = form;

  return (
    <Card {...attrs}>
      <CardHeader>
        <CardTitle className="flex items-start justify-between">
          <span className="text-lg line-clamp-1 text-ellipsis">{name}</span>

          {!isPublished && <Badge variant={'destructive'}>Draft</Badge>}
        </CardTitle>

        <CardDescription className="text-sm text-muted-foreground flex justify-between">
          <span>
            {formatDistanceToNow(createdAt, {
              addSuffix: true,
            })}
          </span>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <UsersIcon className="size-[1em]" />

              <span>{visitsCount.toLocaleString()}</span>
            </div>

            <div className="flex items-center space-x-1">
              <AwardIcon className="size-[1em]" />

              <span>{submissionsCount.toLocaleString()}</span>
            </div>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-2 text-sm">
          {description || 'No description'}
        </p>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full" variant={'secondary'}>
          <Link href={`/${isPublished ? 'forms' : 'builder'}/${id}`}>
            {!isPublished ? (
              <>
                Edit
                <EditIcon />
              </>
            ) : (
              <>
                View submissions
                <ExternalLinkIcon />
              </>
            )}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function FormCardSkeleton(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <Card {...props}>
      <CardHeader>
        <Skeleton className="h-5 w-1/4" />

        <Skeleton className="h-5 w-2/4" />
      </CardHeader>

      <CardContent className="space-y-2">
        <Skeleton className="h-5 w-full" />

        <Skeleton className="h-5 w-full" />
      </CardContent>
    </Card>
  );
}

export async function FormCardsListWrapper() {
  const forms = await getForms();

  return forms.map((form) => <FormCard key={form.id} form={form} />);
}

export async function FormCardsList() {
  return (
    <Suspense
      fallback={[...new Array(5).keys()].map((key) => (
        <FormCardSkeleton key={key} />
      ))}
    >
      <FormCardsListWrapper />
    </Suspense>
  );
}
