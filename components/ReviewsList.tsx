'use client';

import { useEffect, useState } from 'react';

type Review = {
  id: string;
  name: string;
  email?: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export default function ReviewsList() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('/api/reviews');
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.error('Failed to fetch reviews', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <p className="text-center">Loading reviews...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-6">
      <h2 className="text-2xl font-bold text-center">User Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-center text-muted-foreground">No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="p-4 rounded-xl shadow bg-white dark:bg-zinc-900">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{review.name}</h3>
              <span className="text-yellow-500 font-medium">⭐ {review.rating}</span>
            </div>
            <p className="mt-2">{review.comment}</p>
            <p className="text-xs text-gray-400 mt-1">
              {new Date(review.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
