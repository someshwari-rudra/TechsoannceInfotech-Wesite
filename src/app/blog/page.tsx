"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Tag, ArrowRight, BookOpen } from "lucide-react"
import { blogPosts, blogCategories } from "@/config/blog-config"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-deep to-brand-dark text-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cyan/20 backdrop-blur-sm border border-brand-cyan/30 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Insights & Articles
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Our Blog
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Explore articles on technology, development, business, and best practices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${selectedCategory === category
                    ? 'bg-gradient-to-r from-brand-cyan to-[#29619e] text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} delay={index * 0.1} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No blog posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  )
}

// Blog Card Component
function BlogCard({ post, delay }: { post: any, delay: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group h-full"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-brand-cyan/50 hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
          {/* Featured Image */}
          <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-4 py-2 bg-brand-cyan text-white text-sm font-semibold rounded-lg shadow-lg">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-cyan transition-colors line-clamp-2">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag: string) => (
                <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Read More */}
            <div className="flex items-center gap-2 text-brand-cyan font-semibold group-hover:gap-3 transition-all">
              <span>Read More</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
