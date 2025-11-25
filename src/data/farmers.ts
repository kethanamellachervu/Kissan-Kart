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
  bio: string;
  farmingExperience: number;
  farmSize: string;
  coordinates: { lat: number; lng: number };
  visitInstructions: string;
  farmingMethods: string[];
}

export const farmers: Farmer[] = [
  {
    id: "1",
    name: "Ramesh Goud",
    location: "Enabavi Village",
    district: "Warangal",
    specialization: ["Organic Vegetables", "Leafy Greens"],
    image: "https://media.istockphoto.com/id/1205325344/photo/farmer-in-agricultural-field.jpg?s=612x612&w=0&k=20&c=krsRk4T2MsmMy6PmrpPDR0i_1ja3_jQaNl80fBejWck=",
    phone: "+91 9876543210",
    whatsapp: "+919876543210",
    rating: 4.8,
    totalProducts: 45,
    verified: true,
    bio: "Third-generation organic farmer passionate about sustainable agriculture. Certified organic since 2015.",
    farmingExperience: 20,
    farmSize: "5 acres",
    coordinates: { lat: 18.0037, lng: 79.5941 },
    visitInstructions: "Farm is located 2km from Enabavi main road. Best visiting hours: 7 AM - 11 AM. Please call before visiting.",
    farmingMethods: ["Organic", "Natural Composting", "Zero Pesticides"],
  },
  {
    id: "2",
    name: "Lakshmi Naidu",
    location: "Pochampally",

    district: "Nalgonda",
    specialization: ["Fresh Fruits", "Seasonal Vegetables"],
    image: "https://c8.alamy.com/comp/RWT81F/hyderabad-telangana-may-2018-woman-with-grain-harvest-RWT81F.jpg",
    phone: "+91 9876543211",
    whatsapp: "+919876543211",
    rating: 4.9,
    totalProducts: 52,
    verified: true,
    bio: "Specializing in seasonal fruits and vegetables with traditional farming wisdom passed down through generations.",
    farmingExperience: 25,
    farmSize: "7 acres",
    coordinates: { lat: 17.3616, lng: 78.9672 },
    visitInstructions: "Farm located near Pochampally handloom center. Open for visits on weekends. Prior appointment required.",
    farmingMethods: ["Integrated Farming", "Water Conservation", "Crop Rotation"],
  },
  {
    id: "3",
    name: "Venkatesh Reddy",
    location: "Mirjaguda",
    district: "Ranga Reddy",
    specialization: ["Tomatoes", "Onions", "Potatoes"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMrHMVhPM5IsI0r5Y-VN1TZJTC1mjWtjvow&s",
    phone: "+91 9876543212",
    whatsapp: "+919876543212",
    rating: 4.7,
    totalProducts: 38,
    verified: true,
    bio: "Expert in growing high-quality vegetables using modern farming techniques while maintaining traditional values.",
    farmingExperience: 15,
    farmSize: "4 acres",
    coordinates: { lat: 17.4326, lng: 78.4071 },
    visitInstructions: "Farm is 5 minutes from Mirjaguda bus stop. Visit between 6 AM - 10 AM for fresh morning harvest.",
    farmingMethods: ["Drip Irrigation", "Greenhouse Farming", "Quality Seeds"],
  },
  {
    id: "4",
    name: "Madhavi",
    location: "Nizamabad City",
    district: "Nizamabad",
    specialization: ["Dairy Products", "Fresh Milk"],
    image: "https://kj1bcdn.b-cdn.net/media/45112/telangana-2.jpg",
    phone: "+91 9876543213",
    whatsapp: "+919876543213",
    rating: 4.9,
    totalProducts: 28,
    verified: true,
    bio: "Running a family dairy farm for over two decades. Our cows are grass-fed and well-cared for.",
    farmingExperience: 22,
    farmSize: "3 acres dairy farm",
    coordinates: { lat: 18.6725, lng: 78.0945 },
    visitInstructions: "Dairy farm visits available 6 AM - 8 AM daily. See fresh milk collection process. Advance booking required.",
    farmingMethods: ["Grass-fed Dairy", "Hygienic Processing", "Natural Feed"],
  },
  {
    id: "5",
    name: "Srikanth Bollapalli",
    location: "Armoor",
    district: "Nizamabad",
    specialization: ["Organic Farming", "Natural Produce"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJzkbeDZoLrKy0bETm54ANQrWTYa5NYJ8hQ&s",
    phone: "+91 9876543214",
    whatsapp: "+919876543214",
    rating: 5.0,
    totalProducts: 65,
    verified: true,
    bio: "Award-winning organic farmer. Transformed from conventional to organic farming and helping other farmers do the same.",
    farmingExperience: 18,
    farmSize: "8 acres",
    coordinates: { lat: 18.7899, lng: 78.2847 },
    visitInstructions: "Model organic farm open for educational visits. Group visits on Saturdays. Individual visits by appointment.",
    farmingMethods: ["100% Organic", "Composting", "Seed Preservation", "Training Others"],
  },
  {
    id: "6",
    name: "Kavitha",
    location: "Kamareddy",
    district: "Kamareddy",
    specialization: ["Greens", "Spinach", "Coriander"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT54j9G0Qfr-hBgZJKwku5y95Q_W3pQj2RE2Q&s",
    phone: "+91 9876543215",
    whatsapp: "+919876543215",
    rating: 4.6,
    totalProducts: 41,
    verified: true,
    bio: "Specializing in leafy vegetables and herbs. Fresh harvest delivered same day within Kamareddy district.",
    farmingExperience: 12,
    farmSize: "2 acres",
    coordinates: { lat: 18.3218, lng: 78.3391 },
    visitInstructions: "Small farm near Kamareddy town. Casual visits welcome during harvest hours 5 AM - 9 AM.",
    farmingMethods: ["Fresh Greens", "Daily Harvest", "Chemical-free"],
  },
];
