import { useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { gifts } from '../data/gifts'

type Props = {
  markOpened: (id: number) => void
}

export const GiftDetail = ({ markOpened }: Props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const giftId = Number(id)

  const gift = useMemo(() => gifts.find((item) => item.id === giftId), [giftId])

  useEffect(() => {
    if (gift) markOpened(gift.id)
  }, [gift, markOpened])

  if (!gift) {
    return (
      <div className="safe-px py-8">
        <div className="glass-panel rounded-mega p-6 text-center">
          <p>Gift not found.</p>
          <button className="mt-4 rounded-xl bg-white px-4 py-2 text-[#0e2660]" onClick={() => navigate('/')}>
            Go back
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="safe-px py-8">
      <section className="mx-auto max-w-md rounded-mega bg-[#f6f8fb] p-5 text-[#11285b] shadow-dreamy">
        <div className="flex items-start justify-between">
          <button
            aria-label="Close gift detail"
            className="rounded-full p-1 text-3xl leading-none transition hover:bg-slate-200/60"
            onClick={() => navigate('/')}
          >
            ×
          </button>
          <div className="rounded-2xl bg-[#bfe5ff] px-3 py-2 text-right">
            <p className="text-xs">Gift</p>
            <p className="text-5xl font-semibold leading-none">{gift.id}</p>
          </div>
        </div>

        <div className="mx-auto mt-3 h-44 w-44 rounded-full bg-gradient-to-b from-[#2f9b78] via-[#2d659f] to-[#9fdde4] p-2">
          <div className="flex h-full w-full items-end justify-center rounded-full bg-[#eff3f7] pb-5 text-6xl">🎁</div>
        </div>
        <div className="mx-auto -mt-1 h-4 w-28 rounded-full bg-[#3d7f5d]" />
        <div className="mx-auto mt-1 h-4 w-32 bg-[#98b79f]" />

        <h1 className="mt-5 max-w-72 text-6xl font-serif leading-[0.9]">{gift.title}</h1>
        <p className="mt-4 text-base text-[#2a3d6b]">{gift.description}</p>
        <p className="mt-3 text-base text-[#2a3d6b]">Que este detalle te saque una sonrisa y te recuerde lo especial que es este día.</p>

        <h2 className="mt-6 text-3xl font-serif">Community Birthday Collection</h2>
        <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
          {[1, 2, 3, 4].map((card) => (
            <article
              key={card}
              className="min-w-24 rounded-2xl bg-gradient-to-b from-[#f7ecd6] to-[#f5f8f6] p-2 shadow"
            >
              <div className="h-16 rounded-xl bg-gradient-to-br from-[#f1d3c9] to-[#d2f0dc]" />
              <p className="mt-1 text-xs font-medium">Idea {card}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
