export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🛍️</span>
              <span className="font-bold text-xl text-white">My Online Store</span>
            </div>
            <p className="text-sm text-gray-400">
              Quality products at great prices, delivered with care.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/products" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="/categories" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="/reviews" className="hover:text-white transition-colors">Reviews</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">About</h3>
            <p className="text-sm text-gray-400">
              We're committed to providing the best shopping experience with quality products.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} My Online Store. All rights reserved.
        </div>
      </div>
    </footer>
  )
}