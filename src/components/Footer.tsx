import Link from 'next/link';
import { Github, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
             <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary">Travel Bee</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-4">
            <div>
              <h3 className="font-semibold tracking-wider">Home</h3>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider">About Us</h3>
            </div>
             <div>
              <h3 className="font-semibold tracking-wider">Products</h3>
            </div>
             <div>
              <h3 className="font-semibold tracking-wider">FAQ</h3>
            </div>
             <div>
              <h3 className="font-semibold tracking-wider">Contact</h3>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lynch Consulting Ltd. All rights reserved.</p>
           <div className="flex space-x-4 mt-4 md:mt-0">
                 <Link href="/imprint" className="text-sm text-muted-foreground hover:text-primary">Imprint</Link>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy</Link>
           </div>
           <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" aria-label="Github">
              <Github className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
