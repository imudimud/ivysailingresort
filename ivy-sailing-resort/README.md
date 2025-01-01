IVY Sailing Resort Website

A modern, responsive website for IVY Sailing Resort, an alcohol-free all-inclusive resort located in Ayvalık/Balıkesir, Turkey. Built with Next.js 13 and TypeScript, featuring a comprehensive booking system and virtual tour functionality.
🌟 Features

    Modern Design: Responsive, mobile-first design using Tailwind CSS
    Image Optimization: Custom LazyImage component for optimal loading performance
    Interactive Booking: Comprehensive booking system with real-time price calculation
    Virtual Tour: Interactive resort tour with high-quality images
    Package Management: Different package types for various guest preferences
    Accessibility: ARIA-compliant components and keyboard navigation support

🚀 Tech Stack

    Framework: Next.js 13 (App Router)
    Language: TypeScript
    Styling: Tailwind CSS
    UI Components: shadcn/ui
    State Management: React Hooks
    Form Handling: Custom implementation
    Image Loading: Custom LazyImage component

📦 Project Structure

/app /about /activities /booking /booking-confirmation /couples /dining /families /luxury-seekers /packages /rooms /virtual-tour /components /ui flying-date-picker.tsx lazy-image.tsx /public /images

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ivy-sailing-resort.git

    Install dependencies:

cd ivy-sailing-resort
npm install

    Run the development server:

npm run dev

    Open http://localhost:3000

    in your browser

💻 Development

    npm run dev: Start development server
    npm run build: Build for production
    npm run start: Start production server
    npm run lint: Run ESLint

🌐 Environment Variables

Create a .env.local file in the root directory:
NEXT_PUBLIC_SITE_URL=http://localhost:3000
📱 Key Features by Page

    Home: Dynamic hero section, package highlights, special offers
    Rooms: Interactive room showcase with detailed information
    Dining: Restaurant schedules and menu highlights
    Activities: Weekly activity calendar and booking
    Packages: Comprehensive package comparison
    Virtual Tour: Interactive resort tour with high-quality images
    Booking: Multi-step booking process with real-time pricing

🔒 Deployment

The project is configured for deployment on Vercel:

    Push your code to GitHub
    Import project to Vercel
    Configure environment variables
    Deploy

🤝 Contributing

    Fork the repository
    Create your feature branch (git checkout -b feature/AmazingFeature)
    Commit your changes (git commit -m 'Add some AmazingFeature')
    Push to the branch (git push origin feature/AmazingFeature)
    Open a Pull Request

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
📞 Support

For support, email info@ivysailinghotel.com

or join our Slack channel.
✨ Acknowledgments

    Next.js team for the amazing framework
    shadcn for the beautiful UI components
    All contributors who have helped shape this project