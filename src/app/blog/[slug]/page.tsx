"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Clock, Tag, Share2, ArrowLeft, ArrowRight } from "lucide-react"
import { blogPosts } from "@/config/blog-config"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-deep to-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        {/* Featured Image Background */}
        <div className="absolute inset-0">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-deep/90 to-brand-dark" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 py-16 md:py-20">
          {/* Back Button */}
          <Link href="/blog">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-brand-cyan hover:text-cyan-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Blog</span>
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span className="px-4 py-2 bg-brand-cyan/20 backdrop-blur-sm border border-brand-cyan/30 rounded-lg text-sm font-semibold">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-cyan/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">{post.author.name.charAt(0)}</span>
                </div>
                <span className="font-medium">{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h1:text-4xl prose-h1:mb-6
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-brand-cyan
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-brand-cyan prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-code:text-brand-cyan prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
            "
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.article>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                  <Tag className="w-4 h-4" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center gap-4">
              <Share2 className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 font-semibold">Share this article:</span>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="rounded-lg">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="rounded-lg">
                  Twitter
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-brand-cyan/50 hover:shadow-xl transition-all duration-300 p-6 h-full">
                    <span className="inline-block px-3 py-1 bg-brand-cyan/10 text-brand-cyan text-sm font-semibold rounded-lg mb-4">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-brand-cyan transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-brand-cyan font-semibold">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-cyan to-cyan-500 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Want help building something similar?
            </h2>
            
            <p className="text-xl text-white/90 mb-8">
              Our team specializes in building scalable, production-ready applications.
            </p>
            
            <Link href="/contact">
              <Button className="px-10 py-6 bg-white hover:bg-gray-100 text-brand-cyan font-bold text-lg rounded-xl shadow-2xl transition-all duration-200 hover:scale-105">
                Contact Our Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
