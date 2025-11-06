import Link from 'next/link';
import {
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">Tourigo</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Discover your next great adventure, become an explorer to get started.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Github">
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-400 hover:text-primary">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-400 hover:text-primary">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
             <h3 className="font-semibold tracking-wider">Support</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary">
                  Help Center
                </Link>
              </li>
               <li>
                <Link href="/terms" className="text-gray-400 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold tracking-wider">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-400">
              Subscribe to our newsletter to get our latest updates & news.
            </p>
            <form className="mt-4 flex">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-r-none bg-gray-800 border-gray-700 text-white"
              />
              <Button type="submit" className="rounded-l-none">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tourigo. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-primary">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
