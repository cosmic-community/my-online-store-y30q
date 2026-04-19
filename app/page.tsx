import { getFeaturedProducts, getCategories, getReviews, getProducts } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import ReviewCard from '@/components/ReviewCard'
import Link from 'next/link'

export default async function HomePage() {
  const [featuredProducts, categories, reviews, allProducts] = await Promise.all([
    getFeaturedProducts(),
    getCategories(),
    getReviews(),
    getProducts(),
  ])

  const displayProducts = featuredProducts.length > 0 ? featuredProducts : allProducts.slice(0, 4)
  const topReviews = reviews.slice(0, 3)

  return (
    <div>
      <Hero />

      {displayProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {featuredProducts.length > 0 ? '⭐ Featured Products' : '🛍️ Our Products'}
              </h2>
              <p className="text-gray-600">Handpicked favorites for you</p>
            </div>
            <Link href="/products" className="text-brand-600 hover:text-brand-700 font-medium text-sm">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {categories.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">🏷️ Shop by Category</h2>
                <p className="text-gray-600">Find exactly what you're looking for</p>
              </div>
              <Link href="/categories" className="text-brand-600 hover:text-brand-700 font-medium text-sm">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(0, 3).map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}

      {topReviews.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">⭐ What Customers Say</h2>
              <p className="text-gray-600">Real reviews from real customers</p>
            </div>
            <Link href="/reviews" className="text-brand-600 hover:text-brand-700 font-medium text-sm">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}