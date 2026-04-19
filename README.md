# My Online Store

![App Preview](https://imgix.cosmicjs.com/76c97440-3c45-11f1-9a36-6beee623c5b3-autopilot-photo-1524592094714-0f0654e20314-1776640446801.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern Next.js e-commerce storefront powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🛍️ Complete product catalog with detailed pages
- 🏷️ Category browsing
- ⭐ Customer reviews with star ratings
- 🎨 Product variants
- 🔥 Featured products section
- 📱 Fully responsive

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69e561671e803e708f6ac87b&clone_repository=69e562641e803e708f6ac91d)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for an online store with products (including images, pricing, description, and inventory status), product categories, and customer reviews.
> 
> User instructions: An e-commerce store with products, categories, variants, and customer reviews"

### Code Generation Prompt

> Build a Next.js application for an online business called "My Online Store". The content is managed in Cosmic CMS with the following object types: categories, variants, products, reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: An e-commerce store with products, categories, variants, and customer reviews

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK

## Getting Started

### Prerequisites
- Bun or Node.js 18+
- Cosmic account with bucket set up

### Installation

```bash
bun install
```

Create a `.env.local` file with your Cosmic credentials:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Run the development server:

```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch products with relationships
const { objects } = await cosmic.objects
  .find({ type: 'products' })
  .depth(1)
```

## Cosmic CMS Integration

This app integrates with Cosmic for categories, products, variants, and reviews.

## Deployment Options

Deploy to Vercel or Netlify. Set environment variables in your hosting platform.
<!-- README_END -->