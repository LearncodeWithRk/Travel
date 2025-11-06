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
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">Tourigo</span>
            </Link>
            <p className="mt-4 text-sm">
              Discover your next great adventure, become an explorer to get started.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Github">
                <Github className="h-6 w-6 hover:text-primary" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-primary">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider text-white">
              Newsletter
            </h3>
            <p className="mt-4 text-sm">
              Subscribe our newsletter to get our latest update & news.
            </p>
            <form className="mt-4 flex">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-r-none bg-gray-800 text-white"
              />
              <Button type="submit" className="rounded-l-none">
                Subscribe
              </Button>
            </form>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@tourigo.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Street, City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Tourigo. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
