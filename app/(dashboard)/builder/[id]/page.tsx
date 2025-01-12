import { getFormById } from '@/lib/server/api';

import { FormBuilder } from '@/components/form-builder';

export default async function BuilderPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id: formId } = await params;

  const form = await getFormById(+formId);

  return <FormBuilder form={form} />;
}
