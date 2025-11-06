import { Bot } from 'lucide-react';
import ItineraryForm from './ItineraryForm';

export default function ItineraryGeneratorPage() {
  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <Bot className="h-16 w-16 mx-auto text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">AI-Powered Itinerary Generator</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Craft your dream vacation in minutes. Provide your travel preferences, and our intelligent travel assistant will generate a personalized day-by-day itinerary just for you.
          </p>
        </div>
        
        <ItineraryForm />

      </section>
    </div>
  );
}
