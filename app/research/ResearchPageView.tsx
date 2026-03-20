'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import {
  archiveArticles,
  categoryTabs,
  type CategoryTab,
  featuredResearch,
  sideArticles,
} from '@/content/research'

function IcebergDetail() {
  return (
    <div className="mb-10 rounded-[10px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">Iceberg Model</p>
      <h3 className="mb-2 text-xl font-bold text-white">Can Do와 Will Do를 분리해야 하는 이유</h3>
      <p className="mb-8 text-sm leading-relaxed text-neutral-400">
        전통적 채용은 보이는 능력(Can Do)에 집중했지만, 실제 성과 예측의 핵심 변수는 수면 아래에 있습니다.
        ASTRA는 두 영역을 분리 측정해 더 정확한 인재 예측을 실현합니다.
      </p>
      <div className="mx-auto max-w-xl">
        {/* Can Do */}
        <div className="rounded-t-2xl bg-blue-500/20 border border-blue-400/30 px-6 py-5 text-center">
          <p className="text-lg font-bold text-blue-200">Can Do (능력)</p>
          <p className="mt-1 text-sm text-neutral-300">스킬 · 지식 · 경험 · 자격증</p>
          <span className="mt-2 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-0.5 text-xs text-blue-300">수면 위 — 보이는 영역 (20%)</span>
        </div>
        {/* Waterline */}
        <div className="flex items-center gap-3 bg-blue-900/20 py-2 px-4 border-x border-blue-400/20">
          <div className="h-px flex-1 bg-blue-400/40" />
          <span className="text-xs text-blue-400 tracking-widest">~ ~ ~ 수면 ~ ~ ~</span>
          <div className="h-px flex-1 bg-blue-400/40" />
        </div>
        {/* Will Do */}
        <div className="rounded-b-2xl bg-indigo-900/30 border border-indigo-500/20 border-t-0 px-6 py-7 text-center">
          <p className="text-lg font-bold text-indigo-200">Will Do (동기 / 기질)</p>
          <p className="mt-1 text-sm text-neutral-300">동기 · 가치관 · 성격 · 기질 · 태도</p>
          <span className="mt-2 inline-block rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-0.5 text-xs text-indigo-300">수면 아래 — 숨겨진 영역 (80%)</span>
          <p className="mt-4 text-xs text-neutral-500">성과 상위 5%를 구분하는 핵심 예측 변수</p>
        </div>
      </div>
    </div>
  )
}

