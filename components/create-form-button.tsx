'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { CreateFormDtoSchema, CreateFormDto } from '@/dtos';
import { createForm } from '@/lib/server/api/form';

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

export function CreateFormButton() {
  const form = useForm<CreateFormDto>({
    resolver: zodResolver(CreateFormDtoSchema),
    defaultValues: {
      name: '',
    },
  });

  function onSubmit(createFormDto: CreateFormDto) {
    return createForm(createFormDto).then(console.log);
  }

  return (
    <Dialog>
      <DialogTrigger>Create new form</DialogTrigger>

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

              <Button type="submit" size="lg" className="w-full text-base">
                Save
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
