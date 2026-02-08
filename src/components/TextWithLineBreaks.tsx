'use client'

import { addLineBreakAfterPeriod } from '@/lib/text-utils'

interface TextWithLineBreaksProps {
  children: string
  className?: string
}

/**
 * 마침표 뒤에 자동으로 줄바꿈을 추가하는 텍스트 컴포넌트
 */
export function TextWithLineBreaks({ children, className = '' }: TextWithLineBreaksProps) {
  const processed = addLineBreakAfterPeriod(children)
  
  return (
    <span className={`whitespace-pre-line ${className}`}>
      {processed}
    </span>
  )
}
