# 포트폴리오 블로그

Next.js 14(App Router) + TypeScript + Tailwind CSS로 만든 포트폴리오용 블로그입니다.

## 기능

- **홈**: 소개 문구 + 최근 글 3개
- **블로그**: 전체 글 목록 (날짜순)
- **글 상세**: 제목, 날짜, 카테고리, 마크다운 스타일 본문
- **소개**: 자기소개 페이지 (내용 수정 가능)

## 실행 방법

1. Node.js가 설치되어 있어야 합니다. ([nodejs.org](https://nodejs.org)에서 LTS 버전 설치)

2. 의존성 설치 및 개발 서버 실행:

```bash
cd portfolio-blog
npm install
npm run dev
```

3. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 글 추가하기

`src/lib/posts.ts`에 새 객체를 추가하면 됩니다.

```ts
{
  slug: 'url에-쓰일-이름',
  title: '글 제목',
  description: '한 줄 요약',
  date: 'YYYY-MM-DD',
  category: '카테고리명',  // 선택
  content: `
본문 내용.
## 소제목
- 리스트
**굵게** \`코드\`
  `.trim(),
}
```

## 커스터마이징

- **레이아웃/네비**: `src/components/Header.tsx`, `Footer.tsx`
- **스타일**: `tailwind.config.ts`, `src/app/globals.css`
- **메타/사이트명**: `src/app/layout.tsx`의 `metadata`
- **소개 페이지**: `src/app/about/page.tsx`

## 빌드

```bash
npm run build
npm start
```
