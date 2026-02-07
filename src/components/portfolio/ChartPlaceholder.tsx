// 차트·시각화 영역 placeholder — 실제 이미지/차트로 교체할 구역

interface ChartPlaceholderProps {
  title: string
  description?: string
  aspect?: 'video' | 'square' | 'wide'
}

export function ChartPlaceholder({ title, description, aspect = 'wide' }: ChartPlaceholderProps) {
  const aspectClass =
    aspect === 'video'
      ? 'aspect-video'
      : aspect === 'square'
        ? 'aspect-square'
        : 'aspect-[2/1]'

  return (
    <div className="my-6">
      <div
        className={`w-full rounded-xl border-2 border-dashed border-stone-700 bg-stone-900/50 ${aspectClass} flex flex-col items-center justify-center p-6`}
      >
        <p className="text-sm font-medium text-stone-500">[ 차트 영역 ]</p>
        <p className="mt-1 text-center text-stone-400">{title}</p>
        {description && (
          <p className="mt-2 text-xs text-stone-600 text-center max-w-sm">{description}</p>
        )}
      </div>
    </div>
  )
}
