import type { DayData } from '../data/days'
import { GiftGrid } from './GiftGrid'

type Props = {
  daysData: DayData[]
  openedGifts: number[]
  isUnlocked: (id: number) => boolean
  markOpened: (id: number) => void
}

export const CountdownCard = ({ daysData, openedGifts, isUnlocked, markOpened }: Props) => (
  <section id="adventure" className="rounded-mega bg-[#f5f1ec] p-5">
    <div className="flex items-start justify-between gap-3">
      <h2 className="max-w-56 font-serif text-[2.3rem] leading-[0.95] text-[#59607a]">Your Daily Task Adventure</h2>
      <div className="rounded-3xl bg-[#3F97B3] px-4 py-2 text-center text-[#FFFFFF]">
        <p className="text-[2.1rem] font-semibold leading-none">11</p>
        <p className="text-sm">March</p>
      </div>
    </div>

    <GiftGrid daysData={daysData} openedGifts={openedGifts} isUnlocked={isUnlocked} markOpened={markOpened} />
  </section>
)
