'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating personalized travel itineraries.
 *
 * - generatePersonalizedItinerary - A function that takes user preferences and generates a travel itinerary.
 * - GeneratePersonalizedItineraryInput - The input type for the generatePersonalizedItinerary function.
 * - GeneratePersonalizedItineraryOutput - The return type for the generatePersonalizedItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedItineraryInputSchema = z.object({
  destination: z.string().describe('The desired travel destination.'),
  dates: z
    .string()
    .describe(
      'The travel dates, specified as a date range (e.g., 2024-01-01 to 2024-01-10).'
    ),
  budget: z.string().describe('The budget for the trip (e.g., $1000-$2000).'),
  interests: z
    .string()
    .describe(
      'A comma-separated list of interests (e.g., hiking, museums, food).'
    ),
});
export type GeneratePersonalizedItineraryInput = z.infer<
  typeof GeneratePersonalizedItineraryInputSchema
>;

const GeneratePersonalizedItineraryOutputSchema = z.object({
  itinerary: z.string().describe('The generated personalized travel itinerary.'),
});
export type GeneratePersonalizedItineraryOutput = z.infer<
  typeof GeneratePersonalizedItineraryOutputSchema
>;

export async function generatePersonalizedItinerary(
  input: GeneratePersonalizedItineraryInput
): Promise<GeneratePersonalizedItineraryOutput> {
  return generatePersonalizedItineraryFlow(input);
}

const generatePersonalizedItineraryPrompt = ai.definePrompt({
  name: 'generatePersonalizedItineraryPrompt',
  input: {schema: GeneratePersonalizedItineraryInputSchema},
  output: {schema: GeneratePersonalizedItineraryOutputSchema},
  prompt: `You are an expert travel agent specializing in creating personalized travel itineraries.

  Based on the user's preferences, generate a detailed and engaging travel itinerary.

  Destination: {{{destination}}}
  Dates: {{{dates}}}
  Budget: {{{budget}}}
  Interests: {{{interests}}}
  `,
});

const generatePersonalizedItineraryFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedItineraryFlow',
    inputSchema: GeneratePersonalizedItineraryInputSchema,
    outputSchema: GeneratePersonalizedItineraryOutputSchema,
  },
  async input => {
    const {output} = await generatePersonalizedItineraryPrompt(input);
    return output!;
  }
);
