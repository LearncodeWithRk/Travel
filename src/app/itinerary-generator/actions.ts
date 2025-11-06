'use server';

import { generatePersonalizedItinerary } from '@/ai/flows/generate-personalized-itinerary';
import { z } from 'zod';

const formSchema = z.object({
  destination: z.string().min(1, 'Destination is required'),
  dates: z.string().min(1, 'Dates are required'),
  budget: z.string().min(1, 'Budget is required'),
  interests: z.string().min(1, 'Interests are required'),
});

export type ItineraryFormState = {
  message: string;
  itinerary?: string;
  errors?: {
    destination?: string[];
    dates?: string[];
    budget?: string[];
    interests?: string[];
  };
};

export async function createItinerary(
  prevState: ItineraryFormState,
  formData: FormData
): Promise<ItineraryFormState> {
  const validatedFields = formSchema.safeParse({
    destination: formData.get('destination'),
    dates: formData.get('dates'),
    budget: formData.get('budget'),
    interests: formData.get('interests'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please fix the errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generatePersonalizedItinerary(validatedFields.data);
    if (result.itinerary) {
        return { message: 'Itinerary generated successfully!', itinerary: result.itinerary };
    } else {
        return { message: 'The AI could not generate an itinerary with the provided details. Please try being more specific.' };
    }
  } catch (error) {
    console.error(error);
    return { message: 'An unexpected error occurred. Failed to generate itinerary. Please try again later.' };
  }
}
