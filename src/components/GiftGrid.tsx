import { useEffect, useState } from 'react'
import type { DayData } from '../data/days'
import { DayBottomSheet } from './DayBottomSheet'
import { GiftTile } from './GiftTile'

type GiftGridProps = {
  daysData: DayData[]
  openedGifts: number[]
  isUnlocked: (id: number) => boolean
  markOpened: (id: number) => void
}

export const GiftGrid = ({ daysData, openedGifts, isUnlocked, markOpened }: GiftGridProps) => {
  const [activeDay, setActiveDay] = useState<DayData | null>(null)
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)
  const [lockedPulseDay, setLockedPulseDay] = useState<number | null>(null)

  const openDay = (dayNumber: number) => {
    if (!isUnlocked(dayNumber)) {
      setLockedPulseDay(dayNumber)
      window.setTimeout(() => setLockedPulseDay((current) => (current === dayNumber ? null : current)), 240)
      return
    }

    const dayData = daysData.find((day) => day.day === dayNumber)
    if (!dayData) return

    setActiveDay(dayData)
    setIsOverlayVisible(true)
    markOpened(dayNumber)
  }

  const closeDay = () => {
    setIsOverlayVisible(false)
  }

  useEffect(() => {
    if (isOverlayVisible || !activeDay) return

    const cleanupTimer = window.setTimeout(() => setActiveDay(null), 300)
    return () => window.clearTimeout(cleanupTimer)
  }, [activeDay, isOverlayVisible])

  return (
    <>
      <div className="mt-8 grid grid-cols-3 gap-x-3 gap-y-3 sm:grid-cols-4">
        {daysData.map((dayData) => {
          const locked = !isUnlocked(dayData.day)
          const opened = openedGifts.includes(dayData.day)

          return (
            <GiftTile
              key={dayData.day}
              dayData={dayData}
              locked={locked}
              opened={opened}
              onClick={() => openDay(dayData.day)}
              pulseLocked={lockedPulseDay === dayData.day}
            />
          )
        })}
      </div>

      <DayBottomSheet dayData={activeDay} isVisible={isOverlayVisible} closeDay={closeDay} />
    </>
  )
}
