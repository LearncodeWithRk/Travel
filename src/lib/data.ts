import type { Destination, Package } from './types';

export const destinations: Destination[] = [
  {
    id: '1',
    slug: 'bali-indonesia',
    name: 'Bali, Indonesia',
    description: 'The Island of Gods, a paradise of beaches, temples, and vibrant culture.',
    longDescription: 'Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan. Renowned for its highly developed arts, including traditional and modern dance, sculpture, painting, leather, metalworking, and music.',
    attractions: [
      { name: 'Uluwatu Temple', description: 'A spectacular sea temple located on a cliff.' },
      { name: 'Tegallalang Rice Terraces', description: 'Iconic rice paddies offering stunning green landscapes.' },
      { name: 'Monkey Forest, Ubud', description: 'A natural sanctuary and temple complex inhabited by macaques.' }
    ],
    activities: [
      { name: 'Surfing in Kuta', description: 'Catch waves at one of the world\'s most famous surfing spots.' },
      { name: 'Yoga and Meditation', description: 'Find your inner peace in the spiritual heart of Ubud.' },
      { name: 'Scuba Diving in Amed', description: 'Explore vibrant coral reefs and the USAT Liberty shipwreck.' }
    ],
    culture: 'Balinese culture is a unique blend of Hinduism and local animist beliefs. It is visible in the daily offerings (canang sari), elaborate temple festivals, and the strong sense of community in every village (banjar).',
  },
  {
    id: '2',
    slug: 'kyoto-japan',
    name: 'Kyoto, Japan',
    description: 'The former imperial capital of Japan, famous for its temples, gardens, and geishas.',
    longDescription: 'Kyoto, once the capital of Japan, is a city on the island of Honshu. It\'s famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It’s also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.',
    attractions: [
        { name: 'Kinkaku-ji (Golden Pavilion)', description: 'A stunning Zen temple with its top two floors completely covered in gold leaf.' },
        { name: 'Fushimi Inari Shrine', description: 'Famous for its thousands of vibrant orange torii gates.' },
        { name: 'Arashiyama Bamboo Grove', description: 'A magical, otherworldly path through towering bamboo stalks.' }
    ],
    activities: [
        { name: 'Tea Ceremony', description: 'Experience the traditional Japanese tea ceremony in a historic setting.' },
        { name: 'Kimono Rental', description: 'Stroll through the historic streets of Gion dressed in a traditional kimono.' },
        { name: 'Visit Gion District', description: 'Explore the famous geisha district and perhaps spot a geiko or maiko.' }
    ],
    culture: 'Kyoto is the heart of traditional Japanese culture. From the elegant art of the tea ceremony to the precise beauty of ikebana (flower arranging), the city is a living museum of Japan\'s rich heritage.',
  },
  {
    id: '3',
    slug: 'santorini-greece',
    name: 'Santorini, Greece',
    description: 'Iconic blue-domed churches, stunning sunsets, and volcanic beaches.',
    longDescription: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
    attractions: [
        { name: 'Oia Village', description: 'Famous for its breathtaking sunsets and charming, narrow streets.' },
        { name: 'Red Beach', description: 'A unique beach with striking red volcanic cliffs and sand.' },
        { name: 'Akrotiri Archaeological Site', description: 'A well-preserved Minoan Bronze Age settlement.' }
    ],
    activities: [
        { name: 'Caldera Cruise', description: 'Sail around the volcanic caldera, swim in hot springs, and enjoy dinner on board.' },
        { name: 'Wine Tasting', description: 'Sample Santorini\'s unique wines, like Assyrtiko, at local wineries.' },
        { name: 'Hike from Fira to Oia', description: 'A scenic 10km hike along the caldera edge with stunning views.' }
    ],
    culture: 'Santorini\'s culture is a product of its maritime history and volcanic landscape. The local cuisine features unique produce grown in the volcanic soil, and its architecture is designed to be both beautiful and practical against the strong Aegean sun.',
  }
];

