'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PlanPage() {
  const router = useRouter();
  const [hasHost, setHasHost] = useState<string>('');
  const [planType, setPlanType] = useState<string>('');
  const [customPlan, setCustomPlan] = useState('');
  const [selectedAIPlan, setSelectedAIPlan] = useState<string>('');

  const aiRecommendations = [
    {
      id: 'basic',
      title: '베이직 플랜',
      description: '간단한 생일 축하 분위기',
      items: ['케이크', '간단한 음식', '기본 풍선 장식', '배경 음악'],
      price: '15만원대'
    },
    {
      id: 'premium',
      title: '프리미엄 플랜',
      description: '특별한 날을 더욱 특별하게',
      items: ['프리미엄 케이크', '뷔페 음식', '벌룬 아치', '포토부스', '전문 진행자'],
      price: '35만원대'
    },
    {
      id: 'luxury',
      title: '럭셔리 플랜',
      description: '잊지 못할 최고급 파티',
      items: ['맞춤 케이크', '고급 케이터링', '플로리스트 장식', '포토부스 + 영상', '전문 진행자', '라이브 공연'],
      price: '70만원대'
    }
  ];

  const isFormValid = hasHost !== '' && (planType === 'custom' ? customPlan.trim() !== '' : selectedAIPlan !== '');

  const handleNext = () => {
    console.log({
      hasHost,
      planType,
      customPlan: planType === 'custom' ? customPlan : '',
      selectedPlan: planType === 'ai' ? selectedAIPlan : ''
    });
    router.push('/estimate');
  };

  return (
    <div className="mobile-container bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <header className="bg-white px-5 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">TioParty</h1>
            <p className="text-sm text-gray-600">플랜 설정</p>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white px-5 py-3 border-b">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span>2단계</span>
          <span>진행자 및 플랜 옵션</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '40%' }}></div>
        </div>
      </div>

      {/* Main Form */}
      <main className="px-5 py-6 space-y-6">
        {/* 진행자 유무 */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            진행자가 필요하신가요? <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: 'yes', label: '네, 필요해요', icon: '👨‍💼' },
              { value: 'no', label: '아니요, 괜찮아요', icon: '🙅' }
            ].map(option => (
              <button
                key={option.value}
                onClick={() => setHasHost(option.value)}
                className={`py-4 px-4 rounded-lg border-2 font-medium transition-all ${
                  hasHost === option.value
                    ? 'border-purple-600 bg-purple-50 text-purple-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-1">{option.icon}</div>
                <div className="text-sm">{option.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 플랜 선택 방식 */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            플랜을 어떻게 준비하시겠어요? <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: 'ai', label: 'AI 추천 받기', icon: '🤖' },
              { value: 'custom', label: '직접 입력하기', icon: '✍️' }
            ].map(option => (
              <button
                key={option.value}
                onClick={() => {
                  setPlanType(option.value);
                  setSelectedAIPlan('');
                  setCustomPlan('');
                }}
                className={`py-4 px-4 rounded-lg border-2 font-medium transition-all ${
                  planType === option.value
                    ? 'border-purple-600 bg-purple-50 text-purple-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-1">{option.icon}</div>
                <div className="text-sm">{option.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* AI 추천 플랜 */}
        {planType === 'ai' && (
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">
              추천 플랜 <span className="text-xs text-gray-500">(생일파티 기준)</span>
            </h3>
            {aiRecommendations.map(plan => (
              <div
                key={plan.id}
                onClick={() => setSelectedAIPlan(plan.id)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedAIPlan === plan.id
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">{plan.title}</h4>
                    <p className="text-xs text-gray-600">{plan.description}</p>
                  </div>
                  <span className="text-sm font-bold text-purple-600">{plan.price}</span>
                </div>
                <ul className="space-y-1 mt-3">
                  {plan.items.map((item, idx) => (
                    <li key={idx} className="text-xs text-gray-700 flex items-center gap-2">
                      <span className="text-purple-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-blue-800">
                💡 플랜은 나중에 조정 가능하며, 견적 단계에서 항목별 추가/제거가 가능합니다.
              </p>
            </div>
          </div>
        )}

        {/* 커스텀 플랜 입력 */}
        {planType === 'custom' && (
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              원하시는 플랜을 자유롭게 작성해주세요 <span className="text-red-500">*</span>
            </label>
            <textarea
              value={customPlan}
              onChange={(e) => setCustomPlan(e.target.value)}
              placeholder="예: 케이크, 음식, 장식, 포토부스 등 원하는 내용을 자유롭게 입력해주세요."
              className="w-full h-32 py-3 px-4 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:border-purple-600 focus:outline-none resize-none"
            />
            <p className="text-xs text-gray-500 mt-2">
              {customPlan.length}/500자
            </p>
          </div>
        )}
      </main>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-5 py-4 max-w-[375px] mx-auto">
        <button
          onClick={handleNext}
          disabled={!isFormValid}
          className={`w-full py-4 rounded-lg font-bold text-white transition-all ${
            isFormValid
              ? 'bg-purple-600 hover:bg-purple-700 active:bg-purple-800'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          다음 단계로
        </button>
      </div>
    </div>
  );
}
