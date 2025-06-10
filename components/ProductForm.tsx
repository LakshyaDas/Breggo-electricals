'use client';

import { useState } from 'react';
import { db } from '@/lib/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

export default function ProductForm() {
  const [form, setForm] = useState({ name: '', description: '', price: '', image: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const price = parseFloat(form.price);
    if (!form.name || !form.description || !form.image || isNaN(price)) {
      alert("Please fill all fields correctly.");
      return;
    }

    try {
      await addDoc(collection(db, 'products'), {
        ...form,
        price
      });
      setForm({ name: '', description: '', price: '', image: '' });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="input" />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" className="input mt-2" />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" className="input mt-2" />
      <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="input mt-2" />
      <button onClick={handleSubmit} className="btn mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
    </div>
  );
}
