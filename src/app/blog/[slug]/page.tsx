import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { Calendar, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const authorInitial = post.author.charAt(0);

  return (
    <div className="bg-background">
      <section className="relative h-[40vh]">
        {post.image && (
          <Image
            src={post.image.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            data-ai-hint={post.image.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
      </section>

      <section className="relative -mt-24 z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-lg shadow-xl">
             <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>
             <div className="flex items-center gap-4 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://i.pravatar.cc/150?u=${post.author}`} alt={post.author} />
                        <AvatarFallback>{authorInitial}</AvatarFallback>
                    </Avatar>
                    <span>{post.author}</span>
                </div>
                <span className="text-sm">•</span>
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>{post.date}</time>
                </div>
             </div>

             <article className="prose dark:prose-invert max-w-none prose-lg">
                <p className="lead">{post.excerpt}</p>
                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
             </article>

            <div className="mt-12 pt-8 border-t">
                <h3 className="text-xl font-bold mb-4">Share This Post</h3>
                <div className="flex gap-2">
                    <Badge variant="outline">Travel Tips</Badge>
                    <Badge variant="outline">Adventure</Badge>
                </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/blog" className="text-primary hover:underline font-semibold">
                &larr; Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
