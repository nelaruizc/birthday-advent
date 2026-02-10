export const BIRTHDAY_DATE = '2026-03-11T00:00:00+01:00'

export type Countdown = {
  days: number
  hours: number
  minutes: number
}

export const getCountdown = (now = new Date()): Countdown => {
  const targetTime = new Date(BIRTHDAY_DATE).getTime()
  const diffMs = Math.max(targetTime - now.getTime(), 0)

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60)

  return { days, hours, minutes }
}
