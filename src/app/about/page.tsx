import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Globe, Heart, Lightbulb, Bot, User, Briefcase, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
    const image = PlaceHolderImages.find(p => p.id === 'itinerary-promo');
  return (
    <div className="bg-background">
       <section className="relative h-64">
        <Image
            src="https://picsum.photos/seed/about-hero/1920/400"
            alt="Scenic view for about page"
            fill
            className="object-cover"
            priority
            data-ai-hint="scenic landscape"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-tight">About Tourigo</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
             {image && (
                <Image
                    src={image.imageUrl}
                    alt="Planning a trip"
                    width={600}
                    height={600}
                    className="rounded-lg shadow-xl"
                    data-ai-hint={image.imageHint}
                />
            )}
            <div className="space-y-6">
                <p className="font-semibold uppercase tracking-wider text-primary">Our Story</p>
                <h2 className="text-3xl md:text-4xl font-bold">Making Travel Simple, Personal, and Unforgettable</h2>
                <p className="text-muted-foreground text-lg">
                    We believe travel is more than just seeing new places. It's about experiencing new cultures, creating lifelong memories, and discovering yourself along the way. Tourigo was born from a passion for exploration and a desire to make trip planning as exciting as the journey itself.
                </p>
                <p className="text-muted-foreground">
                    We leverage cutting-edge AI to craft bespoke itineraries while our team of travel experts ensures every detail is perfect. Our mission is to be the most trusted companion for modern travelers, offering innovative tools and curated experiences that inspire a lifetime of adventure.
                </p>
            </div>
          </div>
        </div>
      </section>

       {/* Discover Limitless Possibilities Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
                <Image src="https://picsum.photos/seed/travelers/600/700" alt="Two travelers looking at a map" width={600} height={700} className="rounded-lg shadow-xl" data-ai-hint="travelers map" />
                <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                    <p className="text-5xl font-bold">26+</p>
                    <p>Years of Experience</p>
                </div>
            </div>
            <div>
                <p className="font-semibold uppercase tracking-wider text-primary">Why Choose Us</p>
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

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
                <p className="font-semibold uppercase tracking-wider text-primary">Our Commitment</p>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">What We Promise</h2>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
                <Card className="text-center p-8">
                    <Globe className="h-12 w-12 mx-auto text-primary"/>
                    <CardHeader>
                        <CardTitle>Global Reach, Local Touch</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">We offer destinations worldwide, with curated experiences that provide a deep connection to local culture.</p>
                    </CardContent>
                </Card>
                 <Card className="text-center p-8">
                    <Lightbulb className="h-12 w-12 mx-auto text-primary"/>
                    <CardHeader>
                        <CardTitle>Innovation in Travel</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Continuously improving our AI and services to make travel planning seamless and intelligent.</p>
                    </CardContent>
                </Card>
                 <Card className="text-center p-8">
                    <Heart className="h-12 w-12 mx-auto text-primary"/>
                    <CardHeader>
                        <CardTitle>Customer at Heart</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Your satisfaction is our priority. We are committed to providing exceptional service and support.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Ready to Start Your Adventure?</h2>
            <p className="mt-2 max-w-2xl mx-auto">Let Tourigo plan your next unforgettable journey. Get your personalized itinerary today!</p>
            <Button variant="secondary" size="lg" className="mt-6">
                Get Started
            </Button>
          </div>
      </section>
    </div>
  );
}
