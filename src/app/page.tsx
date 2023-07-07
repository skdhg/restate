'use client';
import Stat from '@/components/ui/Stat';
import { Heading, Paragraph } from '@edge-ui/react';
import Image from 'next/image';
import Search from '../../public/buySell.jpg';
import CardOneImage from '../../public/keepKey.jpg';
import CardTwoImage from '../../public/geo.jpg';

import CustomCard from '../components/ui/Card';

export default function Home() {
  return (
    <main className="bg-scroll bg-my_bg_image h-[927px]">
      <div className="flex justify-between">
        <div className="p-32">
          <Heading.H1 className="font-semibold">Buy, rent or sell property easily</Heading.H1>
          <Paragraph>A great platform to buy, sell or even rent your properties without any commissions.</Paragraph>
          <div className="flex items-center gap-6 py-32">
            <Stat label="renters" value="50K+" />
            <Stat label="properties" value="10K+" />
          </div>
        </div>
        <Image src={Search} alt="search" width={700} height={700} />
        {/* <div className="">
          <div className="w-6/12">
            <CustomCard title="Test" description="test" content="test" footer="test" src={CardOneImage} />
          </div>
          <div className="w-6/12">
            <CustomCard title="Test" description="test" content="test" footer="test" src={CardTwoImage} />
          </div>
        </div> */}
      </div>
    </main>
  );
}
