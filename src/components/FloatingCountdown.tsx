import type { Countdown } from '../utils/countdown'

type Props = {
  countdown: Countdown
}

const block = (value: number, label: string) => (
  <div className="min-w-[78px] text-center">
    <dt className="font-sans text-[2.2rem] font-medium leading-none tracking-[0.03em] text-[#444d63]">{String(value).padStart(2, '0')}</dt>
    <dd className="mt-2 text-[0.68rem] font-medium tracking-[0.12em] text-[#9095a5]">{label}</dd>
  </div>
)

export const FloatingCountdown = ({ countdown }: Props) => (
  <section aria-label="Birthday countdown" className="py-5">
    <div className="mx-auto flex w-fit flex-col items-center">
      <dl className="flex items-start justify-center gap-1">
        {block(countdown.days, 'DÍAS')}
        <span aria-hidden="true" className="px-1 pt-1 text-2xl text-[#acb0bc]">
          ·
        </span>
        {block(countdown.hours, 'HORAS')}
        <span aria-hidden="true" className="px-1 pt-1 text-2xl text-[#acb0bc]">
          ·
        </span>
        {block(countdown.minutes, 'MINUTOS')}
      </dl>
      <p className="mt-4 w-full text-center text-[0.87rem] tracking-[0.15em] text-[#9398a7]">PARA TU CUMPLEAÑOS</p>
    </div>
  </section>
)
