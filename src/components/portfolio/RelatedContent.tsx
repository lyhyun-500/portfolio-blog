import Link from 'next/link'
import { posts } from '@/lib/posts'
import { projects } from '@/lib/profile'

export function RelatedContent() {
  const latestPosts = posts.slice(0, 3)
  const featuredProject = projects[0]

  return (
    <section
      id="related"
      className="rounded-3xl border border-stone-800 bg-stone-900/30 p-8 sm:p-10"
    >
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-stone-100">
          관련 콘텐츠
        </h2>
        <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
          Related
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Featured 프로젝트 (큰 카드) */}
        {featuredProject && (
          <Link
            href={featuredProject.href}
            className="group col-span-full overflow-hidden rounded-2xl border border-stone-800 bg-gradient-to-br from-accent/10 to-transparent p-6 transition-all hover:border-accent/30 sm:col-span-2"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Featured Project
            </span>
            <h3 className="mt-2 text-xl font-semibold text-stone-100 group-hover:text-accent">
              {featuredProject.title}
            </h3>
            <p className="mt-2 text-sm text-stone-400">
              {featuredProject.description}
            </p>
            {featuredProject.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-stone-800/80 px-2 py-0.5 text-xs text-stone-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        )}

        {/* 블로그 글 카드들 */}
        {latestPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/50 p-5 transition-all hover:border-stone-600"
          >
            <span className="text-xs text-stone-500">{post.date}</span>
            <h3 className="mt-2 font-semibold text-stone-100 group-hover:text-accent">
              {post.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-stone-400">
              {post.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/blog"
          className="text-sm font-medium text-accent transition-colors hover:underline"
        >
          모든 글 보기 →
        </Link>
      </div>
    </section>
  )
}
