export const START_DATE = '2026-03-01T00:00:00+01:00'
export const ALL_UNLOCKED = false

export const isGiftUnlocked = (giftId: number, now = new Date()) => {
  if (ALL_UNLOCKED) return true
  if (giftId === 1) return true
  const start = new Date(START_DATE).getTime()
  const unlockTime = start + (giftId - 1) * 24 * 60 * 60 * 1000
  return now.getTime() >= unlockTime
}
