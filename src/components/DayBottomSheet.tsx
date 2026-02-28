import type { DayData } from '../data/days'

type DayBottomSheetProps = {
  dayData: DayData | null
  isVisible: boolean
  closeDay: () => void
}

export const DayBottomSheet = ({ dayData, isVisible, closeDay }: DayBottomSheetProps) => {
  if (!dayData) return null
  const celebratingSrc = `${import.meta.env.BASE_URL}celebrating.svg`
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
        <h2 className="card-title font-serif text-[#59607a]">{dayData.title}</h2>
        <div className="card-body-text mx-auto mt-4 max-w-[32ch] text-base text-[#70778b]">
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={`paragraph-${index}`} className={index === 0 ? '' : 'mt-4'}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  )
}
