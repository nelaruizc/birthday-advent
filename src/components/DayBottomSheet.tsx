import type { DayData } from '../data/days'

type DayBottomSheetProps = {
  dayData: DayData | null
  isVisible: boolean
  closeDay: () => void
}

export const DayBottomSheet = ({ dayData, isVisible, closeDay }: DayBottomSheetProps) => {
  if (!dayData) return null
  const celebratingSrc = `${import.meta.env.BASE_URL}celebrating.svg`
  const imageSrc = dayData.day === 1 ? celebratingSrc : dayData.image
  const descriptionParagraphs = dayData.description.split('\n\n').filter(Boolean)

  return (
    <div
      className={`modal fixed inset-0 z-50 flex items-end bg-[rgba(0,0,0,0.4)] p-3 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      onClick={closeDay}
      aria-hidden={!isVisible}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={`Day ${dayData.day} details`}
        className={`modal-content max-h-[90vh] w-full overflow-y-auto rounded-t-[24px] bg-[#f5f1ec] shadow-[0_-12px_45px_rgba(40,41,53,0.18)] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Cerrar tarjeta"
          onClick={closeDay}
          className="ml-auto block rounded-full px-2 text-3xl leading-none text-[#7d8399] transition hover:bg-[#e8e2db]"
        >
          ×
        </button>

        {dayData.day === 1 ? (
          <div className="card-header-illustration">
            <img
              src={celebratingSrc}
              alt="Celebración"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        ) : null}

        {imageSrc &&
          (dayData.day === 1 ? null : (
            <div className="mt-1 overflow-hidden rounded-3xl bg-gradient-to-br from-[#ece6dd] to-[#f6f2ed] p-3">
              <img
                src={imageSrc}
                alt={dayData.title}
                className="mx-auto h-40 w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          ))}

        <p className="card-day-label mt-5 text-[#8f96a9]">Día {dayData.day}</p>
        <h3 className="card-title font-serif text-[#59607a]">{dayData.title}</h3>
        <div className="card-body-text mt-3 text-base text-[#747b90]">
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={`paragraph-${index}`} className={index === 0 ? '' : 'mt-2'}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  )
}
