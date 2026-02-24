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
    <div className="flex items-center justify-between gap-3">
      <div className="max-w-56">
        <h2 className="font-serif leading-[1.08] text-[#59607a]">
          <span className="block text-[2.15rem] font-medium">
            Una <strong>sorpresa</strong>
          </span>
          <span className="block text-[2.32rem] text-[#4f5772]">cada día.</span>
        </h2>
        <span className="mt-3 block h-px w-20 bg-[#8f98b3]/30" aria-hidden="true" />
      </div>
      <div className="rounded-3xl bg-[#55586F] px-4 py-2 text-center text-[#FFFFFF]">
        <p className="text-[2.1rem] font-semibold leading-none">11</p>
        <p className="text-sm">Marzo</p>
      </div>
    </div>

    <GiftGrid daysData={daysData} openedGifts={openedGifts} isUnlocked={isUnlocked} markOpened={markOpened} />
  </section>
)
