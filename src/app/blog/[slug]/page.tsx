import { notFound } from "next/navigation"
import { blogPosts } from "@/config/blog-config"
import { BlogClient } from "./client"

// Generate static params for static export
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2)

  return <BlogClient post={post} relatedPosts={relatedPosts} />
}
