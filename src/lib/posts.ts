export interface Post {
  slug: string
  title: string
  description: string
  date: string
  category?: string
  content: string
}

export const posts: Post[] = [
  {
    slug: 'welcome',
    title: '블로그에 오신 것을 환영합니다',
    description: 'Next.js로 만든 포트폴리오 블로그의 첫 번째 글입니다.',
    date: '2025-02-07',
    category: '일상',
    content: `
이곳은 제가 배운 것과 만든 것을 기록하는 공간입니다.

## 이 블로그에서 할 일

- **개발 경험** 정리
- **사이드 프로젝트** 소개
- **학습 노트** 공유

## 기술 스택

이 블로그는 **Next.js 14**, **TypeScript**, **Tailwind CSS**로 만들어졌습니다.

앞으로 다양한 주제로 글을 써 나가겠습니다. 감사합니다.
    `.trim(),
  },
  {
    slug: 'nextjs-app-router',
    title: 'Next.js App Router 맛보기',
    description: 'App Router의 기본 개념과 파일 기반 라우팅을 소개합니다.',
    date: '2025-02-06',
    category: '개발',
    content: `
Next.js 13부터 도입된 **App Router**는 \`app\` 디렉터리 기반의 새로운 라우팅 방식입니다.

## 주요 특징

1. **파일 기반 라우팅**: 폴더 구조가 그대로 URL이 됩니다.
2. **레이아웃**: \`layout.tsx\`로 공통 UI를 감쌉니다.
3. **서버 컴포넌트**: 기본이 서버 컴포넌트라 번들 크기를 줄일 수 있습니다.

## 폴더 예시

\`\`\`
app/
  layout.tsx    → 전체 레이아웃
  page.tsx      → /
  blog/
    page.tsx    → /blog
    [slug]/
      page.tsx  → /blog/:slug
\`\`\`

직접 사용해 보시면 직관적으로 느껴질 거예요.
    `.trim(),
  },
  {
    slug: 'portfolio-tips',
    title: '포트폴리오를 잘 쓰는 법',
    description: '개발자 포트폴리오를 효과적으로 구성하는 팁을 공유합니다.',
    date: '2025-02-05',
    category: '커리어',
    content: `
좋은 포트폴리오는 **무엇을 했는지**보다 **어떻게 생각하고 해결했는지**를 보여줍니다.

## 추천 구성

1. **소개**: 한 줄로 자신을 설명
2. **프로젝트**: 기술 스택, 역할, 결과(가능하면 수치)
3. **블로그/에세이**: 학습 정리나 회고

## 피할 것

- 너무 많은 프로젝트 나열 (대표 3~5개가 적당)
- 스크린샷만 있고 설명이 없는 경우
- 링크가 깨진 채로 두기

꾸준히 업데이트하는 습관이 중요합니다.
    `.trim(),
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug)
}
