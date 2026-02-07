export const metadata = {
  title: '소개',
  description: '저를 소개합니다.',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-stone-100">
        소개
      </h1>
      <div className="mt-8 space-y-6 text-stone-300">
        <p className="leading-relaxed">
          안녕하세요. 이 블로그는 Next.js로 만든 포트폴리오용 블로그입니다.
          여기에 자신의 한 줄 소개, 기술 스택, 관심 분야 등을 자유롭게 채워 넣으시면 됩니다.
        </p>
        <section>
          <h2 className="mb-3 text-xl font-semibold text-stone-100">기술 스택</h2>
          <ul className="list-inside list-disc space-y-1 text-stone-400">
            <li>Next.js · React · TypeScript</li>
            <li>Tailwind CSS</li>
            <li>그 외 사용해 보신 도구들</li>
          </ul>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-semibold text-stone-100">연락처</h2>
          <p className="text-stone-400">
            GitHub, 이메일, SNS 링크 등을 여기에 추가해 보세요.
          </p>
        </section>
      </div>
    </div>
  )
}
