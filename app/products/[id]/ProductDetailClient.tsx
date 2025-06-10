'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}


export default function ProductDetailClient({ product }: { product: Product }) {
  const handleWhatsApp = () => {
    const message = "Hello, I am interested in your services."; // Replace with your message
    const linkId = "AHUEZ6C72BVML1"; // Extracted from the provided link
    window.open(`https://wa.me/message/${linkId}?text=${encodeURIComponent(message)}`, '_blank');
    
  };

  const handleCall = () => {
    window.location.href = 'tel:+917489789842';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <Link href="/products">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="h-[400px] overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="p-8"
            >
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-2xl font-semibold text-blue-600 mb-6">
                {product.price}
              </p>
              <p className="text-gray-600 mb-8">{product.description}</p>

              <div className="space-y-4">
                <Button onClick={handleWhatsApp} className="w-full gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Contact via WhatsApp
                </Button>
                <Button onClick={handleCall} variant="outline" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
