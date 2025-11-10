'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DesignPage() {
  const router = useRouter();
  const [selectedInvitation, setSelectedInvitation] = useState('');
  const [selectedLogo, setSelectedLogo] = useState('');
  const [selectedBanner, setSelectedBanner] = useState('');
  const [selectedGoods, setSelectedGoods] = useState<string[]>([]);

  const invitationTemplates = [
    { id: 'elegant', name: '엘레강트', color: 'bg-purple-100', price: 0 },
    { id: 'modern', name: '모던', color: 'bg-blue-100', price: 0 },
    { id: 'cute', name: '큐트', color: 'bg-pink-100', price: 0 },
    { id: 'premium', name: '프리미엄', color: 'bg-amber-100', price: 3 }
  ];

  const logoTemplates = [
    { id: 'minimal', name: '미니멀', preview: '🎯', price: 0 },
    { id: 'classic', name: '클래식', preview: '👑', price: 0 },
    { id: 'fun', name: '펀', preview: '🎉', price: 0 },
    { id: 'custom', name: '커스텀', preview: '✨', price: 5 }
  ];

  const bannerOptions = [
    { id: 'standard', name: '기본 현수막', size: '1m x 3m', price: 5 },
    { id: 'large', name: '대형 현수막', size: '2m x 5m', price: 10 },
    { id: 'none', name: '필요없음', size: '-', price: 0 }
  ];

  const goodsOptions = [
    { id: 'sticker', name: '스티커', price: 2, emoji: '🏷️' },
    { id: 'badge', name: '배지', price: 3, emoji: '🎖️' },
    { id: 'tumbler', name: '텀블러', price: 8, emoji: '🥤' },
    { id: 'tshirt', name: '티셔츠', price: 12, emoji: '👕' },
    { id: 'tote', name: '에코백', price: 10, emoji: '🛍️' },
    { id: 'photocard', name: '포토카드', price: 5, emoji: '🖼️' }
  ];

  const toggleGoods = (id: string) => {
    if (selectedGoods.includes(id)) {
      setSelectedGoods(selectedGoods.filter(item => item !== id));
    } else {
      setSelectedGoods([...selectedGoods, id]);
    }
  };

  const totalDesignCost = () => {
    let total = 0;

    // 초대장
    const invitation = invitationTemplates.find(t => t.id === selectedInvitation);
    if (invitation) total += invitation.price;

    // 로고
    const logo = logoTemplates.find(t => t.id === selectedLogo);
    if (logo) total += logo.price;

    // 현수막
    const banner = bannerOptions.find(o => o.id === selectedBanner);
    if (banner) total += banner.price;

    // 굿즈
    selectedGoods.forEach(goodsId => {
      const goods = goodsOptions.find(g => g.id === goodsId);
      if (goods) total += goods.price;
    });

    return total;
  };

  const isFormValid = selectedInvitation !== '' && selectedLogo !== '' && selectedBanner !== '';

  const handleComplete = () => {
    console.log({
      invitation: selectedInvitation,
      logo: selectedLogo,
      banner: selectedBanner,
      goods: selectedGoods,
      totalCost: totalDesignCost()
    });
    router.push('/summary');
  };

  return (
    <div className="mobile-container bg-gray-50 min-h-screen pb-32">
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
            <p className="text-sm text-gray-600">디자인 선택</p>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white px-5 py-3 border-b">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span>4단계</span>
          <span>디자인 및 굿즈</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
        </div>
      </div>

      {/* Main Form */}
      <main className="px-5 py-6 space-y-8">
        {/* 초대장 템플릿 */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-900">
              초대장 디자인 <span className="text-red-500">*</span>
            </label>
            <button className="text-xs text-purple-600 font-medium">
              미리보기 전체
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {invitationTemplates.map(template => (
              <button
                key={template.id}
                onClick={() => setSelectedInvitation(template.id)}
                className={`relative p-4 rounded-lg border-2 transition-all ${
                  selectedInvitation === template.id
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className={`h-24 rounded ${template.color} mb-2 flex items-center justify-center text-2xl`}>
                  📨
                </div>
                <div className="text-sm font-medium text-gray-900">{template.name}</div>
                {template.price > 0 ? (
                  <div className="text-xs text-purple-600 font-bold">+{template.price}만원</div>
                ) : (
                  <div className="text-xs text-green-600 font-bold">무료</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 로고 디자인 */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            로고 디자인 <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {logoTemplates.map(template => (
              <button
                key={template.id}
                onClick={() => setSelectedLogo(template.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedLogo === template.id
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="text-4xl mb-2">{template.preview}</div>
                <div className="text-sm font-medium text-gray-900">{template.name}</div>
                {template.price > 0 ? (
                  <div className="text-xs text-purple-600 font-bold">+{template.price}만원</div>
                ) : (
                  <div className="text-xs text-green-600 font-bold">무료</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 현수막 */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            현수막 <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            {bannerOptions.map(option => (
              <button
                key={option.id}
                onClick={() => setSelectedBanner(option.id)}
                className={`w-full p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                  selectedBanner === option.id
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-900">{option.name}</div>
                  <div className="text-xs text-gray-500">{option.size}</div>
                </div>
                {option.price > 0 ? (
                  <div className="text-sm font-bold text-purple-600">{option.price}만원</div>
                ) : (
                  <div className="text-sm font-bold text-green-600">무료</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 굿즈 추가 */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-900">
              굿즈 추가 <span className="text-xs text-gray-500">(선택)</span>
            </label>
            {selectedGoods.length > 0 && (
              <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700">
                {selectedGoods.length}개 선택
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {goodsOptions.map(goods => (
              <button
                key={goods.id}
                onClick={() => toggleGoods(goods.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedGoods.includes(goods.id)
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="text-3xl mb-2">{goods.emoji}</div>
                <div className="text-sm font-medium text-gray-900">{goods.name}</div>
                <div className="text-xs text-purple-600 font-bold">{goods.price}만원</div>
              </button>
            ))}
          </div>
          <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-xs text-yellow-800">
              💡 굿즈는 최소 수량 적용됩니다. (10개 이상)
            </p>
          </div>
        </div>

        {/* 디자인 팁 */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-purple-900 mb-2">
            🎨 디자인 팁
          </h4>
          <ul className="space-y-1 text-xs text-purple-800">
            <li>• 초대장은 행사 2주 전 발송 권장</li>
            <li>• 로고는 굿즈 제작 시 함께 사용됩니다</li>
            <li>• 현수막은 행사 당일 입구에 설치</li>
            <li>• 모든 디자인은 수정 요청 1회 무료</li>
          </ul>
        </div>

        {/* 총 디자인 비용 */}
        {totalDesignCost() > 0 && (
          <div className="bg-white rounded-lg p-4 border-2 border-purple-600">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">
                디자인 총 비용
              </span>
              <span className="text-xl font-bold text-purple-600">
                +{totalDesignCost()}만원
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              이전 견적에 추가되는 금액입니다
            </p>
          </div>
        )}
      </main>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-5 py-4 max-w-[375px] mx-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">디자인 추가 비용</span>
          <span className="text-lg font-bold text-purple-600">
            {totalDesignCost() > 0 ? `+${totalDesignCost()}만원` : '무료'}
          </span>
        </div>
        <button
          onClick={handleComplete}
          disabled={!isFormValid}
          className={`w-full py-4 rounded-lg font-bold text-white transition-all ${
            isFormValid
              ? 'bg-purple-600 hover:bg-purple-700 active:bg-purple-800'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          견적서 받기
        </button>
      </div>
    </div>
  );
}
