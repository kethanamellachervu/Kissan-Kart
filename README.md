# Kissan Kart

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-yellow.svg)](https://vitejs.dev/)

A modern web platform connecting farmers directly with consumers, enabling the purchase of fresh, organic farm produce. Built with React, TypeScript, and Supabase for a seamless user experience.

## 🌟 Features

- **Direct Farmer-Consumer Connection**: Browse products from verified local farmers
- **Real-time Communication**: Contact farmers via phone, WhatsApp, or farm visits
- **Flexible Delivery Options**: Choose home delivery or self-pickup from farms
- **Product Categories**: Fruits, vegetables, dairy, and more
- **Farmer Profiles**: Detailed information about farmers and their farms
- **Secure Authentication**: User registration and login with role-based access
- **Shopping Cart**: Add products and manage orders
- **Responsive Design**: Optimized for desktop and mobile devices

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **React Router** - Client-side routing
- **React Query** - Data fetching and state management

### Backend & Database
- **Supabase** - Backend-as-a-Service with PostgreSQL database
- **Row Level Security** - Database-level access control

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **Git** - Version control

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kethanamellachervu/Kissan-Kart.git
   cd earth-to-door-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 📖 Usage

### For Consumers
1. **Browse Products**: Explore the wide range of fresh produce from local farmers
2. **View Farmer Profiles**: Learn about farmers and their farming practices
3. **Add to Cart**: Select products and manage your shopping cart
4. **Contact Farmers**: Reach out directly via phone or WhatsApp
5. **Choose Delivery**: Opt for home delivery or farm pickup

### For Farmers
1. **Create Profile**: Register as a farmer and set up your profile
2. **List Products**: Add your farm produce to the platform
3. **Manage Orders**: Handle customer inquiries and orders
4. **Direct Communication**: Connect with customers personally

## 🏗️ Project Structure

```
earth-to-door-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # shadcn/ui components
│   │   └── home/          # Home page components
│   ├── pages/             # Page components
│   ├── integrations/      # External service integrations
│   │   └── supabase/      # Supabase client and types
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── assets/            # Images and media files
├── supabase/              # Database migrations and config
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🗄️ Database Schema

The application uses Supabase with the following main tables:

- **profiles**: User profiles with roles (farmer/customer)
- **products**: Farm produce listings
- **orders**: Customer orders
- **farmers**: Detailed farmer information

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write clear, concise commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev/) - AI-powered development platform
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)

## 📞 Support

For support or questions:
- Open an issue on GitHub
- Contact the development team

---

**Made with ❤️ for farmers and consumers**