export const packages: Package[] = [
  {
    id: '1',
    slug: 'bali-adventure',
    name: 'Bali Adventure Week',
    destination: 'Bali, Indonesia',
    description: 'An action-packed week exploring the best of Bali\'s nature and culture.',
    price: 1250,
    duration: '7 Days / 6 Nights',
    inclusions: ['Airport transfers', '6 nights accommodation', 'Daily breakfast', 'Surfing lesson', 'Ubud tour', 'Temple visits'],
    exclusions: ['International flights', 'Lunch and dinner', 'Personal expenses', 'Travel insurance'],
    itinerary: [
      { day: 1, title: 'Arrival in Paradise', description: 'Arrive at Denpasar Airport and transfer to your hotel in Seminyak. Relax and explore the local beach.' },
      { day: 2, title: 'Surf\'s Up!', description: 'Morning surfing lesson at Kuta Beach. Afternoon free to relax or shop.' },
      { day: 3, title: 'Spiritual Ubud', description: 'Travel to Ubud. Visit the Monkey Forest and explore the Ubud Art Market.' },
      { day: 4, title: 'Rice Paddies & Temples', description: 'Visit the Tegallalang Rice Terraces and the holy water temple, Tirta Empul.' },
      { day: 5, title: 'Volcano Sunrise', description: 'Early morning trek to Mount Batur for a spectacular sunrise. Relax in the afternoon.' },
      { day: 6, title: 'Coastal Wonders', description: 'Visit the Uluwatu Temple perched on a cliff for sunset and a traditional Kecak dance performance.' },
      { day: 7, title: 'Departure', description: 'Enjoy a final Balinese breakfast before transferring to the airport for your flight home.' },
    ],
  },
  {
    id: '2',
    slug: 'kyoto-cultural-immersion',
    name: 'Kyoto Cultural Immersion',
    destination: 'Kyoto, Japan',
    description: 'Immerse yourself in the traditions of Japan\'s ancient capital.',
    price: 1800,
    duration: '5 Days / 4 Nights',
    inclusions: ['4 nights in a traditional Ryokan', 'Daily breakfast and 2 Kaiseki dinners', 'Guided city tour', 'Tea ceremony experience', 'Kimono rental'],
    exclusions: ['Flights to/from Kyoto', 'Lunches', 'Public transportation', 'Personal expenses'],
    itinerary: [
      { day: 1, title: 'Arrival in Kyoto', description: 'Arrive in Kyoto and check into your traditional Ryokan. Enjoy a welcome Kaiseki dinner.' },
      { day: 2, title: 'Temples and Shrines', description: 'Guided tour of Kinkaku-ji, Ryoan-ji, and the Fushimi Inari Shrine.' },
      { day: 3, title: 'The Way of Tea & Bamboo', description: 'Participate in a traditional tea ceremony. In the afternoon, visit the Arashiyama Bamboo Grove.' },
      { day: 4, title: 'Gion and Geishas', description: 'Explore the historic Gion district in a rented Kimono. Evening free to explore Pontocho Alley.' },
      { day: 5, title: 'Departure', description: 'Enjoy a final Japanese breakfast before departing.' },
    ],
  },
  {
    id: '3',
    slug: 'santorini-romance',
    name: 'Santorini Romantic Getaway',
    destination: 'Santorini, Greece',
    description: 'The perfect romantic escape with stunning views and unforgettable sunsets.',
    price: 2200,
    duration: '6 Days / 5 Nights',
    inclusions: ['5 nights in a caldera view hotel', 'Daily breakfast', 'Airport/port transfers', 'Sunset caldera cruise with dinner', 'Wine tasting tour'],
    exclusions: ['International flights', 'Lunches and some dinners', 'Optional tours', 'Personal expenses'],
    itinerary: [
      { day: 1, title: 'Welcome to Santorini', description: 'Arrive in Santorini and transfer to your hotel in Oia. Settle in and witness your first iconic sunset.' },
      { day: 2, title: 'Exploring Oia', description: 'Spend the day exploring the charming streets, blue-domed churches, and art galleries of Oia.' },
      { day: 3, title: 'Sailing the Caldera', description: 'Afternoon sunset cruise. Sail to the volcano, swim in hot springs, and enjoy a BBQ dinner on board.' },
      { day: 4, title: 'A Taste of Santorini', description: 'Visit three local wineries to taste the unique volcanic wines of the island.' },
      { day: 5, title: 'Beach Day & History', description: 'Visit the unique Red Beach and Black Beach. Optionally, explore the Akrotiri archaeological site.' },
      { day: 6, title: 'Farewell', description: 'Enjoy one last breakfast with a view before transferring to the airport or port for your departure.' },
    ],
  }
];
