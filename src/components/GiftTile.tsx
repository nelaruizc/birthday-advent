import type { DayData } from '../data/days'

type GiftTileProps = {
  dayData: DayData
  locked: boolean
  opened: boolean
  onClick: () => void
  pulseLocked: boolean
}

const tileBackgrounds = [
  'from-[#ebeef4] to-[#f3f4f7]',
  'from-[#ece7de] to-[#f3eee8]',
  'from-[#e7edf3] to-[#f4f6f9]',
  'from-[#efe8df] to-[#f7f2ec]',
  'from-[#e8ecef] to-[#f1f4f6]',
]

const LockQuestionIcon = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 21h-8a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10c.265 0 .518 .052 .75 .145" />
    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
    <path d="M19 22v.01" />
    <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
  </svg>
)

const LockOpenIcon = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6" />
    <path d="M9 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M13 11v-4a4 4 0 1 1 8 0v4" />
  </svg>
)

export const GiftTile = ({ dayData, locked, opened, onClick, pulseLocked }: GiftTileProps) => {
  const isFeaturedDay = dayData.day === 11

  return (
    <button
      aria-label={`Open day ${dayData.day}`}
      onClick={onClick}
      className={`relative h-[4.35rem] rounded-2xl border-none p-2 text-right font-serif text-[2.05rem] leading-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8a890] ${
        isFeaturedDay
          ? 'col-span-2 bg-[#55586F] text-[#FFFFFF]'
          : locked
            ? 'cursor-not-allowed bg-[#eaebee] text-[#afb4c0] saturate-0'
            : `bg-gradient-to-br text-[#8a90a1] hover:-translate-y-0.5 ${tileBackgrounds[(dayData.day - 1) % tileBackgrounds.length]}`
      } ${opened ? 'ring-1 ring-[#d8c2b6]' : ''} ${pulseLocked ? 'tile-locked-pulse' : ''}`}
    >
      <span className="absolute left-2 top-2">
        {locked ? (
          <LockQuestionIcon className={`h-4 w-4 ${isFeaturedDay ? 'text-[#e7e9ef]' : 'text-[#b0b6c4]'}`} />
        ) : (
          <LockOpenIcon className={`h-4 w-4 ${isFeaturedDay ? 'text-[#f3eee8]' : 'text-[#9ca3b4]'}`} />
        )}
      </span>
      <span>{dayData.day}</span>
    </button>
  )
}
