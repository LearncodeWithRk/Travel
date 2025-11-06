import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question, a suggestion, or want to plan a custom trip? We'd love to hear from you. Reach out to us through any of the methods below.
            </p>
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><MessageSquare className="text-primary"/> Chat with Us</CardTitle>
                    <CardDescription>For instant answers and booking assistance, message us on WhatsApp.</CardDescription>
                </CardHeader>
                <CardContent>
                    <WhatsAppButton 
                        phoneNumber="+1234567890" 
                        message="Hello RoamFree! I have a question."
                        className="w-full"
                        buttonText="Message on WhatsApp"
                    />
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Mail className="text-primary"/> Email Us</CardTitle>
                    <CardDescription>For detailed inquiries, you can send us an email.</CardDescription>
                </CardHeader>
                <CardContent>
                    <a href="mailto:hello@roamfree.com" className="text-primary font-semibold hover:underline">
                        hello@roamfree.com
                    </a>
                </CardContent>
            </Card>
          </div>

        </div>
      </section>
    </div>
  );
}
