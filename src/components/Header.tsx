'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/destinations', label: 'Destination' },
  { href: '/packages', label: 'Tours' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary',
        pathname === href ? 'text-primary' : ''
      )}
      onClick={() => setSheetOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex md:mr-6">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-2xl font-bold ml-8">Tourigo</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-4">
          <nav className="hidden items-center space-x-6 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation links for Tourigo website.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-4 p-4">
                <Link
                  href="/"
                  className="mb-4 flex items-center space-x-2"
                  onClick={() => setSheetOpen(false)}
                >
                  <span className="text-2xl font-bold">Tourigo</span>
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
