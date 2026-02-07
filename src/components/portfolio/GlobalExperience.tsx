export function GlobalExperience() {
  return (
    <section
      id="global"
      className="rounded-2xl sm:rounded-3xl border border-stone-800 bg-stone-900/30 p-4 sm:p-6 md:p-8 lg:p-10"
    >
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-100">
          글로벌 시장 경험 (일본)
        </h2>
        <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
          10페이지
        </span>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <div>
          <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-accent">일본 웹툰 시장 특수성</h3>
          <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-stone-400">
            <li>• 만화 대국, 웹툰은 신흥 시장 / K-웹툰 역수출 증가 추세</li>
            <li>• 현지 경쟁사: Piccoma, LINEマンガ 등</li>
            <li>• 우리 플랫폼: 업계 루키급, 성인 특화로 틈새 공략</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-accent">일본 시장 맞춤 기획</h3>
          <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-stone-400">
            <li>• 우→좌 읽기 방향 전환 (일본 만화 관습)</li>
            <li>• 결제 방식: 편의점 결제 추가</li>
            <li>• 장르 선호도: BL 비중 고려 큐레이션</li>
            <li>• 한국 본사 기획 → 일본팀 피드백 반영</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-accent">배운 점</h3>
          <p className="text-sm sm:text-base text-stone-400 leading-relaxed">
            글로벌 시장은 단순 번역이 아님. 문화, 결제, UX 모두 현지화 필수.
            후발주자는 차별화 전략 필수. 사업 판단은 데이터만으로 안 됨.
          </p>
        </div>
      </div>
    </section>
  )
}
