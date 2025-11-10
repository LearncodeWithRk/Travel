'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { createItinerary, type ItineraryFormState } from './actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const initialState: ItineraryFormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" size="lg">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      Generate Itinerary
    </Button>
  );
}

function ItineraryResult({ state }: { state: ItineraryFormState }) {
    const { pending } = useFormStatus();

    return (
        <Card className="min-h-full">
            <CardHeader>
                <CardTitle>Your Personalized Itinerary</CardTitle>
                <CardDescription>Your travel plan will appear here once generated.</CardDescription>
            </CardHeader>
            <CardContent>
              {pending && (
                 <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-1/4 animate-pulse"></div>
                    <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                  </div>
                   <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-1/4 animate-pulse"></div>
                    <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                  </div>
                </div>
              )}
              {!pending && state.itinerary && (
                <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap font-sans">
                  {state.itinerary}
                </div>
              )}
              {!pending && !state.itinerary && (
                 <Alert>
                  <Wand2 className="h-4 w-4" />
                  <AlertTitle>Ready to Roam!</AlertTitle>
                  <AlertDescription>
                    Your adventure is just a click away. Fill out your preferences and let our AI create the magic.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
        </Card>
    );
}


export default function ItineraryForm() {
  const [state, formAction] = useFormState(createItinerary, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && !state.itinerary) {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="mt-12 grid md:grid-cols-2 gap-12 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Travel Preferences</CardTitle>
            <CardDescription>Fill in the details below to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Input id="destination" name="destination" placeholder="e.g., Paris, France" required />
                {state.errors?.destination && <p className="text-sm text-destructive">{state.errors.destination[0]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="dates">Travel Dates</Label>
                <Input id="dates" name="dates" placeholder="e.g., July 15 - July 22, 2024" required />
                {state.errors?.dates && <p className="text-sm text-destructive">{state.errors.dates[0]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Input id="budget" name="budget" placeholder="e.g., $2000 - $3000" required />
                {state.errors?.budget && <p className="text-sm text-destructive">{state.errors.budget[0]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests">Interests</Label>
                <Textarea id="interests" name="interests" placeholder="e.g., museums, hiking, fine dining, history" required />
                {state.errors?.interests && <p className="text-sm text-destructive">{state.errors.interests[0]}</p>}
              </div>
              
              <SubmitButton />
            </div>
          </CardContent>
        </Card>
        
        <div className="h-full">
            <ItineraryResult state={state} />
        </div>
    </form>
  );
}
