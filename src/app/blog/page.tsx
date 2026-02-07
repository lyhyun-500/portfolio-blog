import Link from 'next/link'
import { posts } from '@/lib/posts'

export const metadata = {
  title: '블로그',
  description: '개발과 성장을 기록한 글 목록',
}

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-stone-100">
          블로그
        </h1>
        <p className="mt-2 text-stone-400">
          배운 것과 만든 것을 정리한 글입니다.
        </p>
      </header>

      <ul className="space-y-8">
        {sorted.map((post) => (
          <li key={post.slug}>
            <article>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-lg border border-stone-800 bg-surface-light/30 p-6 transition-colors hover:border-stone-600 hover:bg-surface-light"
              >
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <time className="text-stone-500" dateTime={post.date}>
                    {post.date}
                  </time>
                  {post.category && (
                    <span className="rounded bg-stone-800 px-2 py-0.5 text-stone-400">
                      {post.category}
                    </span>
                  )}
                </div>
                <h2 className="mt-2 text-xl font-semibold text-stone-100 group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-2 text-stone-400">{post.description}</p>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
