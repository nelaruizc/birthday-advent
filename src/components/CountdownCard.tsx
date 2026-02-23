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
  <div className="min-w-16 text-center sm:min-w-20">
    <dt className="font-serif text-4xl leading-none tracking-[0.08em] text-[#1a2c61] sm:text-5xl">
      {String(value).padStart(2, '0')}
    </dt>
    <dd className="mt-2 text-[0.65rem] uppercase tracking-[0.22em] text-[#364c81] sm:text-xs">{label}</dd>
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

    <div className="mt-8 px-2 text-center text-[#19295d] sm:mt-10">
      <dl className="flex items-start justify-center gap-2 sm:gap-3" aria-label="Countdown to your birthday">
        {block(countdown.days, 'days')}
        <span aria-hidden="true" className="pt-1 font-serif text-3xl leading-none text-[#6d7fae] sm:text-4xl">
          ·
        </span>
        {block(countdown.hours, 'hours')}
        <span aria-hidden="true" className="pt-1 font-serif text-3xl leading-none text-[#6d7fae] sm:text-4xl">
          ·
        </span>
        {block(countdown.minutes, 'minutes')}
      </dl>
      <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#2f477f]/85 sm:text-base">Until your birthday</p>
    </div>

    <GiftGrid gifts={gifts} openedGifts={openedGifts} isUnlocked={isUnlocked} />
  </section>
)
