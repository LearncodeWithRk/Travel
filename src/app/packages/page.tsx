import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MapPin, Calendar, DollarSign } from 'lucide-react';
import { packages } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PackagesPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Our Travel Packages</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Curated experiences designed to be unforgettable. Choose from our expertly crafted packages or let us build a custom one for you.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => {
              const image = PlaceHolderImages.find(p => p.id === pkg.slug);
              return (
              <Card key={pkg.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {image && (
                   <Image
                    src={image.imageUrl}
                    alt={pkg.name}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <CardHeader>
                  <CardTitle>{pkg.name}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{pkg.destination}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">4.5 (23 reviews)</span>
                  </div>
                  <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{pkg.duration}</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        <span>{pkg.price} / person</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/packages/${pkg.slug}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            )})}
          </div>
        </div>
      </section>
    </div>
  );
}
