import ProductDetailClient from './ProductDetailClient';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';



interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const docRef = doc(db, 'products', params.id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        </div>
      </div>
    );
  }

  const product: Product = {
    id: docSnap.id,
    ...docSnap.data(),
  } as Product;

  return <ProductDetailClient product={product} />;
}
