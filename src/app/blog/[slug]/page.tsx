import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllSlugs } from '@/lib/posts'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: '글을 찾을 수 없습니다' }
  return {
    title: `${post.title} | 포트폴리오 블로그`,
    description: post.description,
  }
}

function renderContent(content: string) {
  return content.split('\n').map((line, i) => {
    if (line.startsWith('## ')) {
      return <h2 key={i}>{line.replace(/^## /, '')}</h2>
    }
    if (line.startsWith('### ')) {
      return <h3 key={i}>{line.replace(/^### /, '')}</h3>
    }
    if (line.startsWith('- ')) {
      return (
        <ul key={i} className="mb-4 list-disc pl-6">
          <li>{line.replace(/^- /, '')}</li>
        </ul>
      )
    }
    if (line.startsWith('1. ') || /^\d+\. /.test(line)) {
      return (
        <ol key={i} className="mb-4 list-decimal pl-6">
          <li>{line.replace(/^\d+\. /, '')}</li>
        </ol>
      )
    }
    if (line.startsWith('```')) {
      return null
    }
    if (line.trim() === '') {
      return <br key={i} />
    }
    // 인라인 **bold**와 `code` 처리
    const parts = line.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
    const rendered = parts.map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={j}>{part.slice(2, -2)}</strong>
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={j} className="rounded bg-stone-800 px-1.5 py-0.5 text-accent text-sm">
            {part.slice(1, -1)}
          </code>
        )
      }
      return part
    })
    return <p key={i}>{rendered}</p>
  })
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm text-stone-500 transition-colors hover:text-accent"
      >
        ← 블로그 목록
      </Link>
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
          <time dateTime={post.date}>{post.date}</time>
          {post.category && (
            <span className="rounded bg-stone-800 px-2 py-0.5 text-stone-400">
              {post.category}
            </span>
          )}
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-100">
          {post.title}
        </h1>
        <p className="mt-3 text-stone-400">{post.description}</p>
      </header>
      <div className="prose-custom">
        {renderContent(post.content)}
      </div>
    </article>
  )
}
