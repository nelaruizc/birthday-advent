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

export const HeroCard = ({ countdown }: Props) => {
  return (
    <section className="rounded-mega bg-gradient-to-b from-[#faf8f4] to-[#f5f1ec] p-4 shadow-soft">
      <div className="overflow-hidden rounded-[30px] bg-[#f9f7f4]">
        <div className="rounded-[30px] bg-gradient-to-b from-[#f7f4ef] via-[#f4f2f1] to-[#f4f2f0] px-5 pb-7 pt-4">
          <img
            src={`${import.meta.env.BASE_URL}birthday-cake.svg`}
            alt="Birthday cake"
            className="max-h-56 w-full object-contain opacity-90"
          />

          <h1 className="mt-5 text-center font-serif text-[3.2rem] leading-[0.9] text-[#48506a]">Birthday Advent</h1>
          <p className="mx-auto mt-4 max-w-[290px] text-center text-[1.05rem] leading-relaxed text-[#727a8f]">
            Descubre sorpresas diarias, porque celebrarte no cabe en un solo día.
          </p>

          <div className="mt-6 rounded-[26px] bg-[#f6f3ef] px-3 py-5 shadow-inner-soft">
            <dl className="flex items-start justify-center gap-1">
              {block(countdown.days, 'DAYS')}
              <span aria-hidden="true" className="px-1 pt-1 text-2xl text-[#acb0bc]">
                ·
              </span>
              {block(countdown.hours, 'HOURS')}
              <span aria-hidden="true" className="px-1 pt-1 text-2xl text-[#acb0bc]">
                ·
              </span>
              {block(countdown.minutes, 'MINUTES')}
            </dl>
            <p className="mt-4 text-center text-[0.78rem] tracking-[0.12em] text-[#9398a7]">UNTIL YOUR BIRTHDAY</p>
          </div>
        </div>
      </div>
    </section>
  )
}
