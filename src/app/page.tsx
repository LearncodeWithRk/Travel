import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, Star, MapPin } from 'lucide-react';
import { destinations, packages } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

export default function Home() {
  const topDestinations = destinations.slice(0, 3);
  const featuredPackages = packages.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        {heroImage && (
           <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-shadow-lg">Your Next Adventure Awaits</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-shadow">
            Discover breathtaking destinations and create unforgettable memories with RoamFree.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/packages">Explore Packages</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Top Destinations</h2>
          <p className="mt-2 text-center text-muted-foreground max-w-2xl mx-auto">
            Explore our hand-picked selection of the most stunning places to visit around the world.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topDestinations.map((destination) => {
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
                    <CardTitle className="text-2xl">{destination.name}</CardTitle>
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
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <Bot className="h-16 w-16 mx-auto md:mx-0 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mt-4">Personalized Itinerary Generator</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Let our AI-powered travel assistant craft the perfect trip for you. Just tell us your preferences, and we'll handle the rest.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/itinerary-generator">Create Your Itinerary</Link>
              </Button>
            </div>
            <div>
              {
                (() => {
                  const image = PlaceHolderImages.find(p => p.id === 'itinerary-promo');
                  return image && (
                    <Image
                      src={image.imageUrl}
                      alt="AI Itinerary Generator"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-xl"
                      data-ai-hint={image.imageHint}
                    />
                  );
                })()
              }
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Featured Packages</h2>
          <p className="mt-2 text-center text-muted-foreground max-w-2xl mx-auto">
            Get the best value and experience with our curated travel packages.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => {
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
                  <p className="text-muted-foreground">{pkg.description}</p>
                   <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">4.5 (23 reviews)</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">From</p>
                    <p className="text-2xl font-bold">${pkg.price}</p>
                  </div>
                  <Button asChild>
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
