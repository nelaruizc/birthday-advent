import type { Countdown } from '../utils/countdown'
import { GiftGrid } from './GiftGrid'
import type { Gift } from '../data/gifts'

type Props = {
  gifts: Gift[]
  openedGifts: number[]
  isUnlocked: (id: number) => boolean
}

type CountdownProps = {
  countdown: Countdown
}

const block = (value: number, label: string) => (
  <div className="min-w-16 text-center sm:min-w-20">
    <dt className="font-serif text-4xl leading-none tracking-[0.08em] text-[#ffffff] sm:text-5xl">
      {String(value).padStart(2, '0')}
    </dt>
    <dd className="mt-2 text-[0.65rem] uppercase tracking-[0.22em] text-[rgba(255,255,255,0.7)] sm:text-xs">
      {label}
    </dd>
  </div>
)

export const FloatingCountdown = ({ countdown }: CountdownProps) => (
  <div
    className="relative my-8 bg-transparent px-2 py-6 text-center before:absolute before:left-1/2 before:top-0 before:h-px before:w-2/3 before:-translate-x-1/2 before:bg-[rgba(255,255,255,0.15)] before:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-2/3 after:-translate-x-1/2 after:bg-[rgba(255,255,255,0.15)] after:content-[''] sm:my-10 sm:py-7"
    aria-label="Countdown to your birthday"
  >
    <dl className="flex items-start justify-center gap-2 sm:gap-3">
      {block(countdown.days, 'days')}
      <span aria-hidden="true" className="pt-1 font-serif text-3xl leading-none text-[rgba(255,255,255,0.7)] sm:text-4xl">
        ·
      </span>
      {block(countdown.hours, 'hours')}
      <span aria-hidden="true" className="pt-1 font-serif text-3xl leading-none text-[rgba(255,255,255,0.7)] sm:text-4xl">
        ·
      </span>
      {block(countdown.minutes, 'minutes')}
    </dl>
    <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[rgba(255,255,255,0.7)] sm:text-base">Until your birthday</p>
  </div>
)

export const CountdownCard = ({ gifts, openedGifts, isUnlocked }: Props) => (
  <section id="adventure" className="glass-panel rounded-mega p-5">
    <div className="flex items-start justify-between gap-3">
      <h2 className="max-w-56 text-5xl font-serif leading-[0.88]">Your Daily Task Adventure</h2>
      <div className="rounded-2xl bg-[#f4e49f] px-3 py-2 text-center text-[#102962]">
        <p className="text-3xl font-semibold leading-none">11</p>
        <p className="text-xs font-medium">March</p>
      </div>
    </div>

    <GiftGrid gifts={gifts} openedGifts={openedGifts} isUnlocked={isUnlocked} />
  </section>
)
