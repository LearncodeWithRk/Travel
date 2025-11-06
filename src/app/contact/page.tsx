import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="relative h-64">
        <Image
            src="https://picsum.photos/seed/contact-hero/1920/400"
            alt="Scenic view for contact page"
            fill
            className="object-cover"
            priority
            data-ai-hint="contact center"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-tight">Contact Us</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
             <p className="font-semibold uppercase tracking-wider text-primary">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">We'd Love to Hear From You</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question, a suggestion, or want to plan a custom trip? Reach out to us through any of the methods below, or fill out the contact form.
            </p>
          </div>
          
          <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card>
                  <CardHeader>
                      <CardTitle className="flex items-center gap-3"><Mail className="text-primary h-6 w-6"/> General Inquiries</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <a href="mailto:hello@tourigo.com" className="text-lg font-semibold hover:text-primary">
                          hello@tourigo.com
                      </a>
                  </CardContent>
              </Card>
              <Card>
                  <CardHeader>
                      <CardTitle className="flex items-center gap-3"><Phone className="text-primary h-6 w-6"/> Phone Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                       <p className="text-lg font-semibold">+1 (234) 567-890</p>
                  </CardContent>
              </Card>
              <Card>
                  <CardHeader>
                      <CardTitle className="flex items-center gap-3"><MapPin className="text-primary h-6 w-6"/> Our Office</CardTitle>
                  </CardHeader>
                  <CardContent>
                       <p className="text-lg font-semibold">123 Travel Lane, Adventure City, World</p>
                  </CardContent>
              </Card>
               <Card>
                  <CardHeader>
                      <CardTitle className="flex items-center gap-3"><MessageSquare className="text-primary h-6 w-6"/>Instant Chat</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <WhatsAppButton 
                          phoneNumber="+1234567890" 
                          message="Hello Tourigo! I have a question about planning a trip."
                          className="w-full"
                          buttonText="Chat on WhatsApp"
                      />
                  </CardContent>
              </Card>
            </div>
             <Card className="p-8">
                <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription>We'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                   <form className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="John Doe" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="john.doe@example.com" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" placeholder="e.g., Custom Package Inquiry" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Your message here..." rows={5} />
                        </div>
                        <Button type="submit" size="lg" className="w-full">Send Message</Button>
                   </form>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
