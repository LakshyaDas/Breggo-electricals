'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
  date: string;
}

interface ReviewContextType {
  reviews: Review[];
  addReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export function ReviewProvider({ children }: { children: ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: 'Lakshya Das',
      rating: 5,
      review: 'Excellent products and outstanding service! The quality is unmatched.',
      date: '2024-02-28',
    },
    {
      id: 2,
      name: 'Vishal',
      rating: 5,
      review: 'Very professional team and high-quality electrical products.',
      date: '2024-02-27',
    },
    {
      id: 3,
      name: 'Hritik Vishwakarma',
      rating: 4,
      review: 'Great experience working with Breggo Electricals. Would recommend!',
      date: '2024-02-26',
    },
  ]);

  const addReview = (newReview: Omit<Review, 'id' | 'date'>) => {
    setReviews(prev => [
      {
        ...newReview,
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
      },
      ...prev,
    ]);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
}

export function useReviews() {
  const context = useContext(ReviewContext);
  if (context === undefined) {
    throw new Error('useReviews must be used within a ReviewProvider');
  }
  return context;
}