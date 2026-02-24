import type { DayData } from '../data/days'
import { GiftGrid } from './GiftGrid'

type Props = {
  daysData: DayData[]
  openedGifts: number[]
  isUnlocked: (id: number) => boolean
  markOpened: (id: number) => void
}

export const CountdownCard = ({ daysData, openedGifts, isUnlocked, markOpened }: Props) => (
  <section id="adventure" className="rounded-mega bg-[#FFFFFF] px-5 pb-5 pt-6">
    <div className="flex justify-between gap-3 pb-[18px]">
      <div className="relative inline-block">
        <h2 className="inline-block pr-[0.03em] font-serif leading-[1.08] text-[#59607a]">
          <span className="block text-[2.15rem] font-medium">
            Una <strong>sorpresa</strong>
          </span>
          <span className="block text-[2.32rem] text-[#4f5772]">cada día.</span>
        </h2>
        <span className="absolute left-0 top-full mt-4 block h-[2px] w-full rounded-full bg-[#8f98b3]/50" aria-hidden="true" />
      </div>
      <div className="flex h-14 w-14 shrink-0 self-center items-center justify-center rounded-2xl bg-[#55586F] text-[#ffffff]/95">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-[26px]"
          aria-hidden="true"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 9a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2" />
          <path d="M12 8l0 13" />
          <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
          <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
        </svg>
      </div>
    </div>

    <GiftGrid daysData={daysData} openedGifts={openedGifts} isUnlocked={isUnlocked} markOpened={markOpened} />
  </section>
)
