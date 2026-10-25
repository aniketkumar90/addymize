'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Calendar, Clock, User } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { BLOG_POSTS_DATA } from '@/lib/constants';
import { getBlogs } from '@/lib/api';

export default function Blog({ onReadArticle }) {
  const [posts, setPosts] = useState(BLOG_POSTS_DATA);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadBlogs() {
      try {
        setLoading(true);
        const res = await getBlogs();
        if (res && res.success && res.data && res.data.length > 0) {
          setPosts(res.data);
        }
      } catch (e) {
        // Fallback to constants
      } finally {
        setLoading(false);
      }
    }
    loadBlogs();
  }, []);

  return (
    <section id="blog" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white"
          >
            Latest Thinking & Architecture Notes
          </motion.h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {posts.slice(0, 3).map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              className="flex"
            >
              <GlassCard
                glow={idx === 1 ? 'cyan' : 'none'}
                className="p-6 flex flex-col justify-between w-full group overflow-hidden border-white/10"
              >
                <div>
                  {/* Category Pill and Read Time */}
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] text-amber-300 border border-white/10 font-semibold text-[11px]">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-[11px] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime || '5 min read'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-slate-200">
                        <User className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-medium text-slate-300">
                        {typeof post.author === 'string' ? post.author : post.author?.name || 'Trackolab Architect'}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400">
                      {post.date || 'March 2026'}
                    </span>
                  </div>

                  <Button
                    variant="glass"
                    size="sm"
                    className="w-full text-xs font-semibold group/btn"
                    onClick={() => onReadArticle && onReadArticle(post)}
                    icon={ArrowUpRight}
                    iconPosition="right"
                  >
                    Read Article
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
