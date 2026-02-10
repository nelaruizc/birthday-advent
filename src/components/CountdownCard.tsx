import type { Countdown } from '../utils/countdown'
import { GiftGrid } from './GiftGrid'
import type { Gift } from '../data/gifts'

type Props = {
  countdown: Countdown
  gifts: Gift[]
  openedGifts: number[]
  isUnlocked: (id: number) => boolean
}

const block = (value: number, label: string) => (
  <div className="w-20 text-center">
    <p className="font-serif text-5xl leading-none text-[#1a2c61]">{String(value).padStart(2, '0')}</p>
    <p className="mt-1 text-xs uppercase tracking-wide text-[#364c81]">{label}</p>
  </div>
)

export const CountdownCard = ({ countdown, gifts, openedGifts, isUnlocked }: Props) => (
  <section id="adventure" className="glass-panel rounded-mega p-5">
    <div className="flex items-start justify-between gap-3">
      <h2 className="max-w-56 text-5xl font-serif leading-[0.88]">Your Daily Task Adventure</h2>
      <div className="rounded-2xl bg-[#f4e49f] px-3 py-2 text-center text-[#102962]">
        <p className="text-3xl font-semibold leading-none">11</p>
        <p className="text-xs font-medium">March</p>
      </div>
    </div>

    <div className="mt-4 rounded-[22px] bg-[#e8ecf4] p-4 text-center text-[#19295d] shadow-inner">
      <p className="text-sm font-medium">Birthday Countdown Unleashed:</p>
      <div className="mt-2 flex items-center justify-center gap-1.5">
        {block(countdown.days, 'days')}
        <span className="-mt-5 text-4xl">:</span>
        {block(countdown.hours, 'hours')}
        <span className="-mt-5 text-4xl">:</span>
        {block(countdown.minutes, 'minutes')}
      </div>
      <p className="mt-2 text-3xl font-serif">To your birthday!</p>
    </div>

    <GiftGrid gifts={gifts} openedGifts={openedGifts} isUnlocked={isUnlocked} />
  </section>
)
