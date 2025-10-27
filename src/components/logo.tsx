import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
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
