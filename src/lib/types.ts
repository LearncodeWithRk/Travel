export type Destination = {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  attractions: { name: string; description: string }[];
  activities: { name: string; description: string }[];
  culture: string;
};

export type Package = {
  id: string;
  slug: string;
  name: string;
  destination: string;
  description: string;
  price: number;
  duration: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: number; title: string, description: string }[];
};
