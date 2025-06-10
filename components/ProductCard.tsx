'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';


interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const handleWhatsApp = () => {
    const message = "Hello, I am interested in your services."; // Replace with your message
    const linkId = "AHUEZ6C72BVML1"; // Extracted from the provided link
    window.open(`https://wa.me/message/${linkId}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+917489789842';
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <CardHeader>
            <div className="h-48 w-full overflow-hidden rounded-t-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain bg-white"
              />
            </div>
            <CardTitle className="pt-8 ">{product.name}</CardTitle>
            <CardDescription >{product.price}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 ">{product.description}</p>
          </CardContent>
        </Link>
        <CardFooter className="flex gap-2">
          <Button onClick={handleWhatsApp} className="flex-1 gap-2">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
          <Button onClick={handleCall} variant="outline" className="flex-1 gap-2">
            <Phone className="w-4 h-4" />
            Call
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
