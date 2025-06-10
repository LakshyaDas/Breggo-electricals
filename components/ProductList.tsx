'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebaseConfig';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { Product } from '@/lib/types';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'products'), (snapshot) => {
      setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product)));
    });
    return () => unsub();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await deleteDoc(doc(db, 'products', id));
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow bg-white">
            <img src={product.image} alt={product.name} className="h-32 object-contain mb-2" />
            <h3 className="font-bold">{product.name}</h3>
            <p>{product.description}</p>
            <p className="text-sm text-gray-600">₹{product.price}</p>
            <button onClick={() => handleDelete(product.id)} className="text-red-600 mt-2 underline">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
