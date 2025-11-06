import type { Destination, Package, BlogPost } from './types';
import { PlaceHolderImages } from './placeholder-images';

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


export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'top-10-winter-destinations',
    title: 'Top 10 Winter Destinations for 2025',
    excerpt: 'Discover breathtaking snowy landscapes and cozy retreats. From the Swiss Alps to the slopes of Aspen, find your perfect winter getaway.',
    content: `
As the temperature drops, the world transforms into a winter wonderland, offering a plethora of magical destinations for every type of traveler. Whether you're seeking adrenaline-pumping ski slopes, serene snowy landscapes, or cozy cultural experiences, our list of the top 10 winter destinations for 2025 has something for you.

### 1. Swiss Alps, Switzerland
The Swiss Alps are the quintessential winter paradise. Imagine waking up in a charming wooden chalet to views of snow-capped peaks. Spend your days skiing or snowboarding on world-class slopes in resorts like Zermatt or St. Moritz, and your evenings indulging in delicious cheese fondue.

### 2. Aspen, Colorado, USA
Famous for its four ski mountains and upscale amenities, Aspen is a haven for winter sports enthusiasts. But it's not all about skiing; the town boasts a vibrant arts scene, luxury shopping, and fine dining, making it a well-rounded winter escape.

### 3. Reykjavik, Iceland
For a truly unique winter experience, head to Reykjavik. Witness the awe-inspiring Northern Lights, relax in the geothermal waters of the Blue Lagoon, and explore stunning ice caves. Iceland in winter is an adventure of a lifetime.

### 4. Kyoto, Japan
While famous for its cherry blossoms, Kyoto is equally enchanting in winter. The city's temples and gardens are often dusted with a layer of snow, creating a serene and picturesque atmosphere. Enjoy traditional hot springs (onsen) and savor seasonal Japanese cuisine.

### 5. Lapland, Finland
The official home of Santa Claus, Finnish Lapland is a magical destination, especially for families. Go on a reindeer or husky sleigh ride, stay in a glass igloo with views of the aurora borealis, and, of course, meet Santa himself.
    `,
    author: 'Alex Johnson',
    date: 'October 26, 2024',
    image: PlaceHolderImages.find(p => p.id === 'blog-post-1'),
  },
  {
    id: 2,
    slug: 'a-guide-to-santorini',
    title: 'A First-Timer\'s Guide to Santorini',
    excerpt: 'Planning a trip to the iconic Greek island? Here are the must-see spots, best foods to try, and tips for navigating Santorini like a pro.',
    content: `
Santorini is the stuff of postcards and dreams. With its whitewashed villages clinging to volcanic cliffs and the deep blue of the Aegean Sea, it's a destination that lives up to the hype. If you're planning your first trip, here's a guide to make it unforgettable.

### Must-See Spots
- **Oia:** This is the village you've seen in all the photos. It's famous for its spectacular sunsets, charming alleyways, and iconic blue-domed churches. Get there early to find a good spot for the sunset show.
- **Fira:** The island's capital, Fira, is a bustling hub of shops, restaurants, and nightlife. Walk the scenic path from Fira to Firostefani for breathtaking caldera views.
- **Red Beach:** Located near the ancient site of Akrotiri, this beach is famous for its unique, rust-colored volcanic cliffs.

### What to Eat
- **Fava:** A creamy split-pea dip, often served with capers and onions.
- **Tomato Keftedes:** Delicious tomato fritters, a Santorinian specialty.
- **Fresh Seafood:** Enjoy grilled octopus or fresh fish at a seaside taverna in Ammoudi Bay.
- **Assyrtiko Wine:** Don't leave without trying the island's crisp, dry white wine.

### Pro Tips
- **Rent an ATV:** It's the most fun and efficient way to explore the island's winding roads.
- **Book in Advance:** Especially for accommodation and sunset-view restaurants in Oia.
- **Hike from Fira to Oia:** This 3-hour hike offers some of the most stunning views you'll ever see.
    `,
    author: 'Maria Garcia',
    date: 'October 22, 2024',
    image: PlaceHolderImages.find(p => p.id === 'blog-post-2'),
  },
  {
    id: 3,
    slug: 'exploring-ancient-temples-thailand',
    title: 'Exploring the Ancient Temples of Thailand',
    excerpt: 'Journey through history as we explore the majestic temples of Ayutthaya and Sukhothai. A spiritual and cultural adventure awaits.',
    content: `
Thailand is a land of ancient history and profound spirituality, and nowhere is this more evident than in its magnificent temples. A journey to the historical parks of Ayutthaya and Sukhothai is a step back in time to the golden age of Siamese kingdoms.

### Ayutthaya Historical Park
Just a short trip from Bangkok, Ayutthaya was once the flourishing capital of the Siamese kingdom. Now a UNESCO World Heritage site, the park is home to the ruins of grand temples and palaces.
- **Wat Mahathat:** Famous for the iconic Buddha head entwined in the roots of a banyan tree.
- **Wat Phra Si Sanphet:** The largest temple in Ayutthaya, known for its three distinctive chedis.
- **Wat Chaiwatthanaram:** A stunning temple on the riverbank with a Khmer-style prang, especially beautiful at sunset.

### Sukhothai Historical Park
Further north lies Sukhothai, the first capital of Siam. Its name means "Dawn of Happiness," and the serene beauty of its ruins lives up to the name. Rent a bicycle to explore the vast park at your own pace.
- **Wat Mahathat:** The spiritual center of the kingdom, featuring a large central stupa surrounded by smaller ones.
- **Wat Si Chum:** Home to a gigantic, elegant seated Buddha image housed within a roofless mandapa.
- **Wat Sa Si:** A picturesque temple set on a small island, with a classic Sukhothai-style walking Buddha statue.

A visit to these ancient sites is not just a history lesson; it's a deeply spiritual and humbling experience, offering a glimpse into the rich cultural tapestry of Thailand.
    `,
    author: 'Sam Chen',
    date: 'October 18, 2024',
    image: PlaceHolderImages.find(p => p.id === 'blog-post-3'),
  },
  {
    id: 4,
    slug: 'journey-into-the-amazon-rainforest',
    title: 'Journey into the Amazon Rainforest',
    excerpt: 'Venture into the heart of the world\'s largest tropical rainforest. Discover unique wildlife, learn from indigenous communities, and embrace the wild.',
    content: `
The Amazon Rainforest is Earth's lung, a vast, mysterious, and incredibly biodiverse region. A journey here is an adventure in its purest form, offering encounters with wildlife and nature on a scale that's hard to comprehend.

### Choosing Your Gateway
Your Amazon adventure will likely start from one of three main countries:
- **Brazil:** Manaus is the primary gateway to the Brazilian Amazon, offering cruises on the Rio Negro and access to the Anavilhanas Archipelago.
- **Peru:** Iquitos is the launchpad for exploring the northern Peruvian Amazon, known for its luxurious river cruises and rich biodiversity in the Pacaya-Samiria National Reserve.
- **Ecuador:** The Yasuni National Park, accessible from Coca, is one of the most biodiverse places on the planet and offers incredible opportunities for wildlife spotting from jungle lodges.

### What to Expect
- **Wildlife Spotting:** Keep your eyes peeled for pink river dolphins, capybaras, sloths, and countless species of monkeys and birds. A night walk might reveal caimans, tarantulas, and glowing fungi.
- **Jungle Lodges:** Staying in an eco-lodge is the best way to immerse yourself in the rainforest. Accommodations range from rustic to luxurious, but all offer guided excursions like jungle treks, piranha fishing, and canopy tours.
- **Indigenous Communities:** Many tours include visits to local communities, offering a chance to learn about their way of life, ancient traditions, and deep connection to the forest.

A trip to the Amazon is a powerful reminder of the planet's natural wonders. It's a journey that will challenge you, inspire you, and stay with you forever.
    `,
    author: 'Daniel Costa',
    date: 'October 15, 2024',
    image: PlaceHolderImages.find(p => p.id === 'blog-post-4'),
  },
];
