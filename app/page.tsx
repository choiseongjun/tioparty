'use client';

import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="mobile-container bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-5 py-12">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
            TioParty
          </h1>
          <p className="text-center text-sm text-gray-600">
            파티 준비의 모든 것
          </p>
        </div>

        {/* Main Visual */}
        <div className="mb-10 text-center">
          <div className="text-7xl mb-4 animate-bounce">
            🎉
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            완벽한 파티를<br />
            3분만에 준비하세요
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            생일파티부터 송년회까지<br />
            AI가 추천하는 맞춤 플랜으로<br />
            스트레스 없이 준비하세요
          </p>
        </div>

        {/* Features */}
        <div className="w-full space-y-3 mb-8">
          {[
            { icon: '🤖', title: 'AI 맞춤 플랜', desc: '행사에 딱 맞는 추천' },
            { icon: '💰', title: '투명한 견적', desc: '항목별 가격 확인' },
            { icon: '🎨', title: '디자인 제작', desc: '초대장부터 굿즈까지' }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 shadow-sm border border-gray-100"
            >
              <div className="text-4xl">{feature.icon}</div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-sm">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => router.push('/form')}
          className="w-full py-4 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 active:from-purple-800 active:to-pink-800 shadow-lg transition-all transform hover:scale-105"
        >
          무료 견적 받기
        </button>

        {/* Trust Badge */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            ✓ 이메일 수집 없음 • ✓ 3분 소요 • ✓ 100% 무료
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-5 py-4 text-center text-xs text-gray-500 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <p>© 2025 TioParty. All rights reserved.</p>
      </footer>
    </div>
  );
}
