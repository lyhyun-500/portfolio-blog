// 텍스트 유틸리티 함수

/**
 * 마침표로 끝나는 문장 뒤에 줄바꿈을 추가합니다.
 * @param text 원본 텍스트
 * @returns 줄바꿈이 추가된 텍스트
 */
export function addLineBreakAfterPeriod(text: string): string {
  // 마침표 뒤에 공백이 있으면 줄바꿈으로 변경, 없으면 줄바꿈 추가
  return text.replace(/\.(\s+)/g, '.\n').replace(/\.([^\n])/g, '.\n$1')
}
