'use client';

import { EdgeUIProvider } from '@edge-ui/react';
import Navbar from './Navbar';

export default function AppLayout(props: React.PropsWithChildren) {
  return (
    <EdgeUIProvider theme="light">
      <Navbar />
      {props.children}
    </EdgeUIProvider>
  );
}
