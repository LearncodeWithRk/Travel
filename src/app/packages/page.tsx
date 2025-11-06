import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Star, MapPin, Calendar, DollarSign, ArrowRight } from 'lucide-react';
import { packages } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PackagesPage() {
  return (
    <div className="bg-background">
       <section className="relative h-64">
        <Image
            src="https://picsum.photos/seed/packages-hero/1920/400"
            alt="Scenic view for packages page"
            fill
            className="object-cover"
            priority
            data-ai-hint="exotic travel"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-tight">Our Travel Packages</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-semibold uppercase tracking-wider text-primary">Handcrafted Journeys</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Curated Experiences Just For You</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our expertly crafted packages or let us build a custom one for you. Each journey is designed to be unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => {
              const image = PlaceHolderImages.find(p => p.id === pkg.slug);
              return (
              <Card key={pkg.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                {image && (
                  <div className="relative overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={pkg.name}
                      width={600}
                      height={400}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        ${pkg.price}
                    </div>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{pkg.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{pkg.destination}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                   <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{pkg.duration}</span>
                    </div>
                </CardContent>
                <CardFooter className="bg-secondary/20 p-4">
                  <Button asChild className="w-full" variant="ghost">
                    <Link href={`/packages/${pkg.slug}`}>View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