function CompetencyMappingDetail() {
  const steps = [
    { step: '01', label: '조직 전략', sub: '비전 · 미션 · KPI', color: 'bg-violet-500/20 border-violet-400/30 text-violet-200' },
    { step: '02', label: '핵심 역량 도출', sub: '역량 모델링', color: 'bg-purple-500/20 border-purple-400/30 text-purple-200' },
    { step: '03', label: '행동 지표 정의', sub: '관찰 가능한 행동', color: 'bg-fuchsia-500/20 border-fuchsia-400/30 text-fuchsia-200' },
    { step: '04', label: 'BARS 척도 설계', sub: '1–5점 앵커 작성', color: 'bg-pink-500/20 border-pink-400/30 text-pink-200' },
    { step: '05', label: '평가 적용', sub: '면접 · 검사 · 시뮬레이션', color: 'bg-rose-500/20 border-rose-400/30 text-rose-200' },
  ]
  return (
    <div className="mb-10 rounded-[10px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">Competency Mapping Engine</p>
      <h3 className="mb-2 text-xl font-bold text-white">전략이 BARS로 번역되는 프로세스</h3>
      <p className="mb-8 text-sm leading-relaxed text-neutral-400">
        조직의 전략적 목표가 어떻게 관찰 가능한 행동 지표(BARS)로 번역되는지 5단계 프로세스를 보여줍니다.
      </p>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-0">
        {steps.map((s, i) => (
          <>
            <div key={s.step} className={`flex flex-1 flex-col items-center justify-center rounded-[10px] border px-4 py-4 text-center ${s.color}`}>
              <span className="text-xs font-semibold opacity-60">{s.step}</span>
              <p className="mt-1 text-sm font-bold">{s.label}</p>
              <p className="mt-1 text-xs text-neutral-400">{s.sub}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:flex shrink-0 items-center justify-center px-2 text-neutral-600">
                <ArrowRight className="h-4 w-4" />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

function BEIDetail() {
  const steps = [
    { step: '01', label: '심리검사 실시', sub: '성격·역량·동기 측정', icon: '📋' },
    { step: '02', label: '결과 분석', sub: '프로파일 생성', icon: '📊' },
    { step: '03', label: '취약 역량 식별', sub: '갭 분석·우선순위화', icon: '🔍' },
    { step: '04', label: '질문 가이드 생성', sub: 'BEI 문항 자동화', icon: '⚡' },
    { step: '05', label: '면접관 전달', sub: '개인화된 가이드', icon: '🎯' },
  ]
  return (
    <div className="mb-10 rounded-[10px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">Data-Driven BEI</p>
      <h3 className="mb-2 text-xl font-bold text-white">심리검사 → 면접 질문 가이드 변환 프로세스</h3>
      <p className="mb-8 text-sm leading-relaxed text-neutral-400">
        후보자의 심리검사 결과가 면접관의 맞춤형 BEI 질문 가이드로 자동 변환되는 파이프라인입니다.
      </p>
      <div className="flex flex-col gap-2 md:gap-0">
        {steps.map((s, i) => (
          <div key={s.step} className="flex items-center gap-4">
            <div className="flex flex-1 items-center gap-4 rounded-[10px] border border-white/10 bg-white/[0.04] px-5 py-4">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <p className="text-xs text-neutral-500">{s.step}</p>
                <p className="text-sm font-semibold text-white">{s.label}</p>
                <p className="text-xs text-neutral-400">{s.sub}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden h-6 w-px bg-white/10 md:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const categoryDetails: Record<string, React.ReactNode> = {
  '빙산 모형 시각화': <IcebergDetail />,
  '역량 매핑 엔진': <CompetencyMappingDetail />,
  '데이터 기반 구조화 면접': <BEIDetail />,
}

function HeroVisual() {
  return (
    <div className="relative h-[260px] overflow-hidden rounded-[10px] border border-white/10 bg-neutral-900 lg:h-[230px]">
      <Image src="/images/research/hero-mockup.svg" alt="Research hero mockup" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
    </div>
  )
}

function SideThumb({ index, title, date, image }: { index: number; title: string; date: string; image: string }) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-[10px] border border-white/10 bg-neutral-900 transition-transform duration-300 group-hover:scale-[1.03]">
        <Image src={image} alt={`${title} mockup`} fill className="scale-[1.015] object-cover" />
        <div className="text-brand-primary-soft absolute right-4 top-4 text-sm font-semibold">#{index + 1}</div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3">
          <p className="truncate text-base font-medium text-white">{title}</p>
          <p className="mt-1 text-sm text-neutral-400">{date}</p>
        </div>
      </div>
    </article>
  )
}

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState<CategoryTab>('전체')

  const filteredSideArticles = useMemo(() => {
    if (activeTab === '전체') return sideArticles
    return sideArticles.filter((item) => item.category === activeTab)
  }, [activeTab])

  const filteredArchiveArticles = useMemo(() => {
    if (activeTab === '전체') return archiveArticles
    return archiveArticles.filter((item) => item.category === activeTab)
  }, [activeTab])

  return (
    <div className="min-h-screen bg-neutral-950 pb-24 pt-32 lg:pt-40 text-white">
      <div className="px-6 md:px-20 xl:px-[120px]">
        <header className="mb-6">
          <p className="ds-eyebrow text-brand-primary text-xs font-semibold uppercase tracking-[0.22em]">Research Library</p>
          <h1 className="title-group__heading text-3xl font-extrabold tracking-tight text-white md:text-4xl">리서치</h1>
        </header>

        <div className="mb-8 border-b border-white/10 py-3">
          <div className="flex flex-nowrap items-center gap-6 overflow-x-auto pr-2 text-sm whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categoryTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 transition-colors ${activeTab === tab ? 'text-brand-primary font-semibold' : 'text-neutral-400 hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <section className="mb-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="hidden lg:sticky lg:top-36 lg:block lg:h-[527.16px] lg:w-[70%]">
              <article className="h-full">
                <div className="flex h-full flex-col rounded-[10px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md md:p-7">
                  <Link href="/research/featured" aria-label="핵심 연구 상세 보기">
                    <HeroVisual />
                  </Link>

                  <div className="mt-4 rounded-[10px] border border-white/10 bg-black/40 p-4 md:p-5">
                    <span className="border-brand-primary-soft bg-brand-primary-soft text-brand-primary-soft inline-flex rounded-full border px-3 py-1 text-xs font-semibold">
                      {featuredResearch.badge}
                    </span>
                    <h2 className="mt-2 break-keep text-2xl font-extrabold leading-tight text-white md:text-2xl xl:text-3xl">
                      <Link href="/research/featured" className="transition-colors hover-brand-primary">
                        {featuredResearch.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-sm text-neutral-400">{featuredResearch.meta}</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-300 md:text-sm">
                      {featuredResearch.summary}
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <aside className="w-full min-w-0 lg:w-[30%]">
              <div className="space-y-8 lg:space-y-10">
                {filteredSideArticles.map((item, idx) => (
                  <SideThumb key={`${item.title}-${item.date}`} index={idx} title={item.title} date={item.date} image={item.image} />
                ))}
                {filteredSideArticles.length === 0 && (
                  <div className="rounded-[10px] border border-white/10 bg-white/[0.03] p-6 text-sm text-neutral-400">
                    선택한 카테고리의 아티클이 없습니다.
                  </div>
                )}
              </div>
            </aside>
          </div>

          <div className="mt-8 lg:hidden">
            <article className="rounded-[10px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md md:p-7">
              <Link href="/research/featured" aria-label="핵심 연구 상세 보기">
                <HeroVisual />
              </Link>
              <div className="mt-5 rounded-[10px] border border-white/10 bg-black/40 p-5">
                <span className="border-brand-primary-soft bg-brand-primary-soft text-brand-primary-soft inline-flex rounded-full border px-3 py-1 text-xs font-semibold">
                  {featuredResearch.badge}
                </span>
                <h2 className="mt-3 break-keep text-2xl font-extrabold leading-tight text-white">
                  {featuredResearch.title}
                </h2>
              </div>
            </article>
          </div>
        </section>

        <section>
          {categoryDetails[activeTab]}
          <div className="mb-8 flex items-end justify-between">
            <h3 className="text-3xl font-bold text-white">아카이브</h3>
            <button className="hidden items-center gap-2 text-sm text-neutral-300 transition-colors hover-brand-primary md:inline-flex">
              더 보기
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {filteredArchiveArticles.map((paper) => (
              <article
                key={`${paper.title}-${paper.date}`}
                className="hover-border-brand-primary-soft rounded-[10px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative mb-4 aspect-video overflow-hidden rounded-[10px] border border-white/10 bg-neutral-900">
                  <Image src={paper.image} alt={`${paper.title} thumbnail`} fill className="object-cover" />
                </div>

                <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-neutral-300">
                  {paper.category}
                </span>
                <h4 className="mt-3 text-xl font-semibold leading-snug text-white">{paper.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">{paper.desc}</p>
                <p className="mt-5 text-sm text-neutral-500">{paper.date}</p>
              </article>
            ))}
          </div>
          {filteredArchiveArticles.length === 0 && (
            <div className="rounded-[10px] border border-white/10 bg-white/[0.03] p-6 text-sm text-neutral-400">
              선택한 카테고리의 아카이브가 없습니다.
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
