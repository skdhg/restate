import { Heading, Label } from '@edge-ui/react';

export default function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-4 pl-5 py-1">
      <Heading.H3 className="font-semibold text-primary">{value}</Heading.H3>
      <Label className="text-muted-foreground text-sm">{label}</Label>
    </div>
  );
}
