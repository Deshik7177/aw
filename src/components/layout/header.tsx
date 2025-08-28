"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
                <Image src="/images/logos/awon-logo.jpg" alt="AWON Logo" width={40} height={40} className="h-10 w-auto" />
            </Link>
        </div>

        <nav className="hidden md:flex">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "flex items-center text-sm font-medium transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
                >
                {link.label}
                </Link>
            ))}
          </div>
        </nav>

        <div className="flex items-center justify-end space-x-4">
           <Button asChild className="hidden md:inline-flex">
            <a href="#download-catalog">Download Catalog</a>
          </Button>
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center space-x-2" onClick={handleLinkClick}>
                <Image src="/images/logos/awon-logo.jpg" alt="AWON Logo" width={40} height={40} className="h-10 w-auto" />
              </Link>
              <div className="mt-6 flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={`${link.href}-mobile`}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "font-medium transition-colors hover:text-primary",
                       pathname === link.href ? "text-primary" : "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                 <Button asChild onClick={handleLinkClick}>
                    <a href="#download-catalog">Download Catalog</a>
                 </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
