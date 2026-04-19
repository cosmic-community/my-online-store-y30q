// app/products/[slug]/page.tsx
import { getProduct, getReviewsForProduct, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReviewCard from '@/components/ReviewCard'
import StarRating from '@/components/StarRating'

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) notFound()

  const reviews = await getReviewsForProduct(product.id)

  const name = getMetafieldValue(product.metadata?.product_name) || product.title
  const description = getMetafieldValue(product.metadata?.description)
  const price = product.metadata?.price
  const salePrice = product.metadata?.sale_price
  const sku = getMetafieldValue(product.metadata?.sku)
  const inventoryStatus = getMetafieldValue(product.metadata?.inventory_status)
  const stockQuantity = product.metadata?.stock_quantity
  const mainImage = product.metadata?.main_image
  const gallery = product.metadata?.gallery || []
  const category = product.metadata?.category
  const variants = product.metadata?.variants || []

  const hasDiscount = salePrice && price && salePrice < price
  const avgRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + (Number(r.metadata?.rating) || 0), 0) / reviews.length
    : 0

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="text-sm mb-6 text-gray-500">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-brand-600">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="aspect-square bg-white rounded-2xl overflow-hidden border border-gray-200 mb-4">
            {mainImage ? (
              <img
                src={`${mainImage.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
                alt={name}
                className="w-full h-full object-cover"
                width={600}
                height={600}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-9xl">🛍️</div>
            )}
          </div>
          {gallery.length > 0 && (
            <div className="grid grid-cols-4 gap-3">
              {gallery.slice(0, 4).map((img, idx) => (
                <div key={idx} className="aspect-square bg-white rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={`${img.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                    alt={`${name} ${idx + 1}`}
                    className="w-full h-full object-cover"
                    width={150}
                    height={150}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {category && (
            <Link
              href={`/categories/${category.slug}`}
              className="inline-block text-sm text-brand-600 hover:text-brand-700 font-medium mb-2"
            >
              {category.title}
            </Link>
          )}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{name}</h1>

          {reviews.length > 0 && (
            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={avgRating} />
              <span className="text-sm text-gray-500">({reviews.length} reviews)</span>
            </div>
          )}

          <div className="flex items-center gap-3 mb-6">
            {hasDiscount ? (
              <>
                <span className="text-4xl font-bold text-red-600">${salePrice}</span>
                <span className="text-xl text-gray-400 line-through">${price}</span>
                <span className="bg-red-100 text-red-700 text-sm font-bold px-2 py-1 rounded">SALE</span>
              </>
            ) : (
              price && <span className="text-4xl font-bold text-gray-900">${price}</span>
            )}
          </div>

          {description && (
            <div className="prose prose-gray mb-6">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          )}

          <div className="bg-gray-50 rounded-xl p-5 mb-6 space-y-2 text-sm">
            {sku && (
              <div className="flex justify-between">
                <span className="text-gray-600">SKU:</span>
                <span className="font-medium text-gray-900">{sku}</span>
              </div>
            )}
            {inventoryStatus && (
              <div className="flex justify-between">
                <span className="text-gray-600">Availability:</span>
                <span className="font-medium text-gray-900">{inventoryStatus}</span>
              </div>
            )}
            {stockQuantity !== undefined && stockQuantity !== null && (
              <div className="flex justify-between">
                <span className="text-gray-600">In Stock:</span>
                <span className="font-medium text-gray-900">{stockQuantity} units</span>
              </div>
            )}
          </div>

          {variants.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Available Variants</h3>
              <div className="flex flex-wrap gap-2">
                {variants.map((variant) => (
                  <div key={variant.id} className="border border-gray-200 bg-white rounded-lg px-4 py-2 text-sm">
                    <div className="font-medium text-gray-900">
                      {getMetafieldValue(variant.metadata?.variant_name) || variant.title}
                    </div>
                    {variant.metadata?.price_adjustment !== undefined && variant.metadata?.price_adjustment !== 0 && (
                      <div className="text-xs text-gray-500">
                        {Number(variant.metadata.price_adjustment) > 0 ? '+' : ''}${variant.metadata.price_adjustment}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 rounded-xl transition-colors shadow-lg">
            Add to Cart
          </button>
        </div>
      </div>

      {reviews.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews ({reviews.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}