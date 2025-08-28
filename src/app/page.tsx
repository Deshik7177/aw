
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogoCloud } from "@/components/logo-cloud";
import { CLIENT_LOGOS, PARTNER_LOGOS } from "@/lib/constants";
import { ArrowRight, Package, Wrench, Settings, Cpu, Cable } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const verticals = [
    {
        title: "SCM: Supply Chain Management",
        description: "Efficiently managing the flow of goods and services.",
        icon: <Package />
    },
    {
        title: "D&E: Design & Engineering",
        description: "Innovative solutions and engineering expertise.",
        icon: <Wrench />
    },
    {
        title: "MRO: Maintenance, Repair & Operations",
        description: "Keeping your systems running smoothly.",
        icon: <Settings />
    },
    {
        title: "EMS: Electronic Manufacturing Services",
        description: "Complete manufacturing solutions for electronic components.",
        icon: <Cpu />
    },
    {
        title: "SERVICES: Cable Assemblies & Harness/ System Integration",
        description: "Custom solutions for full system integration.",
        icon: <Cable />
    },
]

export default function Home() {
  return (
    <>
      <section className="relative bg-background">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <div className="grid grid-cols-1 items-center gap-12">
            <div className="text-center">
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    <Image src="/images/logos/awon-logo.jpg" alt="AWON Logo" width={100} height={100} className="rounded-full" />
                </div>
                 <div className="relative w-20 h-14 sm:w-24 sm:h-16">
                    <Image src="/images/logos/10th.jpeg" alt="10th Anniversary" layout="fill" objectFit="contain" data-ai-hint="anniversary badge"/>
                </div>
              </div>
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                AWON Semiconductors Pvt. Ltd.
              </h1>
              <p className="mt-6 text-base leading-7 sm:text-lg sm:leading-8 text-muted-foreground max-w-4xl mx-auto">
                AWON, was established in 2014 as an authorized re-seller for electronic semiconductors and equipment’s for industry-leading manufacturer brands. We specialize in the rapid introduction of the newest products and technologies targeting the design engineer and buyer communities.
              </p>
               <p className="mt-4 text-base leading-7 sm:text-lg sm:leading-8 text-muted-foreground max-w-4xl mx-auto">
                AWON, is a high-service distributor of technology products, services and solutions for electronic system design, maintenance and repair.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/products">Explore Products</Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">Contact Sales <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoCloud title="Authorizations / Distributions & Channel Partners" logos={PARTNER_LOGOS} linkTo="/partners" />

      <section id="verticals" className="py-16 sm:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Verticals</h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              We provide a high-service distribution of technology products, services and solutions for electronic system design, maintenance and repair.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {verticals.map((vertical) => (
              <Card key={vertical.title} className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {vertical.icon}
                  </div>
                  <CardTitle className="font-headline mt-4 text-xl">{vertical.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{vertical.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <LogoCloud title="Our Key Accounts" logos={CLIENT_LOGOS} linkTo="/partners" />
    </>
  );
}
