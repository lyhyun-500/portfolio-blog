'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminAuthPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // 환경 변수에서 관리자 비밀번호 가져오기 (클라이언트에서는 NEXT_PUBLIC_ 접두사 필요)
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123' // 기본값 (개발용)

    if (password === adminPassword) {
      // 인증 성공 - 세션 스토리지에 토큰 저장
      const token = btoa(`admin_${Date.now()}`)
      sessionStorage.setItem('admin_token', token)
      sessionStorage.setItem('admin_authenticated', 'true')
      router.push('/admin')
    } else {
      setError('비밀번호가 올바르지 않습니다.')
    }
  }

  return (
    <div className="min-h-screen bg-[#0f0f11] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-8">
          <h1 className="text-2xl font-bold text-stone-100 mb-2">관리자 인증</h1>
          <p className="text-sm text-stone-400 mb-6">
            관리자 페이지에 접근하려면 비밀번호를 입력하세요.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-stone-300 mb-2">
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-stone-800 border border-stone-700 rounded-lg text-stone-100 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="비밀번호를 입력하세요"
                autoFocus
              />
            </div>

            {error && (
              <div className="text-sm text-red-400 bg-red-900/20 border border-red-800 rounded-lg p-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors font-medium"
            >
              로그인
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-stone-800">
            <p className="text-xs text-stone-500">
              💡 개발 환경에서는 기본 비밀번호가 설정되어 있습니다.
              <br />
              프로덕션 환경에서는 환경 변수로 비밀번호를 설정하세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
