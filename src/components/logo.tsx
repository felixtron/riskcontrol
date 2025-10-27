import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('relative', className)} {...props}>
      <Image
        src="https://storage.googleapis.com/source-buckets/user-project-3522a466-9d32-4464-8395-5f694b29b359/s44-logo.png"
        alt="Siento44 Construcciones Logo"
        width={160}
        height={100}
        className="object-contain"
        priority
      />
    </div>
  );
}
