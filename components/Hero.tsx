import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🛍️</div>
        <div className="absolute bottom-10 right-10 text-9xl">⭐</div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Welcome to<br />My Online Store
          </h1>
          <p className="text-xl text-brand-100 mb-8 leading-relaxed">
            Discover quality products, read real customer reviews, and shop with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="bg-white text-brand-700 px-6 py-3 rounded-lg font-semibold hover:bg-brand-50 transition-colors shadow-lg"
            >
              Shop Products
            </Link>
            <Link
              href="/categories"
              className="bg-brand-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-900 transition-colors border border-brand-500"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}