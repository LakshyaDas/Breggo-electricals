'use client';

import { motion } from 'framer-motion';
import { Flame, Users, Star, Phone } from 'lucide-react';
import ReviewForm from '@/components/ReviewForm';
import Reviews from '@/components/Reviews';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent animate-pulse"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center z-10"
        >
          
          <h1 className="text-5xl font-bold text-white mb-6">Brighter Moments Begin Here</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Leading the way in innovative electrical solutions with quality products and exceptional service.
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Explore Our Products
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <Flame className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">4+ Years</h3>
              <p className="text-gray-600">Of Excellence</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-gray-600">Products</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">About Breggo Electricals</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Breggo Electricals, we are committed to providing top-quality electrical products
              and solutions that illuminate homes and businesses across the nation. With over a
              decade of experience, we have established ourselves as a trusted name in the
              electrical industry.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="gap-2">
                <Phone className="w-4 h-4" />
                <Link href="tel:+91 7489789842">Contact Us </Link>
              </Button>
              <Link href="/products">
                <Button className="bg-blue-600 hover:bg-blue-700">View Products</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <Reviews />
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Share Your Experience</h3>
            <ReviewForm />
          </div>
        </div>
      </section>
    </main>
  );
}


(Error Code 503 Service Unavailable)