import { getProductName, getProductPrice } from "../utils/productUtils";

const productName = getProductName(category, id);
const price = getProductPrice(id);

export function getProductName(category: string, id: string | number) {
  return `${category.charAt(0).toUpperCase() + category.slice(1)} Produto ${id}`;
}

export function getProductPrice(id: string | number) {
  return (100 + (Number(id) - 1) * 30).toFixed(2);
}