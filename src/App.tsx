import { useCallback, useEffect, useMemo, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { BackgroundPattern } from './components/BackgroundPattern'
import { CountdownCard, FloatingCountdown } from './components/CountdownCard'
import { GiftDetail } from './components/GiftDetail'
import { HeroCard } from './components/HeroCard'
import { gifts } from './data/gifts'
import { getCountdown } from './utils/countdown'
import { getOpenedGifts, saveOpenedGift } from './utils/storage'
import { isGiftUnlocked } from './utils/unlock'

const Home = ({
  openedGifts,
  countdown,
}: {
  openedGifts: number[]
  countdown: ReturnType<typeof getCountdown>
}) => (
  <>
    <HeroCard />
    <FloatingCountdown countdown={countdown} />
    <CountdownCard
      gifts={gifts}
      openedGifts={openedGifts}
      isUnlocked={(id) => isGiftUnlocked(id, new Date())}
    />
    <footer className="flex items-center justify-center gap-1 pb-8 pt-1 text-center text-sm text-blue-100/80">
      <span>Made with</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="icon icon-tabler icons-tabler-filled icon-tabler-heart"
        aria-label="heart icon"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
      </svg>
      <span>, by Nela.</span>
    </footer>
  </>
)

function App() {
  const [openedGifts, setOpenedGifts] = useState<number[]>(() => getOpenedGifts())
  const [countdown, setCountdown] = useState(() => getCountdown())

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown()), 60000)
    return () => window.clearInterval(timer)
  }, [])

  const markOpened = useCallback((id: number) => {
    setOpenedGifts((current) => {
      if (current.includes(id)) return current
      return saveOpenedGift(id)
    })
  }, [])

  const layout = useMemo(
    () => (
      <BackgroundPattern>
        <Routes>
          <Route path="/" element={<Home openedGifts={openedGifts} countdown={countdown} />} />
          <Route path="/gift/:id" element={<GiftDetail markOpened={markOpened} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BackgroundPattern>
    ),
    [countdown, markOpened, openedGifts],
  )

  return layout
}

export default App
