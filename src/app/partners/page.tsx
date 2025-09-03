import Image from 'next/image';
import { PARTNER_LOGOS, CLIENT_LOGOS, RESELLING_BRANDS } from '@/lib/constants';
import type { Metadata } from 'next';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Our Partners & Brands | AWON Semiconductors',
  description: 'We collaborate with a global network of technology leaders, key accounts, and trusted brands to drive innovation forward.',
};

const LogoGrid = ({ logos }: { logos: { src: string, alt: string, dataAiHint: string }[] }) => (
  <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-center">
    {logos.map((logo) => (
      <div key={logo.alt} className="flex items-center justify-center p-6 transition-shadow hover:shadow-lg h-full">
        <div className="relative w-full h-16">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 15vw"
              style={{objectFit: "contain"}}
              data-ai-hint={logo.dataAiHint}
            />
        </div>
      </div>
    ))}
  </div>
);

const registrations = [
    "DGR", "MSME", "NSIC", "Labour Dept.", "IEC", "GEM", "CEEP", "TDRL", 
    "BDL", "BEL", "ISRO", "RCI", "NPOL", "NSTL"
];

export default function PartnersPage() {
  return (
    <div className="bg-background">
      <header className="py-24 sm:py-32 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-6xl">Partners, Accounts & Brands</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Collaboration is at the heart of innovation. We are proud to work with these industry leaders, key accounts, and re-selling brands to shape the future of technology.
            </p>
          </div>
        </div>
      </header>
      
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 space-y-24">
            <div>
                <h2 className="text-3xl font-bold tracking-tight font-headline mb-12 text-center">Channel Partners</h2>
                <LogoGrid logos={PARTNER_LOGOS} />
            </div>
            <div>
                <h2 className="text-3xl font-bold tracking-tight font-headline mb-12 text-center">Key Accounts</h2>
                <LogoGrid logos={CLIENT_LOGOS} />
            </div>
            <div>
                <h2 className="text-3xl font-bold tracking-tight font-headline mb-12 text-center">Re-Selling Brands</h2>
                <LogoGrid logos={RESELLING_BRANDS} />
            </div>
             <div>
                <h2 className="text-3xl font-bold tracking-tight font-headline mb-12 text-center">Registrations & Licences</h2>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
                    {registrations.map(reg => (
                        <Card key={reg} className="flex items-center justify-center p-4">
                            <p className="font-semibold text-center">{reg}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
