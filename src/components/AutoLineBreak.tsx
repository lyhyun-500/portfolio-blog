'use client'

import { useEffect } from 'react'

/**
 * 마침표 뒤에 자동으로 줄바꿈을 추가하는 전역 컴포넌트
 * 성능 최적화: requestIdleCallback과 배치 처리 사용
 */
export function AutoLineBreak() {
  useEffect(() => {
    const processedNodes = new WeakSet<Text>()
    
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
      // 이미 줄바꿈이 있는 경우는 제외
      const processed = text.replace(/([^0-9\n])\.(\s*)(?!\n)/g, '$1.\n$2')
      
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
    const processBatch = (textNodes: Text[], startIndex: number = 0) => {
      const batchSize = 50
      const endIndex = Math.min(startIndex + batchSize, textNodes.length)
      
      // 역순으로 처리하여 DOM 변경이 인덱스에 영향을 주지 않도록 함
      for (let i = endIndex - 1; i >= startIndex; i--) {
        processTextNode(textNodes[i])
      }
      
      if (endIndex < textNodes.length) {
        // 다음 배치를 requestIdleCallback으로 처리
        if (typeof requestIdleCallback !== 'undefined') {
          requestIdleCallback(() => processBatch(textNodes, endIndex), { timeout: 1000 })
        } else {
          setTimeout(() => processBatch(textNodes, endIndex), 0)
        }
      }
    }

    // 초기 처리
    const processAll = () => {
      const mainContent = document.querySelector('main')
      if (!mainContent) return
      
      const textNodes = processElement(mainContent)
      if (textNodes.length > 0) {
        if (typeof requestIdleCallback !== 'undefined') {
          requestIdleCallback(() => processBatch(textNodes), { timeout: 2000 })
        } else {
          setTimeout(() => processBatch(textNodes), 100)
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
          if (typeof requestIdleCallback !== 'undefined') {
            requestIdleCallback(() => processBatch(textNodes), { timeout: 1000 })
          } else {
            setTimeout(() => processBatch(textNodes), 0)
          }
        }
      }, 300) // 300ms debounce
    })

    // 초기 처리 지연
    const timer = setTimeout(() => {
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
    }, 200)

    return () => {
      clearTimeout(timer)
      if (mutationTimeout) {
        clearTimeout(mutationTimeout)
      }
      observer.disconnect()
    }
  }, [])

  return null
}
