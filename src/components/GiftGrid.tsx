import { useNavigate } from 'react-router-dom'
import type { Gift } from '../data/gifts'
import { GiftTile } from './GiftTile'

type GiftGridProps = {
  gifts: Gift[]
  openedGifts: number[]
  isUnlocked: (id: number) => boolean
}

export const GiftGrid = ({ gifts, openedGifts, isUnlocked }: GiftGridProps) => {
  const navigate = useNavigate()

  return (
    <div className="mt-4 grid grid-cols-3 gap-2.5">
      {gifts.map((gift) => {
        const locked = !isUnlocked(gift.id)
        const opened = openedGifts.includes(gift.id)

        return (
          <GiftTile
            key={gift.id}
            gift={gift}
            locked={locked}
            opened={opened}
            onClick={() => navigate(`/gift/${gift.id}`)}
          />
        )
      })}
    </div>
  )
}
