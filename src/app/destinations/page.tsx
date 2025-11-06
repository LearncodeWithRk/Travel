import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MapPin } from 'lucide-react';
import { destinations } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function DestinationsPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Explore Our Destinations</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              From tropical paradises to ancient cities, your next great adventure starts here. Discover the world with RoamFree.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => {
              const image = PlaceHolderImages.find(p => p.id === destination.slug);
              return (
              <Card key={destination.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {image && (
                   <Image
                    src={image.imageUrl}
                    alt={destination.name}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    {destination.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{destination.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href={`/destinations/${destination.slug}`}>
                      Explore More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
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
