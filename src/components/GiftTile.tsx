import type { Gift } from '../data/gifts'

type GiftTileProps = {
  gift: Gift
  locked: boolean
  opened: boolean
  onClick: () => void
}

const tileBackgrounds = [
  'from-[#f6b290] to-[#fef0de]',
  'from-[#e6ebc9] to-[#f6f3dc]',
  'from-[#ff7f57] to-[#ffd8bf]',
  'from-[#cde5fa] to-[#edf5ff]',
  'from-[#d4f0d7] to-[#f4f8ea]',
  'from-[#bee6ff] to-[#eef7ff]',
  'from-[#fee5df] to-[#fff5ef]',
  'from-[#badce6] to-[#e4f2f5]',
  'from-[#e9d5b8] to-[#f8ebdc]',
  'from-[#ccdcb4] to-[#f0f7e8]',
]

export const GiftTile = ({ gift, locked, opened, onClick }: GiftTileProps) => {
  return (
    <button
      aria-label={`Open gift ${gift.id}`}
      disabled={locked}
      onClick={onClick}
      className={`relative h-20 rounded-2xl border-2 p-2 text-right text-4xl font-serif text-[#0f265d] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
        locked
          ? 'cursor-not-allowed border-transparent bg-slate-200/45 text-slate-500 saturate-0'
          : `bg-gradient-to-br ${tileBackgrounds[(gift.id - 1) % tileBackgrounds.length]} hover:-translate-y-0.5`
      } ${opened ? 'border-[#f86648] ring-2 ring-[#ffc37d]/60' : 'border-white/45'}`}
    >
      {locked && <span className="absolute left-2 top-2 text-lg">🔒</span>}
      {opened && <span className="absolute left-2 top-2 text-base">✓</span>}
      <span>{gift.id}</span>
    </button>
  )
}
