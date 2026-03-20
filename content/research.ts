export const categoryTabs = ['전체', '타당도 검증', '빙산 모형 시각화', '역량 매핑 엔진', '데이터 기반 구조화 면접'] as const
export type CategoryTab = (typeof categoryTabs)[number]

export const sideArticles = [
  { title: 'Can Do·Will Do 분리 평가의 예측력 차이', date: 'Feb 14', image: '/images/research/thumb-7.svg', category: '빙산 모형 시각화' },
  { title: '심리검사 기반 BEI 질문 자동 생성 결과', date: 'Feb 09', image: '/images/research/thumb-8.svg', category: '데이터 기반 구조화 면접' },
  { title: 'BARS 도입 후 평가자 간 신뢰도 변화', date: 'Feb 01', image: '/images/research/thumb-9.svg', category: '역량 매핑 엔진' },
] as const

export const archiveArticles = [
  {
    tag: '타당도 검증',
    title: '채용 예측 타당도 0.65 달성 요인 분석',
    desc: '350만 건 데이터를 기반으로 모델 정확도가 개선된 핵심 요인을 분해했습니다.',
    date: '2025.12.19',
    image: '/images/research/thumb-1.svg',
    category: '타당도 검증',
  },
  {
    tag: '빙산 모형 시각화',
    title: 'Can Do vs Will Do: 역량 평가를 나누는 기준',
    desc: '표면적 능력(스킬·지식)과 수면 아래 동기·기질을 분리해야 하는 이유와 측정 방법을 설명합니다.',
    date: '2025.11.30',
    image: '/images/research/thumb-2.svg',
    category: '빙산 모형 시각화',
  },
  {
    tag: '빙산 모형 시각화',
    title: '빙산 모형으로 이해하는 고성과자의 숨겨진 DNA',
    desc: '성과 상위 5%를 구분하는 건 능력이 아닌 기질이었습니다. 25년 추적 데이터가 보여주는 패턴을 공개합니다.',
    date: '2025.11.12',
    image: '/images/research/thumb-3.svg',
    category: '빙산 모형 시각화',
  },
  {
    tag: '역량 매핑 엔진',
    title: '전략 목표에서 BARS까지: 역량 번역 4단계 프로세스',
    desc: '조직의 비전이 어떻게 구체적 행동 지표(BARS)로 번역되는지, 단계별 설계 프로세스를 상세히 설명합니다.',
    date: '2025.10.21',
    image: '/images/research/thumb-4.svg',
    category: '역량 매핑 엔진',
  },
  {
    tag: '역량 매핑 엔진',
    title: '행동 기준 평가척도(BARS) 실전 설계 가이드',
    desc: '평가자 간 신뢰도를 높이는 BARS 문항 작성법과 역량별 행동 앵커 예시를 제공합니다.',
    date: '2025.10.10',
    image: '/images/research/thumb-5.svg',
    category: '역량 매핑 엔진',
  },
  {
    tag: '데이터 기반 구조화 면접',
    title: '심리검사 결과를 면접 질문으로 변환하는 방법',
    desc: '검사 결과의 취약 역량 신호가 면접관의 BEI 질문 가이드로 자동 변환되는 파이프라인을 시각화합니다.',
    date: '2025.09.28',
    image: '/images/research/thumb-6.svg',
    category: '데이터 기반 구조화 면접',
  },
  {
    tag: '데이터 기반 구조화 면접',
    title: 'BEI 자동화: 데이터가 만드는 맞춤형 면접 가이드',
    desc: '후보자별 심리검사 프로파일을 기반으로 개인화된 구조화 면접 질문셋이 생성되는 구조를 설명합니다.',
    date: '2025.09.10',
    image: '/images/research/thumb-1.svg',
    category: '데이터 기반 구조화 면접',
  },
] as const

export const featuredResearch = {
  badge: '핵심 연구',
  title: 'ASTRA AI 예측 타당도 검증 보고서: 상관계수 0.65의 의미',
  meta: '읽는 시간 5분 • 2026.02.14',
  summary:
    '기존 인적성 검사(0.3) 대비 2배 이상의 예측력을 입증했습니다. 350만 건의 데이터와 25년의 추적 조사를 통해 밝혀낸 고성과자의 DNA를 공개합니다.',
} as const
