'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useReviews } from '@/context/ReviewContext';

export default function Reviews() {
  const { reviews } = useReviews();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviews.map((review, index) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center mb-4">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 mb-4">{review.review}</p>
          <div className="flex justify-between items-center">
            <p className="font-semibold">{review.name}</p>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}