"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Now accepting live 'posts' directly from the page
export default function BlogGrid({ posts }: { posts: any[] }) {
  return (
    <div className="blog-grid">
      {posts.map((post, idx) => {
        const isEven = idx % 2 === 0;
        const initialX = isEven ? -50 : 50;

        return (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, x: initialX, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="blog-card group flex flex-col justify-between"
          >
            <div className="flex flex-col gap-5">
              {/* Image Thumbnail */}
              <Link href={`/blog/${post.slug}`} className="blog-card-img-box">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="blog-card-img"
                />
              </Link>

              {/* Category Badge & Reading Time */}
              <div className="blog-card-meta-row">
                <span className="blog-badge">{post.category}</span>
                <span>{post.readTime}</span>
              </div>

              {/* Article Title */}
              <Link href={`/blog/${post.slug}`}>
                <h2 className="blog-card-title">{post.title}</h2>
              </Link>

              {/* Excerpt */}
              <p className="blog-card-excerpt">{post.excerpt}</p>
            </div>

            {/* Publication Date & Read More Link */}
            <div className="blog-card-footer">
              <span className="text-sm text-gray-500 font-inter">
                {post.date}
              </span>
              <Link href={`/blog/${post.slug}`} className="blog-card-read-link">
                Read article
                <span className="transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
