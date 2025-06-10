import ReviewForm from '@/components/ReviewForm';
import ReviewsList from '@/components/ReviewsList';

export default function Page() {
  return (
    <div className="p-6">
        <h2 className="text-2xl font-bold text-center p-10">Write a Review</h2>
      <ReviewForm />
      <div className='p-10'></div>
      <ReviewsList />
      
      
    </div>
  );
}
