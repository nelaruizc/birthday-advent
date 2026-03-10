import { Fragment, useEffect, useState } from 'react'
import type { DayData } from '../data/days'

type DayBottomSheetProps = {
  dayData: DayData | null
  isVisible: boolean
  closeDay: () => void
}


const renderTitleWithBold = (title: string) => {
  const segments = title.split(/(\*\*[^*]+\*\*)/g)

  return segments.map((segment, index) => {
    if (segment.startsWith('**') && segment.endsWith('**')) {
      return <strong key={`title-bold-${index}`}>{segment.slice(2, -2)}</strong>
    }

    return <Fragment key={`title-text-${index}`}>{segment}</Fragment>
  })
}

export const DayBottomSheet = ({ dayData, isVisible, closeDay }: DayBottomSheetProps) => {
  const [isGiftRevealed, setIsGiftRevealed] = useState(false)
  const celebratingSrc = `${import.meta.env.BASE_URL}celebrating.svg`
  const giftQrSrc = `${import.meta.env.BASE_URL}IMG_7830.jpeg`
  const dayNumber = dayData?.day ?? null
  const isDayEleven = dayNumber === 11

  useEffect(() => {
    if (!isVisible || !isDayEleven) {
      setIsGiftRevealed(false)
    }
  }, [isVisible, isDayEleven, dayNumber])

  if (!dayData) return null

  const imageSrc = dayData.day === 1 ? celebratingSrc : dayData.image ?? celebratingSrc
  const descriptionParagraphs = dayData.description.split('\n\n').filter(Boolean)

  return (
    <div
      className={`modal fixed inset-0 z-50 flex items-end bg-[rgba(0,0,0,0.4)] p-3 transition-opacity duration-200 ease-out ${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      onClick={closeDay}
      aria-hidden={!isVisible}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={`Day ${dayData.day} details`}
        className={`modal-content max-h-[90vh] w-full overflow-y-auto rounded-t-[26px] transition-all duration-200 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Cerrar tarjeta"
          onClick={closeDay}
          className="ml-auto block rounded-full px-2 text-[1.7rem] leading-none text-[#5f667d]/60 transition hover:bg-[#e8e2db] hover:text-[#5f667d]/90"
        >
          ×
        </button>

        <div className="card-header-illustration">
          <img
            src={imageSrc}
            alt={dayData.title}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        <div className="card-day-label mt-5 text-[#14283c]/55">DÍA {dayData.day}</div>
        <h2 className="card-title font-serif text-[#59607a]">{renderTitleWithBold(dayData.title)}</h2>

        <div className="card-body-text mx-auto mt-4 max-w-[32ch] text-base text-[#70778b]">
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={`paragraph-${index}`} className={index === 0 ? '' : 'mt-4'}>
              {paragraph}
            </p>
          ))}

          {isDayEleven && (
            <div className="mt-6 flex flex-col items-center overflow-hidden">
              <div
                className={`w-full overflow-hidden transition-all duration-[250ms] ease-out ${isGiftRevealed ? 'max-h-0 -translate-y-1 opacity-0' : 'max-h-24 translate-y-0 opacity-100'}`}
              >
                <button
                  type="button"
                  onClick={() => setIsGiftRevealed(true)}
                  className="mx-auto block rounded-xl border border-[#d6dce8] bg-[#eef2f8] px-5 py-2.5 text-sm font-medium text-[#5a647f] shadow-sm transition hover:bg-[#e5ebf4]"
                >
                  Descubrir el regalo
                </button>
              </div>

              <div
                className={`w-full overflow-hidden transition-all duration-[250ms] ease-out ${isGiftRevealed ? 'max-h-[420px] translate-y-0 opacity-100' : 'max-h-0 translate-y-[10px] opacity-0'}`}
              >
                <div className="mx-auto mt-1 w-fit rounded-2xl border border-[#d8dfe9] bg-white p-3 shadow-[0_8px_24px_rgba(20,40,60,0.12)]">
                  <img src={giftQrSrc} alt="Código QR del regalo final" className="h-40 w-40 rounded-lg object-cover" />
                </div>
                <p className="mt-2 text-center text-xs text-[#7a8298]">Escanea para descubrir tu regalo.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
