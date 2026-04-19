import Link from 'next/link'
import { Product } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ProductCard({ product }: { product: Product }) {
  const name = getMetafieldValue(product.metadata?.product_name) || product.title
  const price = product.metadata?.price
  const salePrice = product.metadata?.sale_price
  const image = product.metadata?.main_image
  const inventoryStatus = getMetafieldValue(product.metadata?.inventory_status)
  const featured = product.metadata?.featured

  const hasDiscount = salePrice && price && salePrice < price

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          {image ? (
            <img
              src={`${image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              width={300}
              height={300}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">🛍️</div>
          )}
          {featured && (
            <span className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
              ⭐ Featured
            </span>
          )}
          {hasDiscount && (
            <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              SALE
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-brand-600 transition-colors">
            {name}
          </h3>
          {inventoryStatus && (
            <p className="text-xs text-gray-500 mb-2">{inventoryStatus}</p>
          )}
          <div className="flex items-center gap-2">
            {hasDiscount ? (
              <>
                <span className="text-lg font-bold text-red-600">${salePrice}</span>
                <span className="text-sm text-gray-400 line-through">${price}</span>
              </>
            ) : (
              price && <span className="text-lg font-bold text-gray-900">${price}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}