import { Beer } from '@/data/beers';

// PunkAPI response type
interface PunkAPIBeer {
  id: number;
  name: string;
  tagline?: string;
  first_brewed?: string;
  description?: string;
  image_url?: string;
  abv?: number;
  ibu?: number;
  target_fg?: number;
  target_og?: number;
  ebc?: number;
  srm?: number;
  ph?: number;
  attenuation_level?: number;
  volume?: {
    value: number;
    unit: string;
  };
  boil_volume?: {
    value: number;
    unit: string;
  };
  method?: {
    mash_temp: Array<{
      temp: { value: number; unit: string };
      duration: number;
    }>;
    fermentation: {
      temp: { value: number; unit: string };
    };
    twist?: string;
  };
  ingredients?: {
    malt: Array<{ name: string; amount: { value: number; unit: string } }>;
    hops: Array<{
      name: string;
      amount: { value: number; unit: string };
      add: string;
      attribute: string;
    }>;
    yeast?: string;
  };
  food_pairing?: string[];
  brewers_tips?: string;
  contributed_by?: string;
}

// Convert PunkAPI beer to our Beer type
const convertPunkAPIToBeer = (punkBeer: PunkAPIBeer): Beer => {
  // Extract country from name or description if possible
  // For now, we'll use a simple mapping or leave it undefined
  const country = extractCountry(punkBeer);
  
  // Extract style from tagline or description
  const style = extractStyle(punkBeer);

  return {
    id: `punkapi-${punkBeer.id}`,
    name: punkBeer.name,
    brewery: punkBeer.contributed_by?.replace('Sam Mason <samjbmason>', '').trim() || undefined,
    country: country,
    style: style || punkBeer.tagline || undefined,
    abv: punkBeer.abv,
    imageUrl: punkBeer.image_url || undefined,
  };
};

// Simple country extraction (can be improved)
const extractCountry = (beer: PunkAPIBeer): string | undefined => {
  const name = beer.name.toLowerCase();
  const desc = beer.description?.toLowerCase() || '';
  
  // Common country indicators
  if (name.includes('finnish') || desc.includes('finland')) return 'Finland';
  if (name.includes('german') || desc.includes('germany')) return 'Germany';
  if (name.includes('belgian') || desc.includes('belgium')) return 'Belgium';
  if (name.includes('irish') || desc.includes('ireland')) return 'Ireland';
  if (name.includes('scottish') || desc.includes('scotland')) return 'Scotland';
  if (name.includes('american') || desc.includes('usa') || desc.includes('united states')) return 'USA';
  if (name.includes('british') || desc.includes('uk') || desc.includes('england')) return 'UK';
  if (name.includes('czech') || desc.includes('czech republic')) return 'Czech Republic';
  if (name.includes('danish') || desc.includes('denmark')) return 'Denmark';
  if (name.includes('swedish') || desc.includes('sweden')) return 'Sweden';
  if (name.includes('norwegian') || desc.includes('norway')) return 'Norway';
  
  return undefined;
};

// Extract beer style
const extractStyle = (beer: PunkAPIBeer): string | undefined => {
  const name = beer.name.toLowerCase();
  const tagline = beer.tagline?.toLowerCase() || '';
  const desc = beer.description?.toLowerCase() || '';
  const combined = `${name} ${tagline} ${desc}`;

  // Common beer styles
  if (combined.includes('ipa') || combined.includes('india pale ale')) return 'IPA';
  if (combined.includes('stout')) return 'Stout';
  if (combined.includes('porter')) return 'Porter';
  if (combined.includes('lager') || combined.includes('pilsner') || combined.includes('pils')) return 'Lager';
  if (combined.includes('ale')) return 'Ale';
  if (combined.includes('wheat') || combined.includes('weizen')) return 'Wheat Beer';
  if (combined.includes('sour')) return 'Sour';
  if (combined.includes('pale ale')) return 'Pale Ale';
  if (combined.includes('brown ale')) return 'Brown Ale';
  if (combined.includes('red ale')) return 'Red Ale';
  if (combined.includes('blonde') || combined.includes('golden')) return 'Blonde Ale';
  if (combined.includes('wheat')) return 'Wheat Beer';
  if (combined.includes('belgian')) return 'Belgian';
  if (combined.includes('tripel')) return 'Tripel';
  if (combined.includes('dubbel')) return 'Dubbel';
  if (combined.includes('quad')) return 'Quadrupel';
  
  return undefined;
};

// Search beers using PunkAPI
export const searchBeersAPI = async (query: string): Promise<Beer[]> => {
  try {
    const searchQuery = encodeURIComponent(query);
    
    // Try multiple search strategies for better results
    const searchPromises = [
      // Search by name
      fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchQuery}&per_page=25`),
      // Search by food pairing (sometimes beers are found this way)
      fetch(`https://api.punkapi.com/v2/beers?food=${searchQuery}&per_page=10`),
    ];
    
    const responses = await Promise.allSettled(searchPromises);
    const allBeers: PunkAPIBeer[] = [];
    
    for (const response of responses) {
      if (response.status === 'fulfilled' && response.value.ok) {
        const data: PunkAPIBeer[] = await response.value.json();
        allBeers.push(...data);
      }
    }
    
    // Remove duplicates by ID
    const uniqueBeers = Array.from(
      new Map(allBeers.map(beer => [beer.id, beer])).values()
    );
    
    return uniqueBeers.map(convertPunkAPIToBeer);
  } catch (error) {
    console.error('Failed to search beers from API', error);
    return [];
  }
};

// Get random beers
export const getRandomBeers = async (count: number = 10): Promise<Beer[]> => {
  try {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers/random?per_page=${count}`
    );
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data: PunkAPIBeer[] = await response.json();
    return data.map(convertPunkAPIToBeer);
  } catch (error) {
    console.error('Failed to get random beers from API', error);
    return [];
  }
};

// Get all beers (paginated - gets first 80)
export const getAllBeersFromAPI = async (page: number = 1, perPage: number = 80): Promise<Beer[]> => {
  try {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`
    );
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data: PunkAPIBeer[] = await response.json();
    return data.map(convertPunkAPIToBeer);
  } catch (error) {
    console.error('Failed to get beers from API', error);
    return [];
  }
};

