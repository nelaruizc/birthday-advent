import { useCallback, useEffect, useMemo, useState } from 'react'
import { BackgroundPattern } from './components/BackgroundPattern'
import { CountdownCard } from './components/CountdownCard'
import { FloatingCountdown } from './components/FloatingCountdown'
import { HeroCard } from './components/HeroCard'
import { daysData } from './data/days'
import { getCountdown } from './utils/countdown'
import { getOpenedGifts, saveOpenedGift } from './utils/storage'
import { isGiftUnlocked } from './utils/unlock'

const Home = ({
  openedGifts,
  countdown,
  markOpened,
}: {
  openedGifts: number[]
  countdown: ReturnType<typeof getCountdown>
  markOpened: (id: number) => void
}) => (
  <>
    <HeroCard />
    <FloatingCountdown countdown={countdown} />
    <CountdownCard
      daysData={daysData}
      openedGifts={openedGifts}
      isUnlocked={(day) => isGiftUnlocked(day, new Date())}
      markOpened={markOpened}
    />
    <footer className="flex items-center justify-center gap-1 pb-2 pt-1 text-center text-sm text-[#6e7488]">
      <span>Made with</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-[#c28a79]"
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
        <Home openedGifts={openedGifts} countdown={countdown} markOpened={markOpened} />
      </BackgroundPattern>
    ),
    [countdown, markOpened, openedGifts],
  )

  return layout
}

export default App
