import { Review } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

export default function ReviewCard({ review }: { review: Review }) {
  const customerName = getMetafieldValue(review.metadata?.customer_name) || 'Anonymous'
  const rating = review.metadata?.rating || 0
  const title = getMetafieldValue(review.metadata?.review_title)
  const content = getMetafieldValue(review.metadata?.review_content)
  const verified = review.metadata?.verified_purchase
  const product = review.metadata?.product

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-gray-900">{customerName}</span>
            {verified && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                ✓ Verified
              </span>
            )}
          </div>
          <StarRating rating={Number(rating)} />
        </div>
      </div>
      {title && <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>}
      {content && <p className="text-gray-700 text-sm leading-relaxed">{content}</p>}
      {product && (
        <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
          Review for: <span className="font-medium text-gray-700">{product.title}</span>
        </div>
      )}
    </div>
  )
}