# Tech E-commerce Website

A modern e-commerce platform for technology products built with React, TypeScript, and Tailwind CSS.

## Features

- 🛍️ Product categories browsing
- 🔍 Real-time search functionality
- 🌓 Dark/Light mode toggle
- 🛒 Shopping cart management
- 👤 User authentication with local storage
- 📱 Responsive design
- 🔐 Secure checkout process

## Tech Stack

- **React 18** - Frontend library
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next generation frontend tooling
- **React Router DOM** - Client-side routing
- **React Icons** - Icon components
- **LocalStorage** - Data persistence

## Prerequisites

- Node.js (version 16 or higher)
- pnpm (version 8 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tech-ecommerce.git
cd tech-ecommerce
```

2. Install dependencies with pnpm:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Available Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
}
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── mock/          # Mock data for products
├── context/       # React context providers
├── types/         # TypeScript type definitions
└── styles/        # Global styles and Tailwind config
```

## Key Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.11.2",
    "react-icons": "^4.8.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.3.2",
    "typescript": "^5.0.2",
    "vite": "^4.4.0"
  }
}
```

## Development

To run the project in development mode:
```bash
pnpm dev
```

To build the project for production:
```bash
pnpm build
```

To preview the production build:
```bash
pnpm preview
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
