'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Star, Heart, Trophy, Briefcase, Bot, User, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import BookingForm from '@/components/BookingForm';

const categoryImages = [
  { id: 'category-pyramid', name: 'Pyramid', imageHint: 'pyramid giza' },
  { id: 'category-mountain', name: 'Mountain', imageHint: 'mountain range' },
  { id: 'category-mosque', name: 'The Mosque', imageHint: 'grand mosque' },
  { id: 'category-tower', name: 'Tower', imageHint: 'eiffel tower' },
];

const popularDestinations = [
  {
    slug: 'dest-great-barrier',
    name: 'Great Barrier',
    location: 'Australia',
    imageHint: 'great barrier reef'
  },
  { 
    slug: 'dest-swiss-alps', 
    name: 'Swiss Alps', 
    location: 'Switzerland',
    imageHint: 'swiss alps'
  },
  { 
    slug: 'dest-santorini', 
    name: 'Santorini', 
    location: 'Greece',
    imageHint: 'santorini greece'
  },
  { 
    slug: 'dest-venice', 
    name: 'Venice', 
    location: 'Italy',
    imageHint: 'venice italy'
  },
];

const testimonials = [
  {
    name: 'Rianna Day',
    role: 'Traveler',
    avatar: '/images/avatar-1.png',
    text: 'Tourigo made our dream vacation a reality! The personalized itinerary was flawless, and every detail was taken care of. We explored ancient ruins and relaxed on pristine beaches, all without a single worry. It was truly an unforgettable adventure.'
  },
  {
    name: 'John Smith',
    role: 'Explorer',
    avatar: '/images/avatar-2.png',
    text: 'I\'ve used many travel services, but Tourigo stands out. Their AI-powered tools are incredibly intuitive, helping me discover hidden gems I would have never found on my own. The booking process was seamless, and their support team was always ready to assist.'
  },
];


export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-plane');
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Airplane flying over a tropical sea"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative z-10 mx-auto flex h-full items-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Your Adventure Starts Here
              </h1>
              <p className="mt-4 text-lg">Discover your next great adventure, become an explorer to get started.</p>
              <Button asChild className="mt-8" size="lg">
                <Link href="/destinations">Discover More</Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <Card>
                <BookingForm />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Activity Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-wider text-primary">
              Our Activity
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Common Activity
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {categoryImages.map((category) => {
              const image = PlaceHolderImages.find((p) => p.id === category.id);
              return (
                image && (
                  <div key={category.id} className="relative h-96 overflow-hidden rounded-lg group">
                    <Image
                      src={image.imageUrl}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={category.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 p-4 text-white">
                      <h3 className="font-bold">{category.name}</h3>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </section>

      {/* Discover Limitless Possibilities Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
                <Image src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx0cmF2ZWx8ZW58MHx8fHwxNzYyNDIxNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Two travelers looking at a map" width={600} height={700} className="rounded-lg shadow-xl" data-ai-hint="travelers map" />
                <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                    <p className="text-5xl font-bold">26+</p>
                    <p>Years of Experience</p>
                </div>
            </div>
            <div>
                <p className="font-semibold uppercase tracking-wider text-primary">About Us</p>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">Discover Limitless Possibilities with Tourigo</h2>
                <div className="mt-6 space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full"><Bot size={24} /></div>
                        <div>
                            <h3 className="text-xl font-semibold">Perfect Itinerary</h3>
                            <p className="text-muted-foreground mt-1">Our AI crafts personalized journeys based on your interests and budget.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full"><Briefcase size={24} /></div>
                        <div>
                            <h3 className="text-xl font-semibold">Cost-Efficiency</h3>
                            <p className="text-muted-foreground mt-1">We find the best deals on flights, hotels, and activities to maximize your budget.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full"><User size={24} /></div>
                        <div>
                            <h3 className="text-xl font-semibold">Friendly Guidance</h3>
                            <p className="text-muted-foreground mt-1">Our travel experts are available 24/7 to assist you before and during your trip.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="font-semibold uppercase tracking-wider text-primary">
                Top Pick
              </p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                Popular Destinations
              </h2>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft />
              </Button>
              <Button size="icon">
                <ChevronRight />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {popularDestinations.map((dest) => {
              const image = PlaceHolderImages.find((p) => p.id === dest.slug);
              return (
                <Card
                  key={dest.slug}
                  className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl group"
                >
                  {image && (
                    <div className="overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={dest.name}
                        width={400}
                        height={300}
                        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={dest.imageHint}
                      />
                    </div>
                  )}
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">{dest.name}</h3>
                    <div className="mt-1 flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>{dest.location}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-wider text-primary">Our Journey</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Celebrating Our Journey</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="border-r">
                <Heart className="mx-auto h-12 w-12 text-primary" />
                <p className="mt-2 text-4xl font-bold">999+</p>
                <p className="text-muted-foreground">Happy Travelers</p>
            </div>
            <div className="border-r">
                <Trophy className="mx-auto h-12 w-12 text-primary" />
                <p className="mt-2 text-4xl font-bold">599+</p>
                <p className="text-muted-foreground">Tours Completed</p>
            </div>
            <div className="border-r">
                <Briefcase className="mx-auto h-12 w-12 text-primary" />
                <p className="mt-2 text-4xl font-bold">399+</p>
                <p className="text-muted-foreground">Travel Partners</p>
            </div>
            <div>
                <MapPin className="mx-auto h-12 w-12 text-primary" />
                <p className="mt-2 text-4xl font-bold">195M</p>
                <p className="text-muted-foreground">Miles Traveled</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-wider text-primary">Testimonials</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Voices of Our Travelers</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative p-8">
                    <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full">
                      <Star className="h-6 w-6" />
                    </div>
                    <CardContent className="p-0">
                        <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                        <div className="mt-6 flex items-center gap-4">
                            <Image src={`https://i.pravatar.cc/150?img=${index + 1}`} alt={testimonial.name} width={60} height={60} className="rounded-full" />
                            <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
