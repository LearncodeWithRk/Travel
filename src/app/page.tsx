import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, ChevronRight, MapPin, Star, Users, Car, Hotel, ChevronLeft } from 'lucide-react';
import { destinations } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { WhatsAppButton } from '@/components/WhatsAppButton';


const heroImages = [
  PlaceHolderImages.find(p => p.id === 'hero-1'),
  PlaceHolderImages.find(p => p.id === 'hero-2'),
  PlaceHolderImages.find(p => p.id === 'hero-3'),
  PlaceHolderImages.find(p => p.id === 'hero-4'),
  PlaceHolderImages.find(p => p.id === 'hero-5'),
].filter(Boolean) as any[];

const categoryImages = [
  { id: 'category-pyramid', name: 'Pyramid' },
  { id: 'category-mountain', name: 'Mountain' },
  { id: 'category-mosque', name: 'The Mosque' },
  { id: 'category-desert', name: 'Desert' },
  { id: 'category-tower', name: 'Tower' },
  { id: 'category-beach', name: 'Beach' },
];

const popularDestinations = [
  { slug: 'dest-great-barrier', name: 'Great Barrier', places: 22, activities: 3, price: 895.50 },
  { slug: 'dest-swiss-alps', name: 'Swiss Alps', places: 12, activities: 2, price: 769.99 },
  { slug: 'dest-santorini', name: 'Santorini', places: 34, activities: 5, price: 39.80 },
  { slug: 'dest-venice', name: 'Venice', places: 15, activities: 4, price: 939.00 },
];

