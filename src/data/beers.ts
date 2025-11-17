export type Beer = {
  id: string;
  name: string;
  brewery?: string;
  country?: string;
  style?: string;
  abv?: number;
  imageUrl?: string;
};

export const seededBeers: Beer[] = [
  {
    id: 'golden-ale',
    name: 'Sunny Day Golden Ale',
    brewery: 'Sunrise Brewing Co.',
    country: 'USA',
    style: 'Golden Ale',
    abv: 5.1,
    imageUrl: 'https://images.unsplash.com/photo-1458071104706-5fef6a7c3664?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'citrus-ipa',
    name: 'Citrus Haze IPA',
    brewery: 'Cloudburst',
    country: 'USA',
    style: 'IPA',
    abv: 6.7,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'midnight-stout',
    name: 'Midnight Velvet Stout',
    brewery: 'Blackstone',
    country: 'Ireland',
    style: 'Stout',
    abv: 5.8,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'alpine-lager',
    name: 'Alpine Crisp Lager',
    brewery: 'Matterhorn Brewing',
    country: 'Switzerland',
    style: 'Lager',
    abv: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'citrus-sour',
    name: 'Citrus Splash Sour',
    brewery: 'Tart & Co.',
    country: 'Belgium',
    style: 'Sour',
    abv: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1542332213-31f4b262f0af?auto=format&fit=crop&w=800&q=80'
  },
  // Popular real-world beers
  {
    id: 'karhu-5-3',
    name: 'Karhu 5.3',
    brewery: 'Sinebrychoff',
    country: 'Finland',
    style: 'Lager',
    abv: 5.3,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'karhu-iii',
    name: 'Karhu III',
    brewery: 'Sinebrychoff',
    country: 'Finland',
    style: 'Pilsner',
    abv: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'guinness',
    name: 'Guinness',
    brewery: 'Guinness',
    country: 'Ireland',
    style: 'Stout',
    abv: 4.2,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'heineken',
    name: 'Heineken',
    brewery: 'Heineken',
    country: 'Netherlands',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'stella-artois',
    name: 'Stella Artois',
    brewery: 'Stella Artois',
    country: 'Belgium',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'corona',
    name: 'Corona Extra',
    brewery: 'Grupo Modelo',
    country: 'Mexico',
    style: 'Lager',
    abv: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'budweiser',
    name: 'Budweiser',
    brewery: 'Anheuser-Busch',
    country: 'USA',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'carlsberg',
    name: 'Carlsberg',
    brewery: 'Carlsberg',
    country: 'Denmark',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tsingtao',
    name: 'Tsingtao',
    brewery: 'Tsingtao Brewery',
    country: 'China',
    style: 'Lager',
    abv: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'asahi',
    name: 'Asahi Super Dry',
    brewery: 'Asahi Breweries',
    country: 'Japan',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  // More popular beers from around the world
  {
    id: 'tuborg',
    name: 'Tuborg',
    brewery: 'Tuborg Brewery',
    country: 'Denmark',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tuborg-green',
    name: 'Tuborg Green',
    brewery: 'Tuborg Brewery',
    country: 'Denmark',
    style: 'Lager',
    abv: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tuborg-classic',
    name: 'Tuborg Classic',
    brewery: 'Tuborg Brewery',
    country: 'Denmark',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sapporo',
    name: 'Sapporo Premium',
    brewery: 'Sapporo Breweries',
    country: 'Japan',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kirin',
    name: 'Kirin Ichiban',
    brewery: 'Kirin Brewery',
    country: 'Japan',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'becks',
    name: 'Becks',
    brewery: 'Brauerei Beck',
    country: 'Germany',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'paulaner',
    name: 'Paulaner',
    brewery: 'Paulaner Brauerei',
    country: 'Germany',
    style: 'Wheat Beer',
    abv: 5.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'erdinger',
    name: 'Erdinger',
    brewery: 'Erdinger Weissbräu',
    country: 'Germany',
    style: 'Wheat Beer',
    abv: 5.3,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hoegaarden',
    name: 'Hoegaarden',
    brewery: 'Hoegaarden Brewery',
    country: 'Belgium',
    style: 'Wheat Beer',
    abv: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'leffe',
    name: 'Leffe Blonde',
    brewery: 'Leffe',
    country: 'Belgium',
    style: 'Belgian Ale',
    abv: 6.6,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'duvel',
    name: 'Duvel',
    brewery: 'Duvel Moortgat',
    country: 'Belgium',
    style: 'Belgian Strong Ale',
    abv: 8.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chimay',
    name: 'Chimay',
    brewery: 'Abbaye de Scourmont',
    country: 'Belgium',
    style: 'Trappist Ale',
    abv: 7.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'peroni',
    name: 'Peroni',
    brewery: 'Birra Peroni',
    country: 'Italy',
    style: 'Lager',
    abv: 5.1,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'moretti',
    name: 'Birra Moretti',
    brewery: 'Birra Moretti',
    country: 'Italy',
    style: 'Lager',
    abv: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'estrella',
    name: 'Estrella Damm',
    brewery: 'Damm',
    country: 'Spain',
    style: 'Lager',
    abv: 5.4,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'san-miguel',
    name: 'San Miguel',
    brewery: 'San Miguel Brewery',
    country: 'Philippines',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tiger',
    name: 'Tiger Beer',
    brewery: 'Asia Pacific Breweries',
    country: 'Singapore',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'singha',
    name: 'Singha',
    brewery: 'Boon Rawd Brewery',
    country: 'Thailand',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chang',
    name: 'Chang',
    brewery: 'Thai Beverage',
    country: 'Thailand',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fosters',
    name: 'Fosters',
    brewery: 'Foster\'s Group',
    country: 'Australia',
    style: 'Lager',
    abv: 4.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'victoria-bitter',
    name: 'Victoria Bitter',
    brewery: 'Carlton & United Breweries',
    country: 'Australia',
    style: 'Lager',
    abv: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'stella-cidre',
    name: 'Stella Artois Cidre',
    brewery: 'Stella Artois',
    country: 'Belgium',
    style: 'Cider',
    abv: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'amstel',
    name: 'Amstel',
    brewery: 'Amstel Brewery',
    country: 'Netherlands',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'grolsch',
    name: 'Grolsch',
    brewery: 'Grolsch',
    country: 'Netherlands',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kronenbourg',
    name: 'Kronenbourg 1664',
    brewery: 'Kronenbourg',
    country: 'France',
    style: 'Lager',
    abv: 5.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '1664-blanc',
    name: '1664 Blanc',
    brewery: 'Kronenbourg',
    country: 'France',
    style: 'Wheat Beer',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dos-equis',
    name: 'Dos Equis',
    brewery: 'Cervecería Cuauhtémoc Moctezuma',
    country: 'Mexico',
    style: 'Lager',
    abv: 4.2,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sol',
    name: 'Sol',
    brewery: 'Cervecería Cuauhtémoc Moctezuma',
    country: 'Mexico',
    style: 'Lager',
    abv: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'modelo',
    name: 'Modelo Especial',
    brewery: 'Grupo Modelo',
    country: 'Mexico',
    style: 'Lager',
    abv: 4.4,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'brahma',
    name: 'Brahma',
    brewery: 'Ambev',
    country: 'Brazil',
    style: 'Lager',
    abv: 4.3,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'skol',
    name: 'Skol',
    brewery: 'Ambev',
    country: 'Brazil',
    style: 'Lager',
    abv: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kingfisher',
    name: 'Kingfisher',
    brewery: 'United Breweries Group',
    country: 'India',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tusker',
    name: 'Tusker',
    brewery: 'East African Breweries',
    country: 'Kenya',
    style: 'Lager',
    abv: 4.2,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'castle',
    name: 'Castle Lager',
    brewery: 'South African Breweries',
    country: 'South Africa',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'red-stripe',
    name: 'Red Stripe',
    brewery: 'Desnoes & Geddes',
    country: 'Jamaica',
    style: 'Lager',
    abv: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'baltica',
    name: 'Baltika',
    brewery: 'Baltika Brewery',
    country: 'Russia',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'zlaty-bazant',
    name: 'Zlatý Bažant',
    brewery: 'Heineken',
    country: 'Slovakia',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pilsner-urquell',
    name: 'Pilsner Urquell',
    brewery: 'Plzeňský Prazdroj',
    country: 'Czech Republic',
    style: 'Pilsner',
    abv: 4.4,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'budvar',
    name: 'Budweiser Budvar',
    brewery: 'Budějovický Budvar',
    country: 'Czech Republic',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kozel',
    name: 'Kozel',
    brewery: 'Pivovar Velké Popovice',
    country: 'Czech Republic',
    style: 'Lager',
    abv: 4.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lapin-kulta',
    name: 'Lapin Kulta',
    brewery: 'Hartwall',
    country: 'Finland',
    style: 'Lager',
    abv: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'olvi',
    name: 'Olvi',
    brewery: 'Olvi',
    country: 'Finland',
    style: 'Lager',
    abv: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pripps',
    name: 'Pripps Blå',
    brewery: 'Carlsberg',
    country: 'Sweden',
    style: 'Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'norrlands-guld',
    name: 'Norrlands Guld',
    brewery: 'Spendrups',
    country: 'Sweden',
    style: 'Lager',
    abv: 5.3,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ringnes',
    name: 'Ringnes',
    brewery: 'Ringnes',
    country: 'Norway',
    style: 'Lager',
    abv: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hansa',
    name: 'Hansa',
    brewery: 'Hansa Borg',
    country: 'Norway',
    style: 'Lager',
    abv: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  // Top-rated craft beers from around the world
  {
    id: 'uerige-sticke',
    name: 'Uerige Sticke',
    brewery: 'Uerige Hausbrauerei',
    country: 'Germany',
    style: 'Altbier',
    abv: 6.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kentucky-breakfast-stout',
    name: 'Kentucky Breakfast Stout',
    brewery: 'Founders Brewing',
    country: 'USA',
    style: 'Imperial Stout',
    abv: 11.2,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kbs',
    name: 'KBS',
    brewery: 'Founders Brewing',
    country: 'USA',
    style: 'Imperial Stout',
    abv: 11.2,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sorachi-ace',
    name: 'Sorachi Ace',
    brewery: 'Brooklyn Brewery',
    country: 'USA',
    style: 'Saison',
    abv: 7.2,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'st-bernardus-prior-8',
    name: 'St. Bernardus Prior 8',
    brewery: 'Brouwerij St. Bernard',
    country: 'Belgium',
    style: 'Dubbel',
    abv: 8.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'st-bernardus-abt-12',
    name: 'St. Bernardus Abt 12',
    brewery: 'Brouwerij St. Bernard',
    country: 'Belgium',
    style: 'Quadrupel',
    abv: 10.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'saison-dupont',
    name: 'Saison Dupont',
    brewery: 'Brasserie Dupont',
    country: 'Belgium',
    style: 'Saison',
    abv: 6.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cantillon-gueuze',
    name: 'Cantillon Classic Gueuze',
    brewery: 'Brasserie Cantillon',
    country: 'Belgium',
    style: 'Gueuze',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'westvleteren-12',
    name: 'Westvleteren 12',
    brewery: 'Brouwerij Westvleteren',
    country: 'Belgium',
    style: 'Quadrupel',
    abv: 10.2,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rochefort-8',
    name: 'Rochefort 8',
    brewery: 'Brasserie de Rochefort',
    country: 'Belgium',
    style: 'Belgian Dark Strong Ale',
    abv: 9.2,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'orval',
    name: 'Orval',
    brewery: 'Brasserie d\'Orval',
    country: 'Belgium',
    style: 'Belgian Pale Ale',
    abv: 6.2,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'weihenstephaner-hefeweissbier',
    name: 'Weihenstephaner Hefeweissbier',
    brewery: 'Bayerische Staatsbrauerei Weihenstephan',
    country: 'Germany',
    style: 'Hefeweizen',
    abv: 5.4,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'schneider-aventinus',
    name: 'Schneider Aventinus',
    brewery: 'Weissbierbrauerei G. Schneider & Sohn',
    country: 'Germany',
    style: 'Weizenbock',
    abv: 8.2,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ayinger-celebrator',
    name: 'Ayinger Celebrator',
    brewery: 'Brauerei Aying',
    country: 'Germany',
    style: 'Doppelbock',
    abv: 6.7,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pilsner-urquell',
    name: 'Pilsner Urquell',
    brewery: 'Plzeňský Prazdroj',
    country: 'Czech Republic',
    style: 'Pilsner',
    abv: 4.4,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sierra-nevada-pale-ale',
    name: 'Sierra Nevada Pale Ale',
    brewery: 'Sierra Nevada Brewing',
    country: 'USA',
    style: 'American Pale Ale',
    abv: 5.6,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'heady-topper',
    name: 'Heady Topper',
    brewery: 'The Alchemist Brewery',
    country: 'USA',
    style: 'Imperial IPA',
    abv: 8.0,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pliny-the-elder',
    name: 'Pliny the Elder',
    brewery: 'Russian River Brewing',
    country: 'USA',
    style: 'Imperial IPA',
    abv: 8.0,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blind-pig',
    name: 'Blind Pig',
    brewery: 'Russian River Brewing',
    country: 'USA',
    style: 'American IPA',
    abv: 6.1,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tree-house-julius',
    name: 'Julius',
    brewery: 'Tree House Brewing',
    country: 'USA',
    style: 'American IPA',
    abv: 6.8,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'three-floyds-alpha-king',
    name: 'Alpha King',
    brewery: '3 Floyds Brewing',
    country: 'USA',
    style: 'American Pale Ale',
    abv: 6.66,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'three-floyds-zombie-dust',
    name: 'Zombie Dust',
    brewery: '3 Floyds Brewing',
    country: 'USA',
    style: 'American Pale Ale',
    abv: 6.2,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'founders-all-day-ipa',
    name: 'All Day IPA',
    brewery: 'Founders Brewing',
    country: 'USA',
    style: 'Session IPA',
    abv: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bells-two-hearted',
    name: 'Two Hearted Ale',
    brewery: 'Bell\'s Brewery',
    country: 'USA',
    style: 'American IPA',
    abv: 7.0,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'stone-enjoy-by',
    name: 'Enjoy By',
    brewery: 'Stone Brewing',
    country: 'USA',
    style: 'Imperial IPA',
    abv: 9.4,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'goose-island-bourbon-county',
    name: 'Bourbon County Stout',
    brewery: 'Goose Island',
    country: 'USA',
    style: 'Imperial Stout',
    abv: 14.2,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'deschutes-black-butte',
    name: 'Black Butte Porter',
    brewery: 'Deschutes Brewery',
    country: 'USA',
    style: 'American Porter',
    abv: 5.2,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'deschutes-the-abyss',
    name: 'The Abyss',
    brewery: 'Deschutes Brewery',
    country: 'USA',
    style: 'Imperial Stout',
    abv: 11.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'firestone-walker-pivo',
    name: 'Pivo',
    brewery: 'Firestone Walker',
    country: 'USA',
    style: 'German Pilsner',
    abv: 5.3,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'victory-prima-pils',
    name: 'Prima Pils',
    brewery: 'Victory Brewing',
    country: 'USA',
    style: 'German Pilsner',
    abv: 5.3,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'samuel-adams-boston-lager',
    name: 'Boston Lager',
    brewery: 'Samuel Adams',
    country: 'USA',
    style: 'Vienna Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'left-hand-milk-stout',
    name: 'Milk Stout Nitro',
    brewery: 'Left Hand Brewing',
    country: 'USA',
    style: 'Milk Stout',
    abv: 6.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'new-glarus-spotted-cow',
    name: 'Spotted Cow',
    brewery: 'New Glarus Brewing',
    country: 'USA',
    style: 'Cream Ale',
    abv: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'new-glarus-dancing-man',
    name: 'Dancing Man',
    brewery: 'New Glarus Brewing',
    country: 'USA',
    style: 'Hefeweizen',
    abv: 7.2,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'surly-darkness',
    name: 'Darkness',
    brewery: 'Surly Brewing',
    country: 'USA',
    style: 'Russian Imperial Stout',
    abv: 10.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'alesmith-speedway',
    name: 'Speedway Stout',
    brewery: 'AleSmith Brewing',
    country: 'USA',
    style: 'Imperial Stout',
    abv: 12.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lagunitas-down-low',
    name: 'Down Low',
    brewery: 'Lagunitas',
    country: 'USA',
    style: 'American Pale Ale',
    abv: 3.9,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ballast-point-sculpin',
    name: 'Grapefruit Sculpin',
    brewery: 'Ballast Point',
    country: 'USA',
    style: 'American IPA',
    abv: 7.0,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'modern-times-blazing-world',
    name: 'Blazing World',
    brewery: 'Modern Times Beer',
    country: 'USA',
    style: 'Amber Ale',
    abv: 6.8,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'allagash-white',
    name: 'Allagash White',
    brewery: 'Allagash Brewing',
    country: 'USA',
    style: 'Belgian Witbier',
    abv: 5.1,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'boulevard-tank-7',
    name: 'Tank 7 Farmhouse Ale',
    brewery: 'Boulevard Brewing',
    country: 'USA',
    style: 'Belgian Saison',
    abv: 8.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ommegang-hennepin',
    name: 'Hennepin',
    brewery: 'Brewery Ommegang',
    country: 'USA',
    style: 'Belgian Saison',
    abv: 7.7,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prairie-bomb',
    name: 'Prairie Bomb!',
    brewery: 'Prairie Artisan Ales',
    country: 'USA',
    style: 'Imperial Stout',
    abv: 13.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'westbrook-mexican-cake',
    name: 'Mexican Cake',
    brewery: 'Westbrook Brewing',
    country: 'USA',
    style: 'Imperial Stout',
    abv: 10.5,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'westbrook-key-lime-gose',
    name: 'Key Lime Pie Gose',
    brewery: 'Westbrook Brewing',
    country: 'USA',
    style: 'Gose',
    abv: 4.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hill-farmstead-arthur',
    name: 'Arthur',
    brewery: 'Hill Farmstead',
    country: 'USA',
    style: 'Belgian Saison',
    abv: 6.0,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hill-farmstead-everett',
    name: 'Everett',
    brewery: 'Hill Farmstead',
    country: 'USA',
    style: 'American Porter',
    abv: 7.5,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bissell-brothers-substance',
    name: 'The Substance',
    brewery: 'Bissell Brothers',
    country: 'USA',
    style: 'American IPA',
    abv: 6.6,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tipopils',
    name: 'Tipopils',
    brewery: 'Birrificio Italiano',
    country: 'Italy',
    style: 'German Pilsner',
    abv: 5.2,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'de-ranke-xx-bitter',
    name: 'XX Bitter',
    brewery: 'Brouwerij De Ranke',
    country: 'Belgium',
    style: 'Belgian Pale Ale',
    abv: 6.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3-fonteinen-gueuze',
    name: '3 Fonteinen Oude Gueuze',
    brewery: 'Brouwerij 3 Fonteinen',
    country: 'Belgium',
    style: 'Belgian Gueuze',
    abv: 6.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'taras-boulba',
    name: 'Taras Boulba',
    brewery: 'Brasserie de la Senne',
    country: 'Belgium',
    style: 'Belgian Pale Ale',
    abv: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fullers-esb',
    name: 'Fuller\'s ESB',
    brewery: 'Fuller\'s Brewery',
    country: 'UK',
    style: 'Extra Special Bitter',
    abv: 5.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'samuel-smith-taddy-porter',
    name: 'Taddy Porter',
    brewery: 'Samuel Smith',
    country: 'UK',
    style: 'English Porter',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cloudwater-dipa',
    name: 'DIPA',
    brewery: 'Cloudwater Brew Co.',
    country: 'UK',
    style: 'Double IPA',
    abv: 8.0,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'buxton-yellow-belly',
    name: 'Yellow Belly',
    brewery: 'Buxton Brewery',
    country: 'UK',
    style: 'Imperial Stout',
    abv: 11.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mikkeller-beer-geek-brunch',
    name: 'Beer Geek Brunch Weasel',
    brewery: 'Mikkeller',
    country: 'Denmark',
    style: 'Imperial Stout',
    abv: 10.9,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'to-ol-black-malts',
    name: 'Black Malts & Body Salts',
    brewery: 'To Øl',
    country: 'Denmark',
    style: 'Black IPA',
    abv: 9.0,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hitachino-nest-espresso',
    name: 'Hitachino Nest Espresso Stout',
    brewery: 'Kiuchi Brewery',
    country: 'Japan',
    style: 'American Stout',
    abv: 7.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rogue-shakespeare-stout',
    name: 'Shakespeare Oatmeal Stout',
    brewery: 'Rogue Ales',
    country: 'USA',
    style: 'Oatmeal Stout',
    abv: 6.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'anchor-porter',
    name: 'Anchor Porter',
    brewery: 'Anchor Brewing',
    country: 'USA',
    style: 'American Porter',
    abv: 5.6,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sierra-nevada-kellerweis',
    name: 'Kellerweis',
    brewery: 'Sierra Nevada',
    country: 'USA',
    style: 'Hefeweizen',
    abv: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'live-oak-hefeweizen',
    name: 'Hefeweizen',
    brewery: 'Live Oak',
    country: 'USA',
    style: 'Hefeweizen',
    abv: 5.2,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jacks-abby-house-lager',
    name: 'House Lager',
    brewery: 'Jack\'s Abby',
    country: 'USA',
    style: 'Landbier',
    abv: 5.2,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jacks-abby-smoke-dagger',
    name: 'Smoke & Dagger',
    brewery: 'Jack\'s Abby',
    country: 'USA',
    style: 'German Rauchbier',
    abv: 5.8,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'great-notion-juice-jr',
    name: 'Juice Jr.',
    brewery: 'Great Notion Brewing',
    country: 'USA',
    style: 'American Pale Ale',
    abv: 5.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'comrade-superpower',
    name: 'Superpower IPA',
    brewery: 'Comrade Brewing',
    country: 'USA',
    style: 'American IPA',
    abv: 6.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'barley-browns-ratchet-strap',
    name: 'Ratchet Strap',
    brewery: 'Barley Brown\'s',
    country: 'USA',
    style: 'American IPA',
    abv: 6.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cascade-noyaux',
    name: 'Noyaux',
    brewery: 'Cascade Brewing',
    country: 'USA',
    style: 'American Wild Ale',
    abv: 9.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'russian-river-supplication',
    name: 'Supplication',
    brewery: 'Russian River Brewing',
    country: 'USA',
    style: 'American Sour Ale',
    abv: 7.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'allagash-coolship-resurgam',
    name: 'Coolship Resurgam',
    brewery: 'Allagash Brewing',
    country: 'USA',
    style: 'American Sour Ale',
    abv: 6.6,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wicked-weed-serenity',
    name: 'Serenity',
    brewery: 'Wicked Weed Brewing',
    country: 'USA',
    style: 'American Sour Ale',
    abv: 5.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'galway-buried-at-sea',
    name: 'Buried at Sea',
    brewery: 'Galway Bay Brewing',
    country: 'Ireland',
    style: 'Milk Stout',
    abv: 5.5,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wiseacre-tiny-bomb',
    name: 'Tiny Bomb',
    brewery: 'Wiseacre Brewing',
    country: 'USA',
    style: 'Czech Pilsener',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'carton-boat-beer',
    name: 'Boat Beer',
    brewery: 'Carton Brewing',
    country: 'USA',
    style: 'American Pale Ale',
    abv: 4.2,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'half-acre-daisy-cutter',
    name: 'Daisy Cutter',
    brewery: 'Half Acre Beer Company',
    country: 'USA',
    style: 'American Pale Ale',
    abv: 5.2,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'maine-beer-company-mo',
    name: 'MO',
    brewery: 'Maine Beer Company',
    country: 'USA',
    style: 'American Pale Ale',
    abv: 6.0,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rhinegeist-truth',
    name: 'Truth',
    brewery: 'Rhinegeist Brewery',
    country: 'USA',
    style: 'American IPA',
    abv: 7.2,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'columbus-bodhi',
    name: 'Bodhi',
    brewery: 'Columbus Brewing',
    country: 'USA',
    style: 'Imperial IPA',
    abv: 8.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fat-heads-hop-juju',
    name: 'Hop JuJu',
    brewery: 'Fat Head\'s Brewery',
    country: 'USA',
    style: 'Imperial IPA',
    abv: 9.0,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'surly-abrasive',
    name: 'Abrasive Ale',
    brewery: 'Surly Brewing',
    country: 'USA',
    style: 'Imperial IPA',
    abv: 9.0,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'firestone-walker-easy-jack',
    name: 'Easy Jack',
    brewery: 'Firestone Walker',
    country: 'USA',
    style: 'Session IPA',
    abv: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'firestone-walker-wookey-jack',
    name: 'Wookey Jack',
    brewery: 'Firestone Walker',
    country: 'USA',
    style: 'Black IPA',
    abv: 8.3,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lawson-double-sunshine',
    name: 'Double Sunshine',
    brewery: 'Lawson\'s Finest Liquids',
    country: 'USA',
    style: 'Imperial IPA',
    abv: 8.0,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'other-half-nelson',
    name: 'Other Half Nelson',
    brewery: 'Other Half Brewing',
    country: 'USA',
    style: 'American IPA',
    abv: 6.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'revolution-fist-city',
    name: 'Fist City',
    brewery: 'Revolution Brewing',
    country: 'USA',
    style: 'American Pale Ale',
    abv: 5.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'stone-go-to-ipa',
    name: 'Go To IPA',
    brewery: 'Stone Brewing',
    country: 'USA',
    style: 'Session IPA',
    abv: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sierra-nevada-nooner',
    name: 'Nooner',
    brewery: 'Sierra Nevada',
    country: 'USA',
    style: 'German Pilsner',
    abv: 5.2,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'victory-helles',
    name: 'Victory Helles Lager',
    brewery: 'Victory Brewing',
    country: 'USA',
    style: 'German Helles Lager',
    abv: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pretty-things-american-darling',
    name: 'American Darling',
    brewery: 'Pretty Things Beer & Ale',
    country: 'USA',
    style: 'German Pilsner',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'moonlight-reality-czech',
    name: 'Reality Czeck',
    brewery: 'Moonlight Brewing',
    country: 'USA',
    style: 'Czech-Style Pilsner',
    abv: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'threes-vliet-pilsner',
    name: 'Vliet Pilsner',
    brewery: 'Threes Brewing',
    country: 'USA',
    style: 'Pilsner',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coast-32-50',
    name: '32/50',
    brewery: 'COAST Brewing',
    country: 'USA',
    style: 'Kölsch',
    abv: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'societe-coachman',
    name: 'The Coachman',
    brewery: 'Societe Brewing',
    country: 'USA',
    style: 'American IPA',
    abv: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fremont-fresh-hop',
    name: 'Fresh Hop Pale Ales',
    brewery: 'Fremont Brewing',
    country: 'USA',
    style: 'American Pale Ales',
    abv: 5.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'la-cumbre-elevated',
    name: 'Elevated IPA',
    brewery: 'La Cumbre Brewing',
    country: 'USA',
    style: 'American IPA',
    abv: 7.2,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'la-cumbre-beer',
    name: 'Beer',
    brewery: 'La Cumbre Brewing',
    country: 'USA',
    style: 'American Pale Lager',
    abv: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'riegele-kellerbier',
    name: 'Riegele Kellerbier',
    brewery: 'Brauerei S. Riegele',
    country: 'Germany',
    style: 'Dortmunder Lager',
    abv: 5.2,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kernel-table-beer',
    name: 'Table Beer',
    brewery: 'The Kernel Brewery',
    country: 'UK',
    style: 'American Pale Ale',
    abv: 3.0,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mont-salve-blanche',
    name: 'Blanche',
    brewery: 'Brasserie Du Mont Salève',
    country: 'France',
    style: 'Witbier',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mont-salve-sorachi-ace-bitter',
    name: 'Sorachi Ace Bitter',
    brewery: 'Brasserie Du Mont Salève',
    country: 'France',
    style: 'Session IPA',
    abv: 2.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blackberry-farm-classic-saison',
    name: 'Classic Saison',
    brewery: 'Blackberry Farm',
    country: 'USA',
    style: 'Saison',
    abv: 6.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'foam-saison-de-foam',
    name: 'Saison de Foam 2.0',
    brewery: 'Foam Brewers',
    country: 'USA',
    style: 'Saison',
    abv: 6.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'oec-tempus',
    name: 'Tempus',
    brewery: 'OEC Brewing',
    country: 'USA',
    style: 'Saison',
    abv: 6.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bruery-oude-tart',
    name: 'Oude Tart',
    brewery: 'Bruery Terreux',
    country: 'USA',
    style: 'Flanders Red Ale',
    abv: 7.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ale-apothecary-sahalie',
    name: 'Sahalie',
    brewery: 'The Ale Apothecary',
    country: 'USA',
    style: 'American Wild Ale',
    abv: 9.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'side-project-fuzzy',
    name: 'Fuzzy',
    brewery: 'Side Project Brewing',
    country: 'USA',
    style: 'American Wild Ale',
    abv: 6.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sante-adairius-west-ashley',
    name: 'West Ashley',
    brewery: 'Sante Adairius Rustic Ales',
    country: 'USA',
    style: 'American Wild Ale',
    abv: 7.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'j-wakefield-miami-madness',
    name: 'Miami Madness',
    brewery: 'J. Wakefield Brewing',
    country: 'USA',
    style: 'Berliner Weissbier',
    abv: 3.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'toccalmatto-dr-caligari',
    name: 'Dr. Caligari',
    brewery: 'Birra Toccalmatto',
    country: 'Italy',
    style: 'Berliner Weissbier',
    abv: 6.3,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bend-ching-ching',
    name: 'Ching Ching',
    brewery: 'Bend Brewing Company',
    country: 'USA',
    style: 'Berliner Weissbier',
    abv: 4.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'creature-comforts-athena',
    name: 'Athena',
    brewery: 'Creature Comforts',
    country: 'USA',
    style: 'Berliner Weissbier',
    abv: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'off-color-troublesome',
    name: 'Troublesome',
    brewery: 'Off Color Brewing',
    country: 'USA',
    style: 'Gose',
    abv: 4.3,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tres-lobos-bravo',
    name: 'Bravo',
    brewery: 'Cervejaria Tres Lobos Ltda.',
    country: 'Brazil',
    style: 'American Porter',
    abv: 6.5,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jw-lees-harvest-ale',
    name: 'Harvest Ale',
    brewery: 'J.W. Lees & Co.',
    country: 'UK',
    style: 'English Barleywine',
    abv: 11.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'baladin-xyauyu',
    name: 'Xyauyù',
    brewery: 'Birrificio Le Baladin',
    country: 'Italy',
    style: 'English Barleywine',
    abv: 13.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bellwoods-bring-out-dead',
    name: 'Bring Out Your Dead',
    brewery: 'Bellwoods Brewery',
    country: 'Canada',
    style: 'Russian Imperial Stout',
    abv: 13.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bottle-logic-fundamental',
    name: 'Fundamental Observation',
    brewery: 'Bottle Logic Brewing',
    country: 'USA',
    style: 'Imperial Vanilla Stout',
    abv: 14.3,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'alesmith-wee-heavy',
    name: 'Wee Heavy',
    brewery: 'AleSmith Brewing',
    country: 'USA',
    style: 'Scotch Ale',
    abv: 10.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'grimm-double-negative',
    name: 'Double Negative',
    brewery: 'Grimm Artisanal Ales',
    country: 'USA',
    style: 'Imperial Stout',
    abv: 10.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wolfs-ridge-dire-wolf',
    name: 'Dire Wolf',
    brewery: 'Wolf\'s Ridge Brewing',
    country: 'USA',
    style: 'Russian Imperial Stout',
    abv: 10.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kane-night-to-end-dawns',
    name: 'A Night to End All Dawns',
    brewery: 'Kane Brewing',
    country: 'USA',
    style: 'Imperial Stout',
    abv: 12.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bar-harbor-cadillac',
    name: 'Cadillac Mountain',
    brewery: 'Bar Harbor Brewing',
    country: 'USA',
    style: 'Irish Dry Stout',
    abv: 4.2,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'beachwood-mocha-machine',
    name: 'Mocha Machine',
    brewery: 'Beachwood BBQ & Brewing',
    country: 'USA',
    style: 'American Porter',
    abv: 8.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lion-bridge-workmans',
    name: 'Workman\'s Compensation',
    brewery: 'Lion Bridge Brewing',
    country: 'USA',
    style: 'English Dark Mild Ale',
    abv: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'andechser-weissbier',
    name: 'Andechser Weissbier Hell',
    brewery: 'Klosterbrauerei Andechs',
    country: 'Germany',
    style: 'Hefeweizen',
    abv: 5.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hopworks-nonstop-hef',
    name: 'Nonstop Hef Hop',
    brewery: 'Hopworks Urban Brewery',
    country: 'USA',
    style: 'American Wheat Beer',
    abv: 3.9,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tivoli-helles',
    name: 'Tivoli Helles',
    brewery: 'Tivoli Brewing',
    country: 'USA',
    style: 'German Helles Lager',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'avery-tweak',
    name: 'Tweak',
    brewery: 'Avery Brewing',
    country: 'USA',
    style: 'Imperial Stout',
    abv: 18.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'port-older-viscosity',
    name: 'Older Viscosity',
    brewery: 'Port Brewing',
    country: 'USA',
    style: 'Imperial Stout',
    abv: 12.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'peticolas-velvet-hammer',
    name: 'Velvet Hammer',
    brewery: 'Peticolas Brewing',
    country: 'USA',
    style: 'Strong Ale',
    abv: 9.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'oskar-blues-old-chub-nitro',
    name: 'Old Chub Nitro',
    brewery: 'Oskar Blues',
    country: 'USA',
    style: 'Scotch Ale',
    abv: 8.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hill-farmstead-harlan',
    name: 'Harlan',
    brewery: 'Hill Farmstead',
    country: 'USA',
    style: 'American IPA',
    abv: 6.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'harviestoun-old-engine-oil',
    name: 'Old Engine Oil',
    brewery: 'Harviestoun Brewery',
    country: 'UK',
    style: 'English Porter',
    abv: 6.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'anchorage-deal-with-devil',
    name: 'A Deal With The Devil',
    brewery: 'Anchorage Brewing',
    country: 'USA',
    style: 'American Barleywine',
    abv: 17.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hair-of-dog-adam',
    name: 'Adam',
    brewery: 'Hair of the Dog',
    country: 'USA',
    style: 'Old Ale',
    abv: 10.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rogue-farms-dirtoir',
    name: 'Rogue Farms Dirtoir',
    brewery: 'Rogue Ales',
    country: 'USA',
    style: 'German Schwarzbier',
    abv: 5.2,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jester-king-commercial-suicide',
    name: 'Commercial Suicide',
    brewery: 'Jester King Brewery',
    country: 'USA',
    style: 'American Sour Ale',
    abv: 3.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'logsdon-peche-n-brett',
    name: 'Peche \'n Brett',
    brewery: 'Logsdon Farmhouse Ales',
    country: 'USA',
    style: 'American Sour Ale',
    abv: 8.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'brasserie-saint-james-daily-wages',
    name: 'Daily Wages',
    brewery: 'Brasserie Saint James',
    country: 'USA',
    style: 'Belgian Saison',
    abv: 6.7,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fantome-saison',
    name: 'Fantôme Saison',
    brewery: 'Brasserie Fantôme',
    country: 'Belgium',
    style: 'Belgian Saison',
    abv: 8.0,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rare-barrel-ensorcelled',
    name: 'Ensorcelled',
    brewery: 'The Rare Barrel',
    country: 'USA',
    style: 'American Sour Ale',
    abv: 7.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'new-glarus-thumbprint-berliner',
    name: 'Thumbprint Berliner Weiss',
    brewery: 'New Glarus Brewing',
    country: 'USA',
    style: 'Berliner Weisse',
    abv: 4.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cantillon-rose-de-gambrinus',
    name: 'Rose de Gambrinus',
    brewery: 'Brasserie Cantillon',
    country: 'Belgium',
    style: 'Fruit Lambic',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gosebrauerei-leipziger-gose',
    name: 'Leipziger Gose',
    brewery: 'Gosebrauerei Bayerischer Bahnhof',
    country: 'Germany',
    style: 'German Gose',
    abv: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ritterguts-gose',
    name: 'Ritterguts Gose',
    brewery: 'Brauhaus Hartmannsdorf',
    country: 'Germany',
    style: 'German Gose',
    abv: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'crooked-stave-surette',
    name: 'Surette Provision Saison',
    brewery: 'Crooked Stave Brewery',
    country: 'USA',
    style: 'Belgian Saison',
    abv: 5.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'upslope-brown-ale',
    name: 'Upslope Brown Ale',
    brewery: 'Upslope Brewing',
    country: 'USA',
    style: 'American Brown Ale',
    abv: 6.7,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'devils-backbone-vienna',
    name: 'Devils Backbone Vienna Lager',
    brewery: 'Devils Backbone Brewing',
    country: 'USA',
    style: 'Vienna Lager',
    abv: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'alesmith-old-numbskull',
    name: 'Old Numbskull',
    brewery: 'AleSmith Brewing',
    country: 'USA',
    style: 'American Barleywine',
    abv: 11.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'perennial-abraxas',
    name: 'Abraxas',
    brewery: 'Perennial Artisan Ales',
    country: 'USA',
    style: 'Imperial Stout',
    abv: 10.0,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kulmbacher-monchshof',
    name: 'Monchshof Schwarzbier',
    brewery: 'Kulmbacher Brauerei',
    country: 'Germany',
    style: 'German Schwarzbier',
    abv: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'aecht-schlenkerla-helles',
    name: 'Aecht Schlenkerla Helles Lagerbier',
    brewery: 'Aecht Schlenkerla',
    country: 'Germany',
    style: 'German Rauchbier',
    abv: 4.3,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kout-na-sumave-12',
    name: 'Koutský 12°',
    brewery: 'Pivovar Kout na Šumave',
    country: 'Czech Republic',
    style: 'Czech Pilsner',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'straffe-hendrik-heritage',
    name: 'Hendrik Heritage',
    brewery: 'Straffe Hendrik',
    country: 'Belgium',
    style: 'Quadrupel',
    abv: 11.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'get-radical-train-to-mars',
    name: 'Train To Mars',
    brewery: 'Get Radical',
    country: 'USA',
    style: 'Saison',
    abv: 6.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'deschutes-pinot-suave',
    name: 'Pinot Suave',
    brewery: 'Deschutes Brewery',
    country: 'USA',
    style: 'Belgian Strong Dark Ale',
    abv: 9.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'santan-mr-pineapple',
    name: 'Mr. Pineapple',
    brewery: 'SanTan Brewing Co.',
    country: 'USA',
    style: 'American Pale Wheat Ale',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'miller-high-life',
    name: 'Miller High Life',
    brewery: 'Miller Brewing Co.',
    country: 'USA',
    style: 'American Adjunct Lager',
    abv: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'funky-buddha-maple-bacon',
    name: 'Maple Bacon Coffee Porter',
    brewery: 'Funky Buddha',
    country: 'USA',
    style: 'American Porter',
    abv: 6.4,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'loverbeer-beerbera',
    name: 'BeerBera Riserva',
    brewery: 'LoverBeer',
    country: 'Italy',
    style: 'Sour Ale',
    abv: 8.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'girardin-black-label',
    name: 'Black Label',
    brewery: 'Brouwerij Girardin',
    country: 'Belgium',
    style: 'Gueuze',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cantillon-mamouche',
    name: 'Mamouche',
    brewery: 'Brasserie Cantillon',
    country: 'Belgium',
    style: 'Lambic',
    abv: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'boulevard-saison-brett',
    name: 'Saison Brett',
    brewery: 'Boulevard Brewing',
    country: 'USA',
    style: 'Saison',
    abv: 8.5,
    imageUrl: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80'
  }
];
