const OPENED_GIFTS_KEY = 'birthday-advent-opened-gifts'

export const getOpenedGifts = (): number[] => {
  try {
    const raw = localStorage.getItem(OPENED_GIFTS_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((v) => typeof v === 'number') : []
  } catch {
    return []
  }
}

export const saveOpenedGift = (giftId: number): number[] => {
  const opened = getOpenedGifts()
  const updated = opened.includes(giftId) ? opened : [...opened, giftId]
  localStorage.setItem(OPENED_GIFTS_KEY, JSON.stringify(updated))
  return updated
}
