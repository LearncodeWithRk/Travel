import { notFound } from 'next/navigation';
import Image from 'next/image';
import { destinations } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building, Dices, Users } from 'lucide-react';

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

function getDestinationBySlug(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  const destination = getDestinationBySlug(params.slug);

  if (!destination) {
    notFound();
  }

  const image = PlaceHolderImages.find(p => p.id === destination.slug);

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        {image && (
           <Image
            src={image.imageUrl}
            alt={destination.name}
            fill
            className="object-cover"
            priority
            data-ai-hint={image.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{destination.name}</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">About {destination.name}</h2>
            <p className="mt-4 text-lg text-muted-foreground text-center">{destination.longDescription}</p>

            <Tabs defaultValue="attractions" className="mt-12 w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="attractions"><Building className="mr-2 h-4 w-4" />Attractions</TabsTrigger>
                <TabsTrigger value="activities"><Dices className="mr-2 h-4 w-4" />Activities</TabsTrigger>
                <TabsTrigger value="culture"><Users className="mr-2 h-4 w-4" />Culture</TabsTrigger>
              </TabsList>
              <TabsContent value="attractions">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {destination.attractions.map((item) => (
                    <Card key={item.name}>
                      <CardHeader>
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="activities">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {destination.activities.map((item) => (
                    <Card key={item.name}>
                      <CardHeader>
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="culture">
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-xl">Local Culture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{destination.culture}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
