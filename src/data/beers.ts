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
  }
];
