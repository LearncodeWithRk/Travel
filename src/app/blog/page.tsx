import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  return (
    <div className="bg-background">
      <section className="relative h-64">
        <Image
          src="https://picsum.photos/seed/blog-hero/1920/400"
          alt="Desk with a journal and camera"
          fill
          className="object-cover"
          priority
          data-ai-hint="travel blog setup"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-tight">Travel Blog</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-semibold uppercase tracking-wider text-primary">Insights & Stories</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">From Our Travel Experts</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Get inspired for your next journey with our collection of travel guides, tips, and stories from around the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                {post.image && (
                  <div className="overflow-hidden">
                    <Image
                      src={post.image.imageUrl}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={post.image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                   <div className="flex items-center text-sm text-muted-foreground mt-4 space-x-4">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                        </div>
                         <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                   <Button asChild variant="outline" className="w-full group">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
