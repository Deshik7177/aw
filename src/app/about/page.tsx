import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | AWON Semiconductors Pvt. Ltd.",
  description: "Learn about AWON Semiconductors' history, mission, and the values that drive our innovation.",
};

const strengths = [
    "Strong Global Supply Chain Management",
    "Sourcing of Obsolete, Discontinued, MIL & Russian Parts",
    "Supplies without MOQ’s/MOV’s",
    "Short Lead Times",
    "Supplies across PAN India",
    "Deal with Popular Brands",
    "Multiple Verticals",
    "Covering Electronics, Electrical, RFMW & Mechanical Products",
    "Serving Aerospace, Defence, Medical, Communication, Automobile & Industrial",
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <header className="py-16 sm:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base font-semibold leading-7 text-primary font-headline">Our Story</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight font-headline sm:text-5xl">About AWON Semiconductors</h1>
            <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              AWON, was established in 2014 as an authorized re-seller for electronic semiconductors and equipment’s for industry-leading manufacturer brands. We specialize in the rapid introduction of the newest products and technologies targeting the design engineer and buyer communities.
            </p>
          </div>
        </div>
      </header>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight font-headline">High-Service Distributor</h2>
              <p className="mt-6 text-base leading-7 sm:text-lg text-muted-foreground">
                AWON, is a high-service distributor of technology products, services and solutions for electronic system design, maintenance and repair.
              </p>
            </div>
            <div className="w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/images/logos/about-us.png"
                alt="AWON Semiconductors office"
                width={800}
                height={600}
                className="rounded-xl shadow-lg aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight font-headline">Our Core Strengths</h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">The capabilities that set us apart.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength) => (
              <Card key={strength}>
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 text-primary flex-shrink-0 mt-1" />
                    <p className="font-semibold text-sm sm:text-base">{strength}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
