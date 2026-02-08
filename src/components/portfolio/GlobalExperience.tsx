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
            <li>• 회원별 열람한 작품에 대한 키워드 및 작품 장르 데이터 구조 설계를 위해 작품별 장르 AI로 추출</li>
            <li>• 한국 본사 기획 → 일본팀 피드백 반영</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-accent">배운 점</h3>
          <div className="space-y-4 sm:space-y-5">
            <div className="rounded-lg border border-stone-800 bg-stone-900/50 p-3 sm:p-4">
              <h4 className="mb-2 text-sm sm:text-base font-semibold text-stone-200">
                &quot;세그먼트를 나누면 다른 문제가 보인다.&quot;
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                일본 유저를 단일 집단으로 보면 첫결제율 6~7%로 평범하지만, 가입 경로·첫 열람 장르·경과일수로 쪼개면 2%~15%까지 갈렸다. 
                이 발견이 세그먼트별 프로모션 타이밍 차등화의 근거가 됐다.
              </p>
            </div>
            <div className="rounded-lg border border-stone-800 bg-stone-900/50 p-3 sm:p-4">
              <h4 className="mb-2 text-sm sm:text-base font-semibold text-stone-200">
                &quot;변수 하나가 특정 세그먼트만 흔든다.&quot;
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                결제 후 지급되는 리워드 변경 시 전체 수치는 미미했지만, 특정 결제는 재결제자에 대한 세그먼트 수치만 바꿨다. 
                전체 평균만 봤으면 &quot;효과 없음&quot;으로 판단할 뻔했다. 
                이후 모든 기능 출시 때 세그먼트별 영향도를 먼저 확인하는 원칙이 생겼다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
