'use client';
import Stat from '@/components/ui/Stat';
import { Heading, Paragraph } from '@edge-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// images
import Search from '../../public/buySell.jpg';
import CardOneImage from '../../public/keepKey.jpg';
import CardTwoImage from '../../public/geo.jpg';
// components
import CustomCard from '../components/ui/Card';


export default function Home() {
  const location = useRouter();

  // const before_ = router.pathname;
  // const location = before_.split('/').pop();

  const [mode, setMode] = useState([
    {
      modeType: 'clickable',
      modeName: 'Buy',
      activeMode: 'buy'
    },
    {
      modeType: 'clickable',
      modeName: 'Sell',
      activeMode: 'sell',
      open: false
    },
    {
      modeType: 'clickable',
      modeName: 'Rent',
      activeMode: 'rent',
      open: false
    }
  ]);
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
        <div>
          {mode.map((modetype, index) => (
            <React.Fragment key={index}>
              {modetype.modeType === 'clickable' ? (
                <Link
                  href={`/${modetype.activeMode}`}
                  scroll={true}
                  className={
                    location === `${modetype.activeMode}`
                      ? 'flex justify-start my-2 bg-primary py-3 text-white rounded-lg items-center'
                      : 'flex my-2 py-3 rounded-lg items-center'
                  }
                >
                  <div className="">
                    <span className="">{modetype.modeName}</span>
                  </div>
                </Link>
              ) : (
                <div
                  className={!modetype.open ? 'flex flex-col my-2 py-3' : 'flex flex-col my-0 mt-2 py-0 pt-3'}
                  key={index}
                >
                  <button
                    onClick={() => {
                      let newState = [...mode];
                      newState[index].open = !newState[index].open;
                      setMode(newState);
                    }}
                    className={
                      !modetype.open === false
                        ? 'flex w-full justify-start  rounded-lg items-center relative dropdown-navbar dropOpen'
                        : 'flex w-full justify-start  rounded-lg items-center relative dropdown-navbar'
                    }
                  >
                    <div className="">
                      <span className="">{modetype.modeName}</span>
                    </div>
                  </button>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
}
