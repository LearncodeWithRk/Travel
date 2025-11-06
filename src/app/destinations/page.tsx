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
      <section className="relative h-64">
        <Image
            src="https://picsum.photos/seed/dest-hero/1920/400"
            alt="Scenic view for destinations page"
            fill
            className="object-cover"
            priority
            data-ai-hint="global landmarks"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-tight">Our Destinations</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-semibold uppercase tracking-wider text-primary">Explore</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Find Your Next Adventure</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              From tropical paradises to ancient cities, your next great adventure starts here. Discover the world with Tourigo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => {
              const image = PlaceHolderImages.find(p => p.id === destination.slug);
              return (
              <Card key={destination.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                {image && (
                  <div className="overflow-hidden">
                     <Image
                      src={image.imageUrl}
                      alt={destination.name}
                      width={600}
                      height={400}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    {destination.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{destination.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full group">
                    <Link href={`/destinations/${destination.slug}`}>
                      Explore More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
