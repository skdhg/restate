import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@edge-ui/react';
import Image from 'next/image';
export default function CardExample({
  title,
  description,
  content,
  footer,
  src
}: {
  title: string;
  description: string;
  content: string;
  footer: string;
  src: any;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={src} width={700} height={600} alt="image" />
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <p>{footer}</p>
      </CardFooter>
    </Card>
  );
}
