import { Button, Heading } from '@edge-ui/react';
import { RiHome3Fill } from 'react-icons/ri';

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 border-b items-center">
      <div className="flex items-center gap-1">
        <RiHome3Fill className='text-primary h-6 w-6' />
        <Heading.H4>Restate</Heading.H4>
      </div>
      <ul className="flex items-center gap-4">
        <li>
          <Button variant="ghost">Rent</Button>
        </li>
        <li>
          <Button variant="ghost">Buy</Button>
        </li>
        <li>
          <Button variant="ghost">Sell</Button>
        </li>
        <li>
          <Button variant="ghost">Manage Property</Button>
        </li>
        <li>
          <Button variant="ghost">Resources</Button>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <Button variant="outline" className='border-2'>Login</Button>
        <Button variant="default">Sign Up</Button>
      </div>
    </div>
  );
}
