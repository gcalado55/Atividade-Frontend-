import { useParams } from "react-router-dom";

export function ProductDetails() {
  const { id, name } = useParams<{ id: string; name: string }>();
  
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <p>Product Name: {name}</p>
    </div>
  );
  }