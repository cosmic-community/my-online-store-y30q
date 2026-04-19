export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
    category_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Variant extends CosmicObject {
  type: 'variants';
  metadata: {
    variant_name?: string;
    sku?: string;
    price_adjustment?: number;
    stock_quantity?: number;
  };
}

export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    product_name?: string;
    description?: string;
    price?: number;
    sale_price?: number;
    sku?: string;
    inventory_status?: string;
    stock_quantity?: number;
    main_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    category?: Category;
    variants?: Variant[];
    featured?: boolean;
  };
}

export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    customer_name?: string;
    rating?: number;
    review_title?: string;
    review_content?: string;
    product?: Product;
    verified_purchase?: boolean;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}