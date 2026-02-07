export interface Experience {
  company: string
  role: string
  period: string
  description?: string
  tags?: string[]
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'design'
}

export interface Project {
  title: string
  description: string
  href: string
  tags?: string[]
  external?: boolean
}

export const profile = {
  name: '홍길동',
  tagline: '개발과 성장을 기록하는 프론트엔드 개발자',
  shortBio: '사용자 경험을 중시하고, 지속적으로 학습하는 개발자입니다.',
  email: 'hello@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
}

export const experiences: Experience[] = [
  {
    company: 'A사',
    role: '시니어 프론트엔드 개발자',
    period: '2023.01 ~ 현재',
    description: '웹 서비스 프론트엔드 아키텍처 설계 및 팀 리딩',
    tags: ['React', 'TypeScript', 'Next.js'],
  },
  {
    company: 'B사',
    role: '프론트엔드 개발자',
    period: '2021.03 ~ 2022.12',
    description: '대시보드 및 사용자 인터페이스 개발',
    tags: ['React', 'Redux', 'Node.js'],
  },
  {
    company: 'C사',
    role: '주니어 개발자',
    period: '2019.07 ~ 2021.02',
    description: '웹 서비스 기능 개발 및 유지보수',
    tags: ['JavaScript', 'jQuery', 'Vue.js'],
  },
]

export const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'Figma', category: 'design' },
]

export const projects: Project[] = [
  {
    title: '포트폴리오 블로그',
    description: 'Next.js 14 App Router 기반 블로그',
    href: '/blog/welcome',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: '프로젝트 B',
    description: '프로젝트에 대한 짧은 설명',
    href: '#',
    tags: ['React', 'Node.js'],
    external: false,
  },
]
