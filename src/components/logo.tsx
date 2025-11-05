import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn('relative', className)} {...props}>
      <Image
        src="https://prosuite.mx/LogoS44.png"
        alt="Siento44 Construcciones Logo"
        width={160}
        height={100}
        className="object-contain"
        priority
      />
    </div>
  );
}
