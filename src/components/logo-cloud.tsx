import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface Logo {
  src: string;
  alt: string;
  dataAiHint: string;
}

interface LogoCloudProps {
  title: string;
  logos: Logo[];
  doubleRow?: boolean;
  linkTo?: string;
}

const LogoScroller = ({ logos, reverse = false }: { logos: Logo[]; reverse?: boolean }) => (
  <div
    className={cn(
      "flex min-w-full shrink-0 items-center justify-around gap-12",
      reverse ? "animate-scroll-reverse" : "animate-scroll"
    )}
  >
    {logos.map((logo, index) => (
       <div key={index} className="relative flex-shrink-0 w-[150px] h-[60px]">
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            sizes="150px"
            style={{objectFit:"contain"}}
            className="transition-all duration-300 hover:scale-110"
            data-ai-hint={logo.dataAiHint}
          />
       </div>
    ))}
  </div>
);

export function LogoCloud({ title, logos, doubleRow = false, linkTo }: LogoCloudProps) {
  const firstRowLogos = doubleRow ? logos.slice(0, logos.length / 2) : logos;
  const secondRowLogos = doubleRow ? logos.slice(logos.length / 2) : [];

  return (
    <section className="py-12 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
          {title}
        </h2>
        <div
          className="group relative mt-10 flex flex-col gap-y-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
        >
          <div className="flex shrink-0">
            <LogoScroller logos={firstRowLogos} />
            <LogoScroller logos={firstRowLogos} />
          </div>
          {doubleRow && (
            <div className="flex shrink-0">
              <LogoScroller logos={secondRowLogos} reverse />
              <LogoScroller logos={secondRowLogos} reverse />
            </div>
          )}
        </div>
        {linkTo && (
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href={linkTo}>
                View All Partners
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
