import type { Gift } from '../data/gifts'

type GiftTileProps = {
  gift: Gift
  locked: boolean
  opened: boolean
  onClick: () => void
}

const tileBackgrounds = [
  'from-[#ebeef4] to-[#f3f4f7]',
  'from-[#ece7de] to-[#f3eee8]',
  'from-[#e7edf3] to-[#f4f6f9]',
  'from-[#efe8df] to-[#f7f2ec]',
  'from-[#e8ecef] to-[#f1f4f6]',
]

export const GiftTile = ({ gift, locked, opened, onClick }: GiftTileProps) => {
  const isFeaturedDay = gift.id === 11

  return (
    <button
      aria-label={`Open gift ${gift.id}`}
      disabled={locked}
      onClick={onClick}
      className={`relative h-[4.35rem] rounded-2xl border-none p-2 text-right font-serif text-[2.05rem] leading-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8a890] ${
        isFeaturedDay
          ? 'col-span-2 bg-[#55586F] text-[#FFFFFF] shadow-[0_12px_30px_rgba(85,88,111,0.25)]'
          : locked
            ? 'cursor-not-allowed bg-[#eaebee] text-[#afb4c0] saturate-0 shadow-soft-tile'
            : `bg-gradient-to-br text-[#8a90a1] shadow-soft-tile ${tileBackgrounds[(gift.id - 1) % tileBackgrounds.length]} hover:-translate-y-0.5`
      } ${opened ? 'ring-1 ring-[#d8c2b6]' : ''}`}
    >
      {locked && <span className={`absolute left-2 top-2 text-sm ${isFeaturedDay ? 'text-[#FFFFFF]' : 'text-[#c6cad6]'}`}>🔒</span>}
      {opened && <span className="absolute left-2 top-2 text-sm text-[#b08574]">✓</span>}
      <span>{gift.id}</span>
    </button>
  )
}
