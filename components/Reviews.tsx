'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useReviews } from '@/context/ReviewContext';
import { Button } from '@/components/ui/button';

export default function Reviews() {
  const { reviews, showAll, toggleShowAll } = useReviews();
  const visibleReviews = showAll ? reviews : reviews.slice(0, 4);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleReviews.map((review, index) => (
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
            <p className="text-gray-600 mb-4">{review.comment}</p>
            <div className="flex justify-between items-center">
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-gray-500">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {reviews.length > 4 && (
        <div className="flex justify-center">
          <Button onClick={toggleShowAll} variant="outline">
            {showAll ? 'Show Less' : 'See All Reviews'}
          </Button>
        </div>
      )}
    </div>
  );
}
