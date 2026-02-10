import { useCallback, useEffect, useMemo, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { BackgroundPattern } from './components/BackgroundPattern'
import { CountdownCard } from './components/CountdownCard'
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
    <CountdownCard
      countdown={countdown}
      gifts={gifts}
      openedGifts={openedGifts}
      isUnlocked={(id) => isGiftUnlocked(id, new Date())}
    />
    <footer className="pb-8 pt-1 text-center text-sm text-blue-100/80">Made with love, by Nela</footer>
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
