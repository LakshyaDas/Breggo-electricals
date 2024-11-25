import ProductDetailClient from './ProductDetailClient';
import { products } from '@/lib/data';

// Define the Product Type
interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

export async function generateStaticParams() {
  return products.map((product: Product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p: Product) => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        </div>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
}
