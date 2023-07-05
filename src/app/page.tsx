'use client';
import Stat from '@/components/ui/Stat';
import { Heading, Paragraph } from '@edge-ui/react';

export default function Home() {
  return (
    <main className="px-6">
      <Heading.H1 className="font-semibold">Buy, rent or sell property easily</Heading.H1>
      <Paragraph>A great platform to buy, sell or even rent your properties without any commissions.</Paragraph>
      <div className='flex items-center gap-6'>
        <Stat label="renters" value="50K+" />
        <Stat label="properties" value="10K+" />
      </div>
    </main>
  );
}
