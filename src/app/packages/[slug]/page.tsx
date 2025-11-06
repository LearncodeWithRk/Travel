import { notFound } from 'next/navigation';
import Image from 'next/image';
import { packages } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Calendar, DollarSign, CheckCircle, XCircle, List } from 'lucide-react';

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

function getPackageBySlug(slug: string) {
  return packages.find((pkg) => pkg.slug === slug);
}

export default function PackageDetailPage({ params }: { params: { slug: string } }) {
  const pkg = getPackageBySlug(params.slug);

  if (!pkg) {
    notFound();
  }

  const image = PlaceHolderImages.find(p => p.id === pkg.slug);

  return (
    <div>
      <section className="relative h-[50vh]">
        {image && (
          <Image
            src={image.imageUrl}
            alt={pkg.name}
            fill
            className="object-cover"
            priority
            data-ai-hint={image.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </section>

      <section className="container -mt-24 md:-mt-32 relative z-10 pb-16">
        <Card className="max-w-5xl mx-auto shadow-2xl">
          <CardHeader className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold">{pkg.name}</h1>
            <p className="text-muted-foreground text-lg">{pkg.destination}</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-around items-center gap-6 border-y py-6 my-6">
                <div className="flex items-center gap-3">
                    <Calendar className="h-8 w-8 text-primary"/>
                    <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-semibold text-lg">{pkg.duration}</p>
                    </div>
                </div>
                 <div className="flex items-center gap-3">
                    <DollarSign className="h-8 w-8 text-primary"/>
                    <div>
                        <p className="text-sm text-muted-foreground">Price</p>
                        <p className="font-semibold text-lg">${pkg.price} / person</p>
                    </div>
                </div>
                <WhatsAppButton 
                    phoneNumber="+1234567890" 
                    message={`Hello, I'm interested in booking the "${pkg.name}" package.`}
                    size="lg"
                />
            </div>
            
            <p className="text-center text-muted-foreground mt-6">{pkg.description}</p>

            <Tabs defaultValue="itinerary" className="mt-10 w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="itinerary"><List className="mr-2 h-4 w-4"/>Itinerary</TabsTrigger>
                <TabsTrigger value="inclusions"><CheckCircle className="mr-2 h-4 w-4"/>Inclusions</TabsTrigger>
                <TabsTrigger value="exclusions"><XCircle className="mr-2 h-4 w-4"/>Exclusions</TabsTrigger>
              </TabsList>
              <TabsContent value="itinerary" className="mt-6">
                 <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                    {pkg.itinerary.map((day) => (
                      <AccordionItem key={day.day} value={`item-${day.day}`}>
                        <AccordionTrigger className="text-lg font-semibold">Day {day.day}: {day.title}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {day.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
              </TabsContent>
              <TabsContent value="inclusions" className="mt-6">
                <ul className="space-y-3">
                    {pkg.inclusions.map((item) => (
                        <li key={item} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
              </TabsContent>
              <TabsContent value="exclusions" className="mt-6">
                <ul className="space-y-3">
                    {pkg.exclusions.map((item) => (
                        <li key={item} className="flex items-start">
                            <XCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
              </TabsContent>
            </Tabs>

          </CardContent>
        </Card>
      </section>
    </div>
  );
}
