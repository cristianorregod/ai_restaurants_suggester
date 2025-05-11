// export interface Restaurant {
//   id: string
//   name: string
//   description: string
//   rating: number
//   reviewCount: number
//   cuisines: string[]
//   priceRange: string
//   address: {
//     street: string
//     city: string
//     state: string
//     zip: string
//   }
//   phone: string
//   hours: {
//     day: string
//     hours: string
//   }[]
//   images: string[]
//   menu: {
//     name: string
//     items: {
//       name: string
//       description: string
//       price: number
//     }[]
//   }[]
//   reviews: Review[]
// }

// export interface Review {
//   id: string;
//   user: {
//     name: string;
//     avatar: string;
//   };
//   rating: number;
//   date: string;
//   comment: string;
//   helpfulCount: number;
//   images?: string[];
// }
export interface Review {
  autor: string;
  texto: string;
}

export interface MenuItem {
  plato: string;
  precio: string;
}

export interface Restaurant {
  id: number;
  name: string;
  category: string;
  stars: number;
  description: string;
  price: string;
  image: string;
  reviews: Review[];
  schedule: string;
  menu: MenuItem[];
  address: string;
  phone: string;
}
