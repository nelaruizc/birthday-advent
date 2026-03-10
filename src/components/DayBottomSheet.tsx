import { useEffect, useState } from 'react'
import type { DayData } from '../data/days'

type DayBottomSheetProps = {
  dayData: DayData | null
  isVisible: boolean
  closeDay: () => void
}

export const DayBottomSheet = ({ dayData, isVisible, closeDay }: DayBottomSheetProps) => {
  const [showQr, setShowQr] = useState(false)

  useEffect(() => {
    setShowQr(false)
  }, [dayData?.day, isVisible])

  if (!dayData) return null
  const celebratingSrc = `${import.meta.env.BASE_URL}celebrating.svg`
  const imageSrc = dayData.day === 1 ? celebratingSrc : dayData.image ?? celebratingSrc
  const descriptionParagraphs = dayData.description.split('\n\n').filter(Boolean)
  const isFinalDay = dayData.day === 11
  const qrImageSrc = `${import.meta.env.BASE_URL}IMG_7830.jpeg`

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
        <h2 className="card-title font-serif text-[#59607a]">{dayData.title}</h2>

        {isFinalDay ? (
          <div className="mx-auto mt-4 max-w-[32ch] text-center">
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={`final-paragraph-${index}`} className={`text-base leading-relaxed text-[#70778b] ${index === 0 ? '' : 'mt-4'}`}>
                {paragraph}
              </p>
            ))}

            <button
              type="button"
              onClick={() => setShowQr(true)}
              className={`mx-auto mt-6 inline-flex min-h-11 items-center justify-center rounded-2xl border border-[#d6cdc2] bg-[#eee5da] px-6 py-3 text-sm font-medium text-[#5f667d] shadow-sm transition-all duration-[240ms] ease-out hover:-translate-y-0.5 hover:bg-[#e8ddcf] ${
                showQr ? 'pointer-events-none -translate-y-1 opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              Descubrir el regalo
            </button>

            <div
              className={`mx-auto overflow-hidden transition-all duration-[260ms] ease-out ${showQr ? 'mt-6 max-h-[420px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-[10px]'}`}
              aria-hidden={!showQr}
            >
              <div className="mx-auto w-fit rounded-2xl border border-[#e6ddd3] bg-white p-4 shadow-[0_10px_28px_rgba(45,58,85,0.12),0_0_26px_rgba(255,255,255,0.45)]">
                <img
                  src={qrImageSrc}
                  alt="Código QR del regalo"
                  className="h-[200px] w-[200px] rounded-lg object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-[#70778b]">Escanea el código.</p>
            </div>
          </div>
        ) : (
          <div className="card-body-text mx-auto mt-4 max-w-[32ch] text-base text-[#70778b]">
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={`paragraph-${index}`} className={index === 0 ? '' : 'mt-4'}>
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
