'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FilePlusIcon } from 'lucide-react';

import { CreateFormDtoSchema, CreateFormDto } from '@/dtos';
import { createForm } from '@/lib/server/api/form';
import { useToast } from '@/hooks/use-toast';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Loader2Icon } from 'lucide-react';
import { Card } from './ui/card';

export function CreateFormButton() {
  const { toast } = useToast();

  const [isOpened, setIsOpened] = useState(false);

  const form = useForm<CreateFormDto>({
    resolver: zodResolver(CreateFormDtoSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  function onSubmit(createFormDto: CreateFormDto) {
    return createForm(createFormDto)
      .then(() => {
        toast({
          title: 'Success',
          description: 'New form was created',
        });

        setIsOpened(false);
      })
      .catch((err) => {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: err?.message || 'Unknown error',
        });
      });
  }

  return (
    <Dialog open={isOpened} onOpenChange={setIsOpened}>
      <DialogTrigger>
        <Card className="flex flex-col justify-center font-bold items-center p-12 text-muted-foreground/80 border-dashed border-2 transition cursor-pointer hover:bg-accent">
          <FilePlusIcon className="size-10" />

          <span className="mt-5">Create new form</span>
        </Card>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">Create Form</DialogTitle>

          <DialogDescription>
            Create a new form to start collecting responses
          </DialogDescription>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full text-base"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <Loader2Icon className="animate-spin" />
                ) : (
                  'Save'
                )}
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
