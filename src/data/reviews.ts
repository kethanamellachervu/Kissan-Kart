export interface Review {
  id: string;
  farmerId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  productsPurchased: string[];
}

export const reviews: Review[] = [
  {
    id: "1",
    farmerId: "1",
    userName: "Rajesh Kumar",
    rating: 5,
    comment: "Best quality organic vegetables! Ramesh Goud's produce is always fresh. Been buying from him for 6 months now.",
    date: "2024-01-15",
    productsPurchased: ["Organic Spinach", "Leafy Greens"],
  },
  {
    id: "2",
    farmerId: "1",
    userName: "Priya Sharma",
    rating: 5,
    comment: "Very genuine farmer. The vegetables taste amazing and last longer than store-bought ones.",
    date: "2024-01-10",
    productsPurchased: ["Organic Vegetables"],
  },
  {
    id: "3",
    farmerId: "2",
    userName: "Anil Reddy",
    rating: 5,
    comment: "Lakshmi ji's mangoes are the best! Sweet and juicy. Highly recommend visiting the farm.",
    date: "2024-01-12",
    productsPurchased: ["Fresh Mangoes", "Seasonal Vegetables"],
  },
  {
    id: "4",
    farmerId: "2",
    userName: "Meera Patel",
    rating: 4,
    comment: "Great variety of fruits and vegetables. Delivery was on time. Will order again.",
    date: "2024-01-08",
    productsPurchased: ["Fresh Fruits"],
  },
  {
    id: "5",
    farmerId: "3",
    userName: "Suresh Babu",
    rating: 5,
    comment: "Venkatesh bhai grows the best tomatoes in Ranga Reddy! Always responsive on WhatsApp.",
    date: "2024-01-14",
    productsPurchased: ["Fresh Tomatoes", "Red Onions", "Potatoes"],
  },
  {
    id: "6",
    farmerId: "3",
    userName: "Kavita Singh",
    rating: 5,
    comment: "Fresh vegetables at reasonable prices. Very happy with the quality.",
    date: "2024-01-09",
    productsPurchased: ["Vegetables"],
  },
  {
    id: "7",
    farmerId: "4",
    userName: "Ramana Rao",
    rating: 5,
    comment: "Pure milk, delivered fresh every morning. Madhavi ji is very professional.",
    date: "2024-01-13",
    productsPurchased: ["Fresh Milk", "Farm Fresh Eggs"],
  },
  {
    id: "8",
    farmerId: "5",
    userName: "Deepak Reddy",
    rating: 5,
    comment: "Srikanth's organic farming methods are exemplary. His produce is chemical-free and healthy.",
    date: "2024-01-11",
    productsPurchased: ["Organic Produce"],
  },
  {
    id: "9",
    farmerId: "6",
    userName: "Shalini Devi",
    rating: 4,
    comment: "Fresh coriander and greens. Good quality and fair prices.",
    date: "2024-01-07",
    productsPurchased: ["Organic Coriander", "Leafy Greens"],
  },
];
