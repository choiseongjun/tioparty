'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ReviewsPage() {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: '김민지',
      category: '생일파티',
      rating: 5,
      date: '2025-01-05',
      guests: 25,
      images: [
        'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop'
      ],
      content: '딸 생일파티를 TioParty로 준비했는데 너무 만족스러웠어요! 견적도 투명하고 진행자분이 정말 프로페셔널하셨습니다. 아이들이 너무 좋아했어요.',
      helpful: 42
    },
    {
      id: 2,
      name: '박준호',
      category: '송년회',
      rating: 5,
      date: '2024-12-28',
      guests: 50,
      images: [
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop'
      ],
      content: '회사 송년회를 처음 맡게 되어 걱정이 많았는데, TioParty 덕분에 스트레스 없이 성공적으로 마쳤습니다. 특히 장소 섭외부터 음식, 포토부스까지 일괄 처리되어 편했어요.',
      helpful: 38
    },
    {
      id: 3,
      name: '이서연',
      category: '회식',
      rating: 4,
      date: '2024-12-20',
      guests: 15,
      images: [
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop'
      ],
      content: '팀 회식으로 이용했습니다. 가격대비 구성이 알차고, 직원분들이 친절하셨어요. 다만 예약이 꽉 차서 원하는 날짜를 못 잡은 게 아쉬웠습니다.',
      helpful: 25
    },
    {
      id: 4,
      name: '최동욱',
      category: '생일파티',
      rating: 5,
      date: '2024-12-15',
      guests: 30,
      images: [
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=400&h=300&fit=crop'
      ],
      content: '아내 생일 깜짝파티를 준비했는데 완벽했습니다! 특히 초대장 디자인과 현수막이 퀄리티가 좋아서 감동받았어요. 다음에도 꼭 이용할게요.',
      helpful: 51
    },
    {
      id: 5,
      name: '정수민',
      category: '회식',
      rating: 5,
      date: '2024-12-10',
      guests: 20,
      images: [
        'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop'
      ],
      content: '부서 회식으로 이용했는데 분위기도 좋고 음식도 맛있었어요. 견적 단계에서 실시간으로 가격을 확인할 수 있어서 예산 관리가 쉬웠습니다.',
      helpful: 31
    },
    {
      id: 6,
      name: '강태윤',
      category: '송년회',
      rating: 4,
      date: '2024-12-05',
      guests: 80,
      images: [
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=300&fit=crop'
      ],
      content: '대규모 송년회였는데도 차질없이 진행되었습니다. 진행자분의 센스가 정말 좋으셨고, 포토부스가 특히 인기였어요. 다만 음식이 조금 늦게 나와서 별 하나 뺍니다.',
      helpful: 19
    },
    {
      id: 7,
      name: '윤아름',
      category: '생일파티',
      rating: 5,
      date: '2024-11-28',
      guests: 12,
      images: [
        'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop'
      ],
      content: '소규모 생일파티였는데도 정성껏 준비해주셔서 감사했어요. 케이크 맛도 좋았고 장식도 예뻤습니다. 가격도 합리적이었어요!',
      helpful: 44
    },
    {
      id: 8,
      name: '임재현',
      category: '회식',
      rating: 5,
      date: '2024-11-22',
      guests: 35,
      images: [
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop'
      ],
      content: '팀빌딩 회식으로 완벽했습니다. 레크리에이션 프로그램까지 포함되어 있어서 팀워크 향상에 도움이 되었어요. 강추합니다!',
      helpful: 28
    }
  ];

  const categories = ['all', '생일파티', '송년회', '회식'];

  const filteredReviews = selectedFilter === 'all'
    ? reviews
    : reviews.filter(review => review.category === selectedFilter);

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;

  return (
    <div className="mobile-container bg-gray-50 min-h-screen pb-6">
      {/* Header */}
      <header className="bg-white px-5 py-4 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">고객 후기</h1>
            <p className="text-sm text-gray-600">실제 이용 고객님들의 생생한 후기</p>
          </div>
        </div>

        {/* 평점 요약 */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl font-bold text-purple-600">{averageRating}</span>
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-sm text-gray-600">{totalReviews}개의 후기</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-1">평균 만족도</div>
              <div className="text-2xl font-bold text-purple-600">98%</div>
            </div>
          </div>
        </div>

        {/* 필터 */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                selectedFilter === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? '전체' : category}
            </button>
          ))}
        </div>
      </header>

      {/* 리뷰 목록 */}
      <main className="px-5 py-4 space-y-4">
        {filteredReviews.map(review => (
          <div key={review.id} className="bg-white rounded-lg p-4 shadow-sm">
            {/* 리뷰 헤더 */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">{review.name}</span>
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">
                      {review.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{review.date}</span>
                    <span>•</span>
                    <span>{review.guests}명</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>

            {/* 이미지 미리보기 */}
            <div className="flex gap-2 mb-3 overflow-x-auto">
              {review.images.map((imageUrl, idx) => (
                <div key={idx} className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={`${review.name}님의 ${review.category} 사진 ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>

            {/* 리뷰 내용 */}
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              {review.content}
            </p>

            {/* 도움이 됐어요 */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                도움이 됐어요 {review.helpful}
              </button>
              <button className="text-sm text-gray-400 hover:text-gray-600">
                신고
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* 통계 섹션 */}
      <div className="px-5 py-4">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-5 text-white">
          <h3 className="font-bold text-lg mb-3">TioParty 만족도 통계</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">98%</div>
              <div className="text-xs text-purple-100">재이용 의사</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">4.9</div>
              <div className="text-xs text-purple-100">평균 평점</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-xs text-purple-100">누적 행사</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-4">
        <button
          onClick={() => router.push('/form')}
          className="w-full py-4 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg"
        >
          나도 후기 남기러 가기
        </button>
      </div>
    </div>
  );
}
