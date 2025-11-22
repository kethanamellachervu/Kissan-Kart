export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  farmerId: string;
  farmerName: string;
  location: string;
  image: string;
  description: string;
  inStock: boolean;
  organic: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 40,
    unit: "kg",
    farmerId: "3",
    farmerName: "Venkatesh Reddy",
    location: "Ranga Reddy",
    image: "https://images.unsplash.com/photo-1546470427-227a2e570774?q=80&w=600",
    description: "Fresh, juicy tomatoes harvested daily. Perfect for curries and salads.",
    inStock: true,
    organic: false,
  },
  {
    id: "2",
    name: "Organic Spinach",
    category: "Leafy Greens",
    price: 30,
    unit: "bundle",
    farmerId: "1",
    farmerName: "Ramesh Goud",
    location: "Warangal",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=600",
    description: "100% organic spinach grown without pesticides. Rich in iron and nutrients.",
    inStock: true,
    organic: true,
  },
  {
    id: "3",
    name: "Farm Fresh Eggs",
    category: "Dairy & Eggs",
    price: 90,
    unit: "dozen",
    farmerId: "4",
    farmerName: "Madhavi Rao",
    location: "Nizamabad",
    image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?q=80&w=600",
    description: "Free-range eggs from healthy hens. Fresh and nutritious.",
    inStock: true,
    organic: false,
  },
  {
    id: "4",
    name: "Red Onions",
    category: "Vegetables",
    price: 35,
    unit: "kg",
    farmerId: "3",
    farmerName: "Venkatesh Reddy",
    location: "Ranga Reddy",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=600",
    description: "Premium quality red onions. Essential for every kitchen.",
    inStock: true,
    organic: false,
  },
  {
    id: "5",
    name: "Fresh Mangoes",
    category: "Fruits",
    price: 120,
    unit: "kg",
    farmerId: "2",
    farmerName: "Lakshmi Naidu",
    location: "Nalgonda",
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=600",
    description: "Sweet and juicy seasonal mangoes. Directly from the orchard.",
    inStock: true,
    organic: false,
  },
  {
    id: "6",
    name: "Organic Coriander",
    category: "Leafy Greens",
    price: 20,
    unit: "bundle",
    farmerId: "6",
    farmerName: "Kavitha Devi",
    location: "Kamareddy",
    image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?q=80&w=600",
    description: "Fresh organic coriander leaves. Aromatic and flavorful.",
    inStock: true,
    organic: true,
  },
  {
    id: "7",
    name: "Fresh Potatoes",
    category: "Vegetables",
    price: 25,
    unit: "kg",
    farmerId: "3",
    farmerName: "Venkatesh Reddy",
    location: "Ranga Reddy",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=600",
    description: "Quality potatoes perfect for all your cooking needs.",
    inStock: true,
    organic: false,
  },
  {
    id: "8",
    name: "Fresh Milk",
    category: "Dairy & Eggs",
    price: 60,
    unit: "liter",
    farmerId: "4",
    farmerName: "Madhavi Rao",
    location: "Nizamabad",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=600",
    description: "Pure and fresh cow milk. Delivered daily from our dairy farm.",
    inStock: true,
    organic: false,
  },
];

export const categories = [
  "All Products",
  "Vegetables",
  "Fruits",
  "Leafy Greens",
  "Dairy & Eggs",
];