const bookingPromoImage = PlaceHolderImages.find(p => p.id === 'booking-promo');
const clientReviewImage = PlaceHolderImages.find(p => p.id === 'client-review');

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Visit The Most <span className="text-primary">Beautiful Places</span> In The World
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Plan And Book Your Perfect Trip With Expert Advice, Travel Tips, Destination Information, And Inspiration From Us.
              </p>
              <Card className="mt-8 p-4 shadow-lg">
                <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                        <Label htmlFor="location">Location</Label>
                        <Select>
                            <SelectTrigger id="location">
                                <SelectValue placeholder="Dhaka, Cox Bazar" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="dhaka">Dhaka</SelectItem>
                                <SelectItem value="cox-bazar">Cox Bazar</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div>
                        <Label htmlFor="date">Date</Label>
                        <Input type="date" id="date" defaultValue="2022-06-12"/>
                    </div>
                     <div>
                        <Label htmlFor="guest">Guest</Label>
                         <Select>
                            <SelectTrigger id="guest">
                                <SelectValue placeholder="6 Persons" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1 Person</SelectItem>
                                <SelectItem value="2">2 Persons</SelectItem>
                                <SelectItem value="3">3 Persons</SelectItem>
                                <SelectItem value="4">4 Persons</SelectItem>
                                <SelectItem value="5">5 Persons</SelectItem>
                                <SelectItem value="6">6 Persons</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button size="lg" className="w-full md:w-auto mt-4 md:mt-0">Search</Button>
                </div>
              </Card>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-2">
                <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                    {heroImages[0] && <Image src={heroImages[0].imageUrl} alt="Santorini" width={300} height={400} className="w-full h-full object-cover" data-ai-hint={heroImages[0].imageHint} />}
                </div>
                 <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
                    {heroImages[1] && <Image src={heroImages[1].imageUrl} alt="Beach" width={300} height={200} className="w-full h-full object-cover" data-ai-hint={heroImages[1].imageHint} />}
                 </div>
                  <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
                    {heroImages[2] && <Image src={heroImages[2].imageUrl} alt="Bali Temple" width={300} height={200} className="w-full h-full object-cover" data-ai-hint={heroImages[2].imageHint} />}
                </div>
                <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
                    {heroImages[3] && <Image src={heroImages[3].imageUrl} alt="Boat" width={200} height={200} className="w-full h-full object-cover" data-ai-hint={heroImages[3].imageHint} />}
                </div>
                 <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden">
                    {heroImages[4] && <Image src={heroImages[4].imageUrl} alt="Cliff" width={300} height={300} className="w-full h-full object-cover" data-ai-hint={heroImages[4].imageHint} />}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Categories</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">
                Here are lots of interesting destinations to visit, but don't be confused—they're already grouped by category.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {categoryImages.map(category => {
                    const image = PlaceHolderImages.find(p => p.id === category.id);
                    return image && (
                        <div key={category.id} className="text-center">
                            <Image src={image.imageUrl} alt={category.name} width={200} height={250} className="rounded-full aspect-[4/5] object-cover mx-auto" data-ai-hint={image.imageHint} />
                            <h3 className="mt-4 font-semibold">{category.name}</h3>
                        </div>
                    )
                })}
            </div>
         </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold">Popular Destinations</h2>
                    <p className="mt-2 text-muted-foreground">Some brilliant reasons Entrada should be your one-stop-shop!</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon"><ChevronLeft /></Button>
                    <Button size="icon"><ChevronRight /></Button>
                </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {popularDestinations.map(dest => {
                    const image = PlaceHolderImages.find(p => p.id === dest.slug);
                    return (
                        <Card key={dest.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                           {image && <Image src={image.imageUrl} alt={dest.name} width={400} height={300} className="w-full h-48 object-cover" data-ai-hint={image.imageHint} />}
                            <CardContent className="p-4">
                               <CardTitle className="text-xl mb-2">{dest.name}</CardTitle>
                               <div className="flex text-sm text-muted-foreground gap-4">
                                   <span>{dest.places} Places</span>
                                   <span>{dest.activities} Activities</span>
                               </div>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-xl font-bold text-primary">${dest.price.toFixed(2)}</p>
                                    <WhatsAppButton 
                                      phoneNumber="+1234567890"
                                      message={`I'm interested in booking a trip to ${dest.name}!`}
                                      buttonText="Book Now"
                                      size="sm"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
      </section>
      
      {/* Booking Promo Section */}
       <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <Card className="p-8 bg-blue-50 border-blue-200">
                <div className="space-y-8">
                    <div className="flex gap-4 items-start">
                        <div className="bg-primary/10 text-primary p-3 rounded-lg"><Car /></div>
                        <div>
                            <h3 className="text-xl font-semibold">Book Car</h3>
                            <p className="text-muted-foreground mt-1">Lorem ipsum is simply dummy text of the printing and typesetting industry dummy text of the printing.</p>
                            <Button variant="link" className="p-0 mt-2">Explore more <ArrowRight className="ml-2 h-4 w-4" /></Button>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                         <div className="bg-primary/10 text-primary p-3 rounded-lg"><Hotel /></div>
                        <div>
                            <h3 className="text-xl font-semibold">Book Hotel</h3>
                            <p className="text-muted-foreground mt-1">Lorem ipsum is simply dummy text of the printing and typesetting industry dummy text of the printing.</p>
                             <Button variant="link" className="p-0 mt-2">Explore more <ArrowRight className="ml-2 h-4 w-4" /></Button>
                        </div>
                    </div>
                </div>
            </Card>
            {bookingPromoImage && (
              <Image
                src={bookingPromoImage.imageUrl}
                alt="Booking promo"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint={bookingPromoImage.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      {/* Client Review Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Client Review</h2>
            <p className="mt-2 text-muted-foreground">Some brilliant reasons Entrada should be your one-stop-shop!</p>
            <div className="mt-8 grid md:grid-cols-2 gap-12 items-center">
                {clientReviewImage && (
                    <Image 
                        src={clientReviewImage.imageUrl}
                        alt="Client review"
                        width={400}
                        height={400}
                        className="rounded-lg"
                        data-ai-hint={clientReviewImage.imageHint}
                    />
                )}
                <div>
                     <div className="bg-white p-8 rounded-lg shadow-lg relative">
                        <div className="absolute -top-6 -left-6 bg-primary text-white rounded-full p-4">
                             <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.416 24V11.44L18.416 0H31.416L22.416 14.28V24H11.416ZM0 24V11.44L7 0H20L11 14.28V24H0Z" fill="white"/></svg>
                        </div>
                        <p className="text-muted-foreground italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                        <div className="mt-6">
                            <p className="font-bold">Jane Cooper</p>
                            <p className="text-sm text-muted-foreground">Patient</p>
                             <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}
