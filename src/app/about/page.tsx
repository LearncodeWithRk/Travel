import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Globe, Heart, Lightbulb } from 'lucide-react';

export default function AboutPage() {
    const image = PlaceHolderImages.find(p => p.id === 'itinerary-promo');
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">About RoamFree</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe travel is more than just seeing new places. It's about experiencing new cultures, creating lifelong memories, and discovering yourself along the way.
            </p>
          </div>

          <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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
                <div>
                    <h2 className="text-2xl font-semibold flex items-center"><Globe className="h-6 w-6 mr-3 text-primary"/> Our Mission</h2>
                    <p className="mt-2 text-muted-foreground">
                        To make travel accessible, personal, and unforgettable for everyone. We leverage technology to simplify planning and enhance the journey, allowing you to focus on what truly matters: the experience.
                    </p>
                </div>
                 <div>
                    <h2 className="text-2xl font-semibold flex items-center"><Lightbulb className="h-6 w-6 mr-3 text-primary"/> Our Vision</h2>
                    <p className="mt-2 text-muted-foreground">
                        To be the most trusted companion for modern travelers, offering innovative tools and curated experiences that inspire a lifetime of adventure. We envision a world where planning a trip is as exciting as the trip itself.
                    </p>
                </div>
                 <div>
                    <h2 className="text-2xl font-semibold flex items-center"><Heart className="h-6 w-6 mr-3 text-primary"/> Our Values</h2>
                    <p className="mt-2 text-muted-foreground">
                       We are driven by a passion for exploration, a commitment to our customers, and a belief in the power of technology to connect people with the world.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
