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
        <div className="rounded-mega bg-[#f8f5f1] p-6 text-center text-[#646c83] shadow-soft">
          <p>Gift not found.</p>
          <button className="mt-4 rounded-xl bg-[#eee3d9] px-4 py-2 text-[#6c5f5a]" onClick={() => navigate('/')}>
            Go back
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="safe-px py-8">
      <section className="mx-auto max-w-md rounded-mega bg-[#f8f5f1] p-5 text-[#646c83] shadow-soft">
        <div className="flex items-start justify-between">
          <button
            aria-label="Close gift detail"
            className="rounded-full p-1 text-3xl leading-none transition hover:bg-[#ece7e2]"
            onClick={() => navigate('/')}
          >
            ×
          </button>
          <div className="rounded-3xl bg-[#efe5cd] px-3 py-2 text-right text-[#6d6c73] shadow-inner-soft">
            <p className="text-xs">Gift</p>
            <p className="text-5xl font-semibold leading-none">{gift.id}</p>
          </div>
        </div>

        <div className="mx-auto mt-3 h-44 w-44 rounded-full bg-gradient-to-b from-[#ded9ce] to-[#f0ebe5] p-2 shadow-soft-tile">
          <div className="flex h-full w-full items-end justify-center rounded-full bg-[#f8f4ef] pb-5 text-6xl">🎁</div>
        </div>

        <h1 className="mt-6 max-w-72 font-serif text-6xl leading-[0.9] text-[#59607a]">{gift.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-[#747b90]">{gift.description}</p>
        <p className="mt-3 text-base leading-relaxed text-[#747b90]">
          Que este detalle te saque una sonrisa y te recuerde lo especial que es este día.
        </p>

        <h2 className="mt-6 font-serif text-3xl text-[#59607a]">Community Birthday Collection</h2>
        <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
          {[1, 2, 3, 4].map((card) => (
            <article key={card} className="min-w-24 rounded-2xl bg-gradient-to-b from-[#f4eee7] to-[#f8f5f1] p-2 shadow-soft-tile">
              <div className="h-16 rounded-xl bg-gradient-to-br from-[#eadfd4] to-[#e0e7f0]" />
              <p className="mt-1 text-xs font-medium">Idea {card}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
