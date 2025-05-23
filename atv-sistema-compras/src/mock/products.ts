import type { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 299.99,
    image: "",
    description: "High-quality wireless headphones with noise cancellation.",
    quantity: 1,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "https://via.placeholder.com/300x200?text=Smart+Watch",
    description: "Stylish smart watch with health tracking features.",
    quantity: 3,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 89.99,
    image: "https://via.placeholder.com/300x200?text=Gaming+Mouse",
    description: "Ergonomic gaming mouse with customizable DPI.",
    quantity: 2,
  },
];