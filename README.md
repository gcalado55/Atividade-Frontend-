# Tech E-commerce Website

A modern e-commerce platform for technology products, offering a wide range of items including smartphones, monitors, headphones, keyboards, smartwatches, and more.

## Features

- 🛍️ Product categories browsing
- 🔍 Search functionality
- 🌓 Dark/Light mode toggle
- 🛒 Shopping cart management
- 👤 User authentication
- 📱 Responsive design
- 🔐 Secure checkout process

## Technologies Used

- **React** - Frontend library
- **TypeScript** - Programming language
- **Tailwind CSS** - Styling framework
- **React Router** - Navigation
- **LocalStorage** - Data persistence
- **Vite** - Build tool

## Prerequisites

- Node.js (version 16 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tech-ecommerce.git
cd tech-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Development

To run the project in development mode:
```bash
npm run dev
```

To build the project for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── mock/          # Mock data
├── context/       # React context
├── types/         # TypeScript types
└── styles/        # Global styles
```

## Dependencies

Main dependencies used in this project:

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.11.2",
    "react-icons": "^4.8.0",
    "tailwindcss": "^3.3.2",
    "typescript": "^5.0.2"
  }
}
```

## Scripts

Available npm scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
