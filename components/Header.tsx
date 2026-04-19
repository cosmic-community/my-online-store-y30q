import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🛍️</span>
            <span className="font-bold text-xl text-gray-900 group-hover:text-brand-600 transition-colors">
              My Online Store
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
              Products
            </Link>
            <Link href="/categories" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
              Categories
            </Link>
            <Link href="/reviews" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
              Reviews
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}