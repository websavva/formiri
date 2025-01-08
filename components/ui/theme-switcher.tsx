'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, LaptopIcon } from 'lucide-react';

import { useMounted } from '@/hooks/use-mounted';

import { TabsList, Tabs, TabsTrigger } from './tabs';

export type ThemeSwitcherProps = Parameters<typeof Tabs>[0];

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();

  const isMounted = useMounted();

  const tabOptions = [
    {
      id: 'light',
      Icon: SunIcon,
    },
    {
      id: 'system',
      Icon: LaptopIcon,
    },
    {
      id: 'dark',
      Icon: MoonIcon,
    },
  ];

  return (
    <Tabs
      value={isMounted ? theme : ''}
      onValueChange={(newTheme) => setTheme(newTheme)}
      {...props}
    >
      <TabsList>
        {tabOptions.map(({ id, Icon }) => (
          <TabsTrigger key={id} value={id}>
            <Icon className='size-6'/>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
