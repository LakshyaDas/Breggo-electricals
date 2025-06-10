import { NextResponse } from 'next/server';
import { db } from '@/lib/firebaseConfig';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

export async function POST(request: Request) {
  try {
    const { name, email, rating, comment } = await request.json();

    const docRef = await addDoc(collection(db, 'reviews'), {
      name,
      email,
      rating,
      comment,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error) {
    console.error('Firebase Insert Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit review' }, { status: 500 });
  }
}

// ✅ Add this GET handler to fetch reviews
export async function GET() {
  try {
    const reviewsRef = collection(db, 'reviews');
    const q = query(reviewsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);

    const reviews = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}
