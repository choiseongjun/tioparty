'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EstimatePage() {
  const router = useRouter();
  const [budget, setBudget] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [showEstimate, setShowEstimate] = useState(false);

  const similarEvents = [
    { type: '생일파티 (30명)', range: '30~50만원', avg: '40만원' },
    { type: '송년회 (50명)', range: '80~120만원', avg: '100만원' },
    { type: '회식 (20명)', range: '40~70만원', avg: '55만원' }
  ];

  const estimateBreakdown = {
    venue: { name: '장소 대관', price: 150000, included: true },
    food: { name: '음식/케이터링', price: 200000, included: true },
    decoration: { name: '장식', price: 80000, included: true },
    host: { name: '진행자', price: 150000, included: false },
    photo: { name: '포토부스', price: 120000, included: false },
    gifts: { name: '굿즈/선물', price: 100000, included: false }
  };

  const [selectedItems, setSelectedItems] = useState<string[]>([
    'venue', 'food', 'decoration'
  ]);

  const toggleItem = (key: string) => {
    if (selectedItems.includes(key)) {
      setSelectedItems(selectedItems.filter(item => item !== key));
    } else {
      setSelectedItems([...selectedItems, key]);
    }
  };

  const totalEstimate = Object.entries(estimateBreakdown)
    .filter(([key]) => selectedItems.includes(key))
    .reduce((sum, [, item]) => sum + item.price, 0);

  const budgetNum = parseInt(budget) || 0;
  const isOverBudget = budgetNum > 0 && totalEstimate > budgetNum;
  const isUnderBudget = budgetNum > 0 && totalEstimate < budgetNum * 0.7;

  const handleCalculate = () => {
    if (budget && guestCount) {
      setShowEstimate(true);
    }
  };

  const isFormValid = budget !== '' && guestCount !== '';

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
            <p className="text-sm text-gray-600">견적 확인</p>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white px-5 py-3 border-b">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span>3단계</span>
          <span>예산 및 견적</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '60%' }}></div>
        </div>
      </div>

      {/* Main Form */}
      <main className="px-5 py-6 space-y-6">
        {/* 예산 입력 */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            예산을 알려주세요 <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="0"
              className="w-full py-3 px-4 pr-12 rounded-lg border-2 border-gray-200 bg-white text-gray-900 font-medium focus:border-purple-600 focus:outline-none text-right"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 font-medium">
              만원
            </span>
          </div>
        </div>

        {/* 인원 입력 */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            예상 인원 <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="number"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              placeholder="0"
              className="w-full py-3 px-4 pr-12 rounded-lg border-2 border-gray-200 bg-white text-gray-900 font-medium focus:border-purple-600 focus:outline-none text-right"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 font-medium">
              명
            </span>
          </div>
        </div>

        {/* 견적 계산 버튼 */}
        <button
          onClick={handleCalculate}
          disabled={!isFormValid}
          className={`w-full py-3 rounded-lg font-semibold transition-all ${
            isFormValid
              ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          견적 확인하기
        </button>

        {/* 유사 행사 견적 참고 */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            💰 유사 행사 견적 참고
          </h3>
          <div className="space-y-2">
            {similarEvents.map((event, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b last:border-0">
                <span className="text-sm text-gray-700">{event.type}</span>
                <div className="text-right">
                  <div className="text-xs text-gray-500">{event.range}</div>
                  <div className="text-sm font-bold text-gray-900">{event.avg}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 견적 내역 */}
        {showEstimate && (
          <div className="bg-white rounded-lg p-4 border-2 border-purple-600">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-gray-900">
                견적 내역
              </h3>
              {budget && (
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                  예산: {parseInt(budget).toLocaleString()}만원
                </span>
              )}
            </div>

            <div className="space-y-3 mb-4">
              {Object.entries(estimateBreakdown).map(([key, item]) => (
                <div
                  key={key}
                  onClick={() => toggleItem(key)}
                  className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedItems.includes(key)
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(key)}
                      onChange={() => {}}
                      className="w-4 h-4 text-purple-600 rounded"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    {(item.price / 10000).toFixed(0)}만원
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-base font-bold text-gray-900">총 견적</span>
                <span className="text-2xl font-bold text-purple-600">
                  {(totalEstimate / 10000).toFixed(0)}만원
                </span>
              </div>
              {guestCount && (
                <div className="text-xs text-gray-500 text-right">
                  1인당 약 {Math.round(totalEstimate / parseInt(guestCount) / 1000)}천원
                </div>
              )}
            </div>

            {/* 예산 알림 */}
            {isOverBudget && (
              <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-xs text-red-800">
                  ⚠️ 예산을 {((totalEstimate - budgetNum) / 10000).toFixed(0)}만원 초과했습니다.
                  항목을 조정해보세요.
                </p>
              </div>
            )}
            {isUnderBudget && (
              <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-xs text-green-800">
                  ✨ 예산 내에서 {((budgetNum - totalEstimate) / 10000).toFixed(0)}만원의 여유가 있습니다.
                  추가 옵션을 선택해보세요!
                </p>
              </div>
            )}
          </div>
        )}

        {/* 안심 포인트 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">
            🛡️ TioParty 안심 포인트
          </h4>
          <ul className="space-y-1 text-xs text-blue-800">
            <li>• 투명한 항목별 가격 공개</li>
            <li>• 계약 후 추가 비용 없음</li>
            <li>• 환불 보장 정책</li>
            <li>• 실제 이용 고객 후기 확인 가능</li>
          </ul>
        </div>
      </main>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-5 py-4 max-w-[375px] mx-auto">
        <button
          onClick={() => router.push('/design')}
          disabled={!showEstimate}
          className={`w-full py-4 rounded-lg font-bold text-white transition-all ${
            showEstimate
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
