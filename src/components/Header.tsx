'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Briefcase, Home, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/destinations', label: 'Destinations', icon: Globe },
  { href: '/packages', label: 'Products', icon: Briefcase },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  const NavLink = ({ href, label, icon: Icon }: { href: string; label: string; icon?: React.ElementType }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary flex items-center gap-2",
        pathname === href ? "text-primary" : "text-muted-foreground"
      )}
      onClick={() => setSheetOpen(false)}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Travel Bee</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-4">
          <nav className="hidden items-center space-x-6 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
          <Button>Get Started</Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4 p-4">
                <Link href="/" className="mb-4 flex items-center space-x-2" onClick={() => setSheetOpen(false)}>
                  <span className="text-2xl font-bold text-primary">Travel Bee</span>
                </Link>
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
