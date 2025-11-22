export interface Farmer {
  id: string;
  name: string;
  location: string;
  district: string;
  specialization: string[];
  image: string;
  phone: string;
  whatsapp: string;
  rating: number;
  totalProducts: number;
  verified: boolean;
}

export const farmers: Farmer[] = [
  {
    id: "1",
    name: "Ramesh Goud",
    location: "Enabavi Village",
    district: "Warangal",
    specialization: ["Organic Vegetables", "Leafy Greens"],
    image: "https://images.unsplash.com/photo-1595855759920-86eec30e129a?q=80&w=400",
    phone: "+91 9876543210",
    whatsapp: "+919876543210",
    rating: 4.8,
    totalProducts: 45,
    verified: true,
  },
  {
    id: "2",
    name: "Lakshmi Naidu",
    location: "Pochampally",
    district: "Nalgonda",
    specialization: ["Fresh Fruits", "Seasonal Vegetables"],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=400",
    phone: "+91 9876543211",
    whatsapp: "+919876543211",
    rating: 4.9,
    totalProducts: 52,
    verified: true,
  },
  {
    id: "3",
    name: "Venkatesh Reddy",
    location: "Mirjaguda",
    district: "Ranga Reddy",
    specialization: ["Tomatoes", "Onions", "Potatoes"],
    image: "https://images.unsplash.com/photo-1595855759818-4c0e0b2b6ee0?q=80&w=400",
    phone: "+91 9876543212",
    whatsapp: "+919876543212",
    rating: 4.7,
    totalProducts: 38,
    verified: true,
  },
  {
    id: "4",
    name: "Madhavi Rao",
    location: "Nizamabad City",
    district: "Nizamabad",
    specialization: ["Dairy Products", "Fresh Milk"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
    phone: "+91 9876543213",
    whatsapp: "+919876543213",
    rating: 4.9,
    totalProducts: 28,
    verified: true,
  },
  {
    id: "5",
    name: "Srikanth Bollapalli",
    location: "Armoor",
    district: "Nizamabad",
    specialization: ["Organic Farming", "Natural Produce"],
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400",
    phone: "+91 9876543214",
    whatsapp: "+919876543214",
    rating: 5.0,
    totalProducts: 65,
    verified: true,
  },
  {
    id: "6",
    name: "Kavitha Devi",
    location: "Kamareddy",
    district: "Kamareddy",
    specialization: ["Greens", "Spinach", "Coriander"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400",
    phone: "+91 9876543215",
    whatsapp: "+919876543215",
    rating: 4.6,
    totalProducts: 41,
    verified: true,
  },
];
