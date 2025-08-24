export interface RestaurantFormData {
  about: string;
  city?: string;
  country?: string;
  cuisine: string;
  cuisines: string;

  daysOfOperation: string;
  description: string;
  email: string;
  id?: File;
  is247?: boolean;
  latitude?: string;

  license?: File;
  logo?: File | null;
  longitude?: string;
  name: string;
  operatingDays?: string[];

  operatingHours?: { [day: string]: { close: string; open: string } };
  ownerName: string;
  password: string;
  phone: string;
  postalCode?: string;
  proofDocument?: File | null;
  province?: string;
  street?: string;
  tags: string[];
  type: string;
}
