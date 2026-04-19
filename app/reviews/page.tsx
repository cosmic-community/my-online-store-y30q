import { getReviews } from '@/lib/cosmic'
import ReviewCard from '@/components/ReviewCard'

export default async function ReviewsPage() {
  const reviews = await getReviews()

  const avgRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + (Number(r.metadata?.rating) || 0), 0) / reviews.length
    : 0

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Customer Reviews</h1>
        <p className="text-gray-600 mb-4">See what our customers are saying</p>
        {reviews.length > 0 && (
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-2">
            <span className="text-2xl">⭐</span>
            <span className="font-bold text-gray-900">{avgRating.toFixed(1)}</span>
            <span className="text-gray-600 text-sm">average from {reviews.length} reviews</span>
          </div>
        )}
      </div>

      {reviews.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No reviews available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  )
}