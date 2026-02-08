/**
 * 텍스트 처리 유틸리티 함수
 */

/**
 * 마침표(.) 뒤에 줄바꿈을 추가하는 함수
 * 단, 숫자 뒤의 마침표(예: 3.14, 2024.01)는 제외
 */
export function addLineBreakAfterPeriod(text: string): string {
  if (!text || typeof text !== 'string') return text
  
  // 숫자 뒤의 마침표는 제외하고, 일반 마침표 뒤에 줄바꿈 추가
  // 패턴: 숫자가 아닌 문자 뒤의 마침표 뒤에 줄바꿈
  // 단, 이미 줄바꿈이 있는 경우는 제외
  return text.replace(/([^0-9\n])\.(\s*)(?!\n)/g, '$1.\n$2')
}
