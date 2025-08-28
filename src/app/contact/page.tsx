import { ContactForm } from '@/components/contact-form';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact Us | AWON Semiconductors",
  description: "Get in touch with our sales or support team. We're here to help.",
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <header className="py-24 sm:py-32 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-6xl">Contact Us</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We're here to answer your questions and help you find the right solutions.
            </p>
          </div>
        </div>
      </header>

      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="lg:pr-8">
              <h2 className="text-3xl font-bold tracking-tight font-headline">Get in touch directly</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Find our contact details below or use the form to send us a message.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-headline">Email</h3>
                    <p className="text-muted-foreground">
                       <a href="mailto:awonsemiconductors@gmail.com" className="text-primary hover:underline">awonsemiconductors@gmail.com</a>
                    </p>
                    <p className="text-muted-foreground">
                       <a href="mailto:awonsales@gmail.com" className="text-primary hover:underline">awonsales@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-headline">Phone</h3>
                    <p className="text-muted-foreground">83285 25235 / 83285 95235</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-headline">Registered Office</h3>
                    <p className="text-muted-foreground">Flat No.103 Archstone Apartment Hasmathpet Bowenpally SECUNDERABAD TS-500 009</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-headline">Branch Office</h3>
                    <p className="text-muted-foreground">H.No.E-95 Near BHPV Township BHEL Gajuwaka VISAKHAPATNAM AP-530 012</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
