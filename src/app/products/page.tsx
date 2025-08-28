import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Dot } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { PARTNER_LOGOS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products & Services | AWON Semiconductors",
  description: "Explore our comprehensive catalog of products, services, and capabilities.",
};

const productCategories = {
    "Cable & Wire Marker Printers / Ferrule Printer": [
        "HS Tube Marker", "PVC Ferrule Marker", "Labels & Sticker",
        "Express Label & Sleeve Printer", "Label Printer (PVC, Paper, Vinyl)",
        "Multicolour Label Printer", "PC Operated Label Printer"
    ],
    "World Class Clamping & Packing Solutions": [
        "Stainless Steel Cable Ties", "Stainless Steel Buckles",
        "Metal Embossing Machines", "Metal Engraving Machines"
    ],
    "Door & Gate Automation & Security Solutions": [
        "Auto Glass Sensor Door", "Gate Automation", "Parking Solutions", "Window Automation"
    ],
    "Electrification, Networking, Automation": [
        "Power Supplies", "Thermal Management", "Sensors", "Wire & Cable",
        "Enclosures", "Embedded Solutions", "Opto Electronics", "Switch Measure & Monitor"
    ],
    "Industrial Production Safety & Security Equipment": [
        "Adhesives", "Hardware", "Lubrication", "Plumbing", "Transmission",
        "Welding", "Lubrication", "Janitorial", "Electrical", "Hydraulics",
        "Machining", "Pneumatics", "Safety", "Batteries", "Abrasives", "HVAC",
        "Fastners", "Lighting", "Motors", "Power", "Test & Measure",
        "Refrigration", "Cleaning", "Fleet & Vehicle"
    ],
    "Customized ESD Work Station": [
        "ESD Work Station", "ESD Chairs", "Clean Room/Lab", "Antistatic Products",
        "ESD Safety Devices", "Antistatic Accessories & Consumables"
    ]
};


const repairsAndServices = {
    "description": "The company is actively involved in repairing, servicing and calibration of electronics, electrical, mechanical, RF & MW equipment’s.",
    "items": [
        "Oscilloscopes", "Function Generator", "Battery Chargers", "Communication Sets", "DC-DC Converter",
        "Display Systems", "RF & Microwave Systems", "Medical Lab Equipment", "Digital Millimeters",
        "Frequency Counters", "Network Analyzers", "LCR Meters", "Electronic Loads", "Telemetry Systems",
        "Analog Systems", "Educational Lab Equipment", "Power Supplies", "Data Loggers", "RX/TX Systems",
        "Automatic Test Systems", "SMPS", "Tracking Systems", "Electro-Mechanical Systems", "Development Kits"
    ],
    "images": [
        { src: "https://placehold.co/400x300.png", alt: "Oscilloscopes", dataAiHint: "oscilloscope" },
        { src: "https://placehold.co/400x300.png", alt: "Spectrum Analyzer", dataAiHint: "spectrum analyzer" },
        { src: "https://placehold.co/400x300.png", alt: "Signal Generator", dataAiHint: "signal generator" },
        { src: "https://placehold.co/400x300.png", alt: "Multimeter", dataAiHint: "multimeter" },
        { src: "https://placehold.co/400x300.png", alt: "Test Equipment", dataAiHint: "test equipment" },
    ]
};

const cableAssemblies = {
    "items": [
        "Copper Busbar Insulation Stripping Machine", "Wire Harness Machine", "Copper Wire Stripping Machine",
        "Automatic Wire Cutting & Stripping Machine", "Sleeve Cutting Machine", "Flat Flexible Cable Cutting & Stripping Machine"
    ],
    "images": [
        { src: "https://placehold.co/400x300.png", alt: "Wire Cutting Machine", dataAiHint: "wire cutting machine" },
        { src: "https://placehold.co/400x300.png", alt: "Wire Harnessing Machine", dataAiHint: "wire harnessing" },
        { src: "https://placehold.co/400x300.png", alt: "Wire Stripping Machine", dataAiHint: "wire stripping machine" },
    ]
};

