
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Footer() {
  return (
    <footer id="download-catalog" className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logos/awon-logo.jpg" alt="AWON Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="text-lg font-bold font-headline">AWON Semiconductors Pvt. Ltd.</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">Innovating the Future of Silicon.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div>
              <h3 className="font-headline font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
                <h3 className="font-headline font-semibold text-foreground">Catalog</h3>
                <p className="mt-4 text-sm text-muted-foreground">Get our latest product catalog delivered to you.</p>
                <Button variant="outline" className="mt-4 w-full" asChild>
                  <a href="#" download="awon-catalog.pdf">Download PDF</a>
                </Button>
            </div>
            <div>
                <h3 className="font-headline font-semibold text-foreground">Contact Us</h3>
                <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                        <Mail className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        <div className="text-sm text-muted-foreground">
                            <a href="mailto:awonsemiconductors@gmail.com" className="hover:text-primary">awonsemiconductors@gmail.com</a>
                            <br />
                            <a href="mailto:awonsales@gmail.com" className="hover:text-primary">awonsales@gmail.com</a>
                        </div>
                    </li>
                    <li className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">83285 25235 / 83285 95235</span>
                    </li>
                </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AWON Semiconductors Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
