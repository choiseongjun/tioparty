'use client';

import { useRouter } from 'next/navigation';

export default function SummaryPage() {
  const router = useRouter();

  // 임시 데이터 (실제로는 전역 상태관리나 Context로 관리)
  const summary = {
    partyInfo: {
      type: '단체',
      category: '생일파티',
      region: '강남구',
      date: '2025-11-20',
      time: '18:00',
      eventType: '실내',
      guestCount: 30
    },
    plan: {
      hasHost: true,
      planType: '프리미엄 플랜'
    },
    estimate: {
      venue: 15,
      food: 20,
      decoration: 8,
      host: 15,
      photo: 12,
      total: 70
    },
    design: {
      invitation: '엘레강트',
      logo: '미니멀',
      banner: '기본 현수막',
      goods: ['스티커', '배지'],
      designCost: 7
    }
  };

  const grandTotal = summary.estimate.total + summary.design.designCost;

  const handleConfirm = () => {
    alert('견적서가 이메일로 발송되었습니다!');
    router.push('/');
  };

  return (
    <div className="mobile-container bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={() => router.back()} className="text-white hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">최종 견적서</h1>
        </div>
        <p className="text-sm text-purple-100">모든 준비가 완료되었습니다!</p>
      </header>

      {/* Main Content */}
      <main className="px-5 py-6 space-y-4">
        {/* 행사 정보 */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            🎉 행사 정보
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">유형</span>
              <span className="font-medium text-gray-900">{summary.partyInfo.type} - {summary.partyInfo.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">지역</span>
              <span className="font-medium text-gray-900">{summary.partyInfo.region}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">일시</span>
              <span className="font-medium text-gray-900">{summary.partyInfo.date} {summary.partyInfo.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">인원</span>
              <span className="font-medium text-gray-900">{summary.partyInfo.guestCount}명</span>
            </div>
          </div>
        </div>

        {/* 플랜 정보 */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            📋 선택한 플랜
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">진행자</span>
              <span className="font-medium text-gray-900">{summary.plan.hasHost ? '있음' : '없음'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">플랜</span>
              <span className="font-medium text-gray-900">{summary.plan.planType}</span>
            </div>
          </div>
        </div>

        {/* 견적 내역 */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            💰 기본 견적
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">장소 대관</span>
              <span className="font-medium text-gray-900">{summary.estimate.venue}만원</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">음식/케이터링</span>
              <span className="font-medium text-gray-900">{summary.estimate.food}만원</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">장식</span>
              <span className="font-medium text-gray-900">{summary.estimate.decoration}만원</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">진행자</span>
              <span className="font-medium text-gray-900">{summary.estimate.host}만원</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">포토부스</span>
              <span className="font-medium text-gray-900">{summary.estimate.photo}만원</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between">
              <span className="font-semibold text-gray-900">소계</span>
              <span className="font-bold text-purple-600">{summary.estimate.total}만원</span>
            </div>
          </div>
        </div>

        {/* 디자인 추가 비용 */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            🎨 디자인 & 굿즈
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">초대장</span>
              <span className="font-medium text-gray-900">{summary.design.invitation}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">로고</span>
              <span className="font-medium text-gray-900">{summary.design.logo}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">현수막</span>
              <span className="font-medium text-gray-900">{summary.design.banner}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">굿즈</span>
              <span className="font-medium text-gray-900">{summary.design.goods.join(', ')}</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between">
              <span className="font-semibold text-gray-900">디자인 비용</span>
              <span className="font-bold text-purple-600">{summary.design.designCost}만원</span>
            </div>
          </div>
        </div>

        {/* 최종 금액 */}
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-5 shadow-lg text-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-bold">최종 견적 금액</span>
            <span className="text-3xl font-bold">{grandTotal}만원</span>
          </div>
          <p className="text-sm text-purple-100">
            1인당 약 {Math.round(grandTotal * 10000 / summary.partyInfo.guestCount / 1000)}천원
          </p>
        </div>

        {/* 다음 단계 안내 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">
            📧 다음 단계
          </h4>
          <ul className="space-y-1 text-xs text-blue-800">
            <li>• 견적서를 이메일로 받으실 수 있습니다</li>
            <li>• 담당자가 24시간 내 연락드립니다</li>
            <li>• 상담 후 세부 조정이 가능합니다</li>
            <li>• 계약금은 총액의 20%입니다</li>
          </ul>
        </div>
      </main>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-5 py-4 max-w-[375px] mx-auto space-y-2">
        <button
          onClick={handleConfirm}
          className="w-full py-4 rounded-lg font-bold text-white bg-purple-600 hover:bg-purple-700 active:bg-purple-800 transition-all"
        >
          견적서 받기
        </button>
        <button
          onClick={() => router.push('/')}
          className="w-full py-3 rounded-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
        >
          처음부터 다시하기
        </button>
      </div>
    </div>
  );
}
