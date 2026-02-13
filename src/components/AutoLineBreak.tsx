'use client'

import { useEffect } from 'react'

/**
 * 마침표 뒤에 자동으로 줄바꿈을 추가하는 전역 컴포넌트
 * 성능 최적화: requestIdleCallback과 배치 처리 사용
 */
export function AutoLineBreak() {
  useEffect(() => {
    const processedNodes = new WeakSet<Text>()
    let isProcessing = false
    
    // 초기 처리 시작 전에 콘텐츠 숨기기
    const mainContent = document.querySelector('main')
    if (mainContent) {
      mainContent.style.visibility = 'hidden'
      isProcessing = true
    }
    
    const hasLineBreakAfterPeriod = (textNode: Text): boolean => {
      // 마침표 뒤에 이미 <br> 태그가 있는지 확인
      const parent = textNode.parentNode
      if (!parent) return false
      
      const text = textNode.textContent || ''
      const periodIndex = text.lastIndexOf('.')
      
      if (periodIndex === -1) return false
      
      // 마침표 뒤의 텍스트가 공백만 있는지 확인
      const afterPeriod = text.slice(periodIndex + 1).trim()
      if (afterPeriod.length > 0) return false
      
      // 마침표 뒤에 <br> 태그가 있는지 확인
      const nextSibling = textNode.nextSibling
      if (nextSibling && nextSibling.nodeType === Node.ELEMENT_NODE) {
        const element = nextSibling as Element
        if (element.tagName.toLowerCase() === 'br') {
          return true
        }
      }
      
      return false
    }

    const processTextNode = (textNode: Text) => {
      // 이미 처리된 노드는 건너뛰기
      if (processedNodes.has(textNode)) return
      
      // 마침표 뒤에 이미 <br> 태그가 있으면 처리하지 않음
      if (hasLineBreakAfterPeriod(textNode)) {
        processedNodes.add(textNode)
        return
      }
      
      const text = textNode.textContent || ''
      // 숫자 뒤의 마침표는 제외 (예: 3.14, 2024.01)
      // 마침표 뒤에 따옴표(")가 오는 경우는 제외 (예: "데이터는 거짓말하지 않는다 — 수치로 설득.")
      // 이미 줄바꿈이 있는 경우는 제외
      const processed = text.replace(/([^0-9\n])\.(\s*)(?!\n)/g, (match, p1, p2, offset, string) => {
        // 마침표 뒤에 따옴표가 오는지 확인
        const afterPeriod = string.slice(offset + match.length)
        const trimmedAfter = afterPeriod.trim()
        // 따옴표(") 또는 닫는 따옴표(")가 바로 오는 경우 줄바꿈 추가하지 않음
        if (trimmedAfter.startsWith('"') || trimmedAfter.startsWith('"')) {
          return match
        }
        return `${p1}.\n${p2}`
      })
      
      if (processed !== text && textNode.parentNode) {
        processedNodes.add(textNode)
        const parent = textNode.parentNode
        const parts = processed.split('\n')
        const fragment = document.createDocumentFragment()
        
        parts.forEach((part, index) => {
          if (part) {
            fragment.appendChild(document.createTextNode(part))
          }
          if (index < parts.length - 1) {
            fragment.appendChild(document.createElement('br'))
          }
        })
        
        parent.replaceChild(fragment, textNode)
      }
    }

    const processElement = (element: Element): Text[] => {
      // code, pre, script, style 태그는 제외
      const tagName = element.tagName.toLowerCase()
      if (['code', 'pre', 'script', 'style', 'noscript'].includes(tagName)) {
        return []
      }

      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            const parent = node.parentElement
            if (!parent) return NodeFilter.FILTER_REJECT
            
            const parentTagName = parent.tagName.toLowerCase()
            if (['code', 'pre', 'script', 'style', 'noscript'].includes(parentTagName)) {
              return NodeFilter.FILTER_REJECT
            }
            
            // 이미 처리된 노드는 제외
            if (processedNodes.has(node as Text)) {
              return NodeFilter.FILTER_REJECT
            }
            return NodeFilter.FILTER_ACCEPT
          }
        }
      )

      const textNodes: Text[] = []
      let node
      while (node = walker.nextNode()) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
          textNodes.push(node as Text)
        }
      }

      return textNodes
    }

    // 배치 처리 함수 (한 번에 최대 50개 노드 처리)
    const processBatch = (textNodes: Text[], startIndex: number = 0, isInitial: boolean = false, onComplete?: () => void) => {
      const batchSize = 50
      const endIndex = Math.min(startIndex + batchSize, textNodes.length)
      
      // 역순으로 처리하여 DOM 변경이 인덱스에 영향을 주지 않도록 함
      for (let i = endIndex - 1; i >= startIndex; i--) {
        processTextNode(textNodes[i])
      }
      
      if (endIndex < textNodes.length) {
        // 초기 로딩 시에는 더 빠르게 처리 (깜빡임 방지)
        if (isInitial) {
          requestAnimationFrame(() => processBatch(textNodes, endIndex, true, onComplete))
        } else {
          // 다음 배치를 requestIdleCallback으로 처리
          if (typeof requestIdleCallback !== 'undefined') {
            requestIdleCallback(() => processBatch(textNodes, endIndex, false, onComplete), { timeout: 1000 })
          } else {
            setTimeout(() => processBatch(textNodes, endIndex, false, onComplete), 0)
          }
        }
      } else {
        // 모든 배치 처리 완료
        if (onComplete) {
          onComplete()
        }
      }
    }

    // 초기 처리
    const processAll = () => {
      const mainContent = document.querySelector('main')
      if (!mainContent) {
        isProcessing = false
        return
      }
      
      const textNodes = processElement(mainContent)
      if (textNodes.length > 0) {
        // 초기 로딩 시에는 즉시 처리 (깜빡임 방지)
        const showContent = () => {
          if (isProcessing) {
            mainContent.style.visibility = 'visible'
            isProcessing = false
          }
        }
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            processBatch(textNodes, 0, true, showContent)
          })
        })
      } else {
        // 처리할 텍스트가 없으면 즉시 표시
        if (isProcessing) {
          mainContent.style.visibility = 'visible'
          isProcessing = false
        }
      }
    }

    // MutationObserver로 동적 콘텐츠 처리 (debounce 적용)
    let mutationTimeout: NodeJS.Timeout | null = null
    const observer = new MutationObserver((mutations) => {
      if (mutationTimeout) {
        clearTimeout(mutationTimeout)
      }
      
      mutationTimeout = setTimeout(() => {
        const textNodes: Text[] = []
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            // <br> 태그는 무시
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element
              if (element.tagName.toLowerCase() === 'br') {
                return
              }
              textNodes.push(...processElement(element))
            } else if (node.nodeType === Node.TEXT_NODE) {
              const textNode = node as Text
              // 이미 처리된 노드이거나, 이전 형제가 <br>인 경우는 제외
              if (processedNodes.has(textNode)) return
              
              const prevSibling = textNode.previousSibling
              if (prevSibling && prevSibling.nodeType === Node.ELEMENT_NODE) {
                const prevElement = prevSibling as Element
                if (prevElement.tagName.toLowerCase() === 'br') {
                  // <br> 뒤의 텍스트는 우리가 생성한 것이므로 처리하지 않음
                  processedNodes.add(textNode)
                  return
                }
              }
              
              textNodes.push(textNode)
            }
          })
        })
        
        if (textNodes.length > 0) {
          // 동적 콘텐츠는 즉시 처리 (탭 전환 등)
          requestAnimationFrame(() => processBatch(textNodes, 0, false))
        }
      }, 100) // 100ms debounce (더 빠른 반응)
    })

    // 초기 처리: 즉시 실행 (지연 없음)
    // requestAnimationFrame을 사용하여 렌더링 후 처리
    const initTimer = requestAnimationFrame(() => {
      processAll()
      
      // main 요소 관찰 시작
      const mainContent = document.querySelector('main')
      if (mainContent) {
        observer.observe(mainContent, {
          childList: true,
          subtree: true,
          characterData: false
        })
      }
    })
    
    // 타임아웃 안전장치: 1초 후에는 무조건 표시
    const safetyTimer = setTimeout(() => {
      const mainContent = document.querySelector('main')
      if (mainContent && isProcessing) {
        mainContent.style.visibility = 'visible'
        isProcessing = false
      }
    }, 1000)

    return () => {
      cancelAnimationFrame(initTimer)
      clearTimeout(safetyTimer)
      if (mutationTimeout) {
        clearTimeout(mutationTimeout)
      }
      observer.disconnect()
      // cleanup 시 visibility 복원
      const mainContent = document.querySelector('main')
      if (mainContent) {
        mainContent.style.visibility = 'visible'
      }
    }
  }, [])

  return null
}