const designAndEngineering = {
    "description": "Design, Integrate, and Supply of COTS Ruggedized Computers and Displays.",
    "specializations": [
        "Specialization in miniaturized electronics for satellites and space exploration",
        "Embedded platforms designed to meet military-grade specifications",
        "UAV Systems",
        "Flight Control Computers (FCC) and Navigation Systems for UAVs",
        "Source Communications and Encryption",
        "Quantum-resistant encryption for comms & defense applications",
        "Integration of Position Navigation and Timing systems with TS-Radar sensor suite",
        "High-Frequency solutions for Power Amplifiers and Low-Noise Amplifiers (LNA)"
    ],
    "products": [
        "Embedded P.Cs", "Wi-Fi Radios", "Rugged Servers", "Rugged Notebooks", "Rugged Workstations",
        "Rugged Switches", "Rugged Handhelds", "Rugged Displays", "Rugged Power Supplies", "Rugged P.Cs",
        "Routers and Modems", "Monitored Switches", "Industrial Computers", "Programmable Power Supplies"
    ],
    "otherCapabilities": [
        "Ruggedized VME & VPX Systems", "Rugged over Ethernet 10G/40G boards", "Keyboards & Trackballs",
        "19”, 2u & 1u Systems", "LCD Monitors 19”, rack mount LCD KVM", "Ethernet Switch", "Rugged Tablets", "Managed Ethernet"
    ],
     "images": [
        { src: "https://placehold.co/400x300.png", alt: "Rugged Tablet", dataAiHint: "rugged tablet" },
        { src: "https://placehold.co/400x300.png", alt: "Rugged Monitor", dataAiHint: "rugged monitor" },
        { src: "https://placehold.co/400x300.png", alt: "Rack-mount Display", dataAiHint: "server rack" },
        { src: "https://placehold.co/400x300.png", alt: "Rugged Server", dataAiHint: "rugged server" },
    ]
};

const ListGrid = ({ items }: { items: string[] }) => (
    <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
            <div key={item} className="flex items-start">
                <Check className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">{item}</span>
            </div>
        ))}
    </div>
);

const ImageGrid = ({ images }: { images: {src: string, alt: string, dataAiHint: string}[] }) => (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map(image => (
            <Image key={image.alt} src={image.src} alt={image.alt} width={400} height={300} className="rounded-lg shadow-md" data-ai-hint={image.dataAiHint} />
        ))}
    </div>
);

export default function ProductsPage() {
  return (
    <div className="bg-background">
      <header className="py-16 sm:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">Our Products & Services</h1>
            <p className="mt-6 text-base leading-7 sm:text-lg sm:leading-8 text-muted-foreground">
              Explore our comprehensive catalog of authorizations, repairs, services, custom assemblies, and engineering solutions.
            </p>
          </div>
        </div>
      </header>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl sm:text-2xl font-bold tracking-tight font-headline text-left">Authorizations / Distributions & Channel Partners</AccordionTrigger>
              <AccordionContent className="pt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-8 mb-12 items-center">
                  {PARTNER_LOGOS.map((logo) => (
                     <div key={logo.alt} className="relative h-16 w-full flex items-center justify-center">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        layout="fill"
                        objectFit="contain"
                        data-ai-hint={logo.dataAiHint}
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-8">
                  {Object.entries(productCategories).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight font-headline mb-4">{category}</h3>
                      <ListGrid items={items} />
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl sm:text-2xl font-bold tracking-tight font-headline text-left">Repairs & Services</AccordionTrigger>
              <AccordionContent className="pt-6">
                <p className="mb-6 text-muted-foreground text-sm sm:text-base">{repairsAndServices.description}</p>
                <ImageGrid images={repairsAndServices.images} />
                <h3 className="text-lg sm:text-xl font-bold tracking-tight font-headline mt-8 mb-4">Services include repairs for:</h3>
                <ListGrid items={repairsAndServices.items} />
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl sm:text-2xl font-bold tracking-tight font-headline text-left">Customized Cable Assemblies & Harnessing Equipment</AccordionTrigger>
                <AccordionContent className="pt-6">
                    <p className="mb-6 text-muted-foreground text-sm sm:text-base">Customized Cable Assembling & Harnessing Equipment (DV)</p>
                    <ImageGrid images={cableAssemblies.images} />
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight font-headline mt-8 mb-4">Equipment Types:</h3>
                    <ListGrid items={cableAssemblies.items} />
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl sm:text-2xl font-bold tracking-tight font-headline text-left">Designing & Engineering</AccordionTrigger>
              <AccordionContent className="pt-6">
                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight font-headline mb-4">Specializations</h3>
                        <div className="space-y-2">
                        {designAndEngineering.specializations.map(item => (
                             <div key={item} className="flex items-start">
                                <Dot className="h-5 w-5 mr-2 mt-1 text-primary flex-shrink-0" />
                                <span className="text-sm sm:text-base">{item}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight font-headline mb-4">COTS Ruggedized Computers and Displays</h3>
                         <p className="mb-6 text-muted-foreground text-sm sm:text-base">{designAndEngineering.description}</p>
                        <ImageGrid images={designAndEngineering.images} />
                        <h4 className="text-base sm:text-lg font-semibold font-headline mt-6 mb-3">Product Categories:</h4>
                        <ListGrid items={designAndEngineering.products} />
                        <h4 className="text-base sm:text-lg font-semibold font-headline mt-6 mb-3">Other Capabilities:</h4>
                        <ListGrid items={designAndEngineering.otherCapabilities} />
                    </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
