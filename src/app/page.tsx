'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import Link from 'next/link';

const categoryImages = [
  { id: 'category-pyramid', name: 'Pyramid' },
  { id: 'category-mountain', name: 'Mountain' },
  { id: 'category-mosque', name: 'The Mosque' },
  { id: 'category-desert', name: 'Desert' },
  { id: 'category-tower', name: 'Tower' },
  { id: 'category-beach', name: 'Beach' },
];

const popularDestinations = [
  {
    slug: 'dest-great-barrier',
    name: 'Great Barrier',
    location: 'Australia',
  },
  { slug: 'dest-swiss-alps', name: 'Swiss Alps', location: 'Switzerland' },
  { slug: 'dest-santorini', name: 'Santorini', location: 'Greece' },
  { slug: 'dest-venice', name: 'Venice', location: 'Italy' },
];

const blogPosts = [
  {
    slug: 'blog-post-1',
    title: 'Travel Inns: Navigating The World’s Wonders',
    date: '27 July, 2024',
  },
  {
    slug: 'blog-post-2',
    title: 'Exploring The World, One Adventure At A Time',
    date: '28 July, 2024',
  },
  {
    slug: 'blog-post-3',
    title: 'Fast Food In Your Area: A Traveler’s Guide',
    date: '29 July, 2024',
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
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Uncover Paradise Journey into{' '}
                <span className="text-accent">Spectacular</span>
              </h1>
              <Button className="mt-8">Discover More</Button>
            </div>
            <div className="hidden md:block">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      Find Your Next Destination
                    </h3>
                    <div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bali">Bali</SelectItem>
                          <SelectItem value="paris">Paris</SelectItem>
                          <SelectItem value="kyoto">Kyoto</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Input type="date" />
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Travel Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="adventure">Adventure</SelectItem>
                          <SelectItem value="relax">Relaxation</SelectItem>
                          <SelectItem value="cultural">Cultural</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full" type="submit">
                      Search
                    </Button>
                  </form>
                </CardContent>
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
            {categoryImages.slice(0, 4).map((category) => {
              const image = PlaceHolderImages.find((p) => p.id === category.id);
              return (
                image && (
                  <div key={category.id} className="relative overflow-hidden rounded-lg">
                    <Image
                      src={image.imageUrl}
                      alt={category.name}
                      width={300}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      data-ai-hint={image.imageHint}
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

      {/* Popular Destinations Section */}
      <section className="bg-secondary/20 py-16 md:py-24">
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
                  className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={dest.name}
                      width={400}
                      height={300}
                      className="h-48 w-full object-cover"
                      data-ai-hint={image.imageHint}
                    />
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

      {/* Blog Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-wider text-primary">
              Travel Updates
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Blog For Travel Updates
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {blogPosts.map((post) => {
              const image = PlaceHolderImages.find((p) => p.id === post.slug);
              return (
                <Card key={post.slug} className="overflow-hidden">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="h-48 w-full object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                    <h3 className="mt-2 text-lg font-semibold">
                      {post.title}
                    </h3>
                    <Button variant="link" className="mt-2 p-0">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
