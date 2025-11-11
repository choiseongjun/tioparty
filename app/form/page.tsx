'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    partyType: '',
    partyCategory: '',
    partyCategoryCustom: '',
    region: '',
    date: '',
    startTime: '',
    endTime: '',
    eventType: '',
    guestCount: ''
  });

  // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오기
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // 10분 단위 시간 옵션 생성
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 10) {
        const h = String(hour).padStart(2, '0');
        const m = String(minute).padStart(2, '0');
        times.push(`${h}:${m}`);
      }
    }
    return times;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    console.log('Form data:', formData);
    router.push('/plan');
  };

  const isFormValid = formData.partyType && formData.partyCategory &&
                      (formData.partyCategory !== '기타' || formData.partyCategoryCustom.trim() !== '') &&
                      formData.region && formData.date &&
                      formData.startTime && formData.endTime && formData.eventType &&
                      (formData.partyType === '개인' || formData.guestCount !== '');

  return (
    <div className="mobile-container bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white px-5 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-gray-900">TioParty</h1>
        <p className="text-sm text-gray-600 mt-1">행사 준비를 시작해볼까요?</p>
      </header>

      {/* Progress Bar */}
      <div className="bg-white px-5 py-3 border-b">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span>1단계</span>
          <span>행사 정보 입력</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '20%' }}></div>
        </div>
      </div>

      {/* Main Form */}
      <main className="px-5 py-6 space-y-6">
        {/* 개인/단체 선택 */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            행사 유형 <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {['개인', '단체'].map(type => (
              <button
                key={type}
                onClick={() => {
                  handleInputChange('partyType', type);
                  if (type === '개인') {
                    handleInputChange('guestCount', '');
                  }
                }}
                className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                  formData.partyType === type
                    ? 'border-purple-600 bg-purple-50 text-purple-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* 단체 선택 시 인원수 입력 */}
          {formData.partyType === '단체' && (
            <div className="mt-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                예상 인원 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={formData.guestCount}
                  onChange={(e) => handleInputChange('guestCount', e.target.value)}
                  placeholder="0"
                  className="w-full py-3 px-4 pr-12 rounded-lg border-2 border-gray-200 bg-white text-gray-900 font-medium focus:border-purple-600 focus:outline-none text-right"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 font-medium">
                  명
                </span>
              </div>
            </div>
          )}
        </div>

        {/* 행사 카테고리 */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            어떤 행사인가요? <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {['생일파티', '송년회', '회식', '기타'].map(category => (
              <button
                key={category}
                onClick={() => {
                  handleInputChange('partyCategory', category);
                  if (category !== '기타') {
                    handleInputChange('partyCategoryCustom', '');
                  }
                }}
                className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                  formData.partyCategory === category
                    ? 'border-purple-600 bg-purple-50 text-purple-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 기타 선택 시 직접 입력 */}
          {formData.partyCategory === '기타' && (
            <div className="mt-3">
              <input
                type="text"
                value={formData.partyCategoryCustom}
                onChange={(e) => handleInputChange('partyCategoryCustom', e.target.value)}
                placeholder="행사 종류를 입력해주세요 (예: 돌잔치, 결혼식 등)"
                className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:border-purple-600 focus:outline-none"
              />
            </div>
          )}
        </div>

        {/* 지역 선택 */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            행사 지역 <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.region}
            onChange={(e) => handleInputChange('region', e.target.value)}
            className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 bg-white text-gray-900 font-medium focus:border-purple-600 focus:outline-none"
          >
            <option value="">선택하세요</option>
            <option value="강남구">강남구</option>
            <option value="서초구">서초구</option>
            <option value="송파구">송파구</option>
            <option value="강동구">강동구</option>
            <option value="마포구">마포구</option>
            <option value="용산구">용산구</option>
            <option value="성동구">성동구</option>
            <option value="광진구">광진구</option>
            <option value="종로구">종로구</option>
            <option value="중구">중구</option>
          </select>
        </div>

        {/* 날짜 */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            날짜 <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={formData.date}
            min={getTodayDate()}
            onChange={(e) => handleInputChange('date', e.target.value)}
            className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 bg-white text-gray-900 font-medium focus:border-purple-600 focus:outline-none"
          />
        </div>

        {/* 시작 및 종료 시간 */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              시작 시간 <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.startTime}
              onChange={(e) => handleInputChange('startTime', e.target.value)}
              className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 bg-white text-gray-900 font-medium focus:border-purple-600 focus:outline-none"
            >
              <option value="">선택</option>
              {generateTimeOptions().map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              종료 시간 <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.endTime}
              onChange={(e) => handleInputChange('endTime', e.target.value)}
              className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 bg-white text-gray-900 font-medium focus:border-purple-600 focus:outline-none"
            >
              <option value="">선택</option>
              {generateTimeOptions().map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 행사 유형 */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            행사 성격 <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {['실내', '실외', '온라인', '하이브리드'].map(type => (
              <button
                key={type}
                onClick={() => handleInputChange('eventType', type)}
                className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                  formData.eventType === type
                    ? 'border-purple-600 bg-purple-50 text-purple-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
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
