'use client';

import { useEffect, useState } from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, deleteDoc, doc, onSnapshot, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const auth = getAuth();
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  // Check auth and admin status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        router.replace('/admin/login');
        return;
      }
      setUser(firebaseUser);
      const adminDoc = await getDoc(doc(db, 'admins', firebaseUser.uid));
      if (!adminDoc.exists()) {
        alert('You are not authorized');
        await signOut(auth);
        router.replace('/admin/login');
        return;
      }
      setIsAdmin(true);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Realtime product listener
  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'products'), (snapshot) => {
      const productList: Product[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      setProducts(productList);
    });
    return () => unsub();
  }, []);

  const handleLogout = () => {
    signOut(auth);
    router.push('/admin/login');
  };

  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.description || !newProduct.price || !newProduct.image) {
      alert('Fill all fields');
      return;
    }
    try {
      await addDoc(collection(db, 'products'), newProduct);
      setNewProduct({ name: '', description: '', price: '', image: '' });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this product?')) {
      await deleteDoc(doc(db, 'products', id));
    }
  };

  if (loading) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={handleLogout} variant="outline">Logout</Button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
        <input
          className="border w-full p-2 mb-2"
          placeholder="Name"
          value={newProduct.name}
          onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          className="border w-full p-2 mb-2"
          placeholder="Description"
          value={newProduct.description}
          onChange={e => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
          className="border w-full p-2 mb-2"
          placeholder="Price"
          type="number"
          value={newProduct.price}
          onChange={e => setNewProduct({ ...newProduct, price: String(e.target.value) })}
        />
        <input
          className="border w-full p-2 mb-2"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={e => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <Button onClick={handleAddProduct}>Add Product</Button>
      </div>

      <h2 className="text-xl font-semibold mb-4">Existing Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map(product => (
          <div key={product.id} className="p-4 bg-white shadow rounded">
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-2" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="text-gray-700 font-semibold">₹ {product.price}</p>
            <Button variant="destructive" className="mt-2" onClick={() => handleDelete(product.id)}>
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
