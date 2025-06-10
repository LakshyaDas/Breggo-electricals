'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import {
  collection,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string; // renamed from "review"
  createdAt: string;
}

interface ReviewContextType {
  reviews: Review[];
  showAll: boolean;
  toggleShowAll: () => void;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export function ReviewProvider({ children }: { children: ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, snapshot => {
      const fetchedReviews: Review[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Review, 'id'>),
      }));
      setReviews(fetchedReviews);
    });

    return () => unsubscribe();
  }, []);

  const toggleShowAll = () => setShowAll(prev => !prev);

  return (
    <ReviewContext.Provider value={{ reviews, showAll, toggleShowAll }}>
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
