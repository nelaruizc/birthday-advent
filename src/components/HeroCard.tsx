export const HeroCard = () => {
  const goToAdventure = () => {
    const section = document.getElementById('adventure')
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="glass-panel rounded-mega p-4 pb-5">
      <div className="overflow-hidden rounded-[28px] bg-gradient-to-b from-[#3259ab] via-[#2c4f98] to-[#1d3374] p-4">
        <div className="relative h-56 rounded-2xl bg-[#26468d]">
          <div className="absolute bottom-4 left-4 right-4 h-7 rounded-full bg-[#d16d48]/80" />
          <div className="absolute bottom-10 left-5 h-20 w-20 rounded-full bg-[#e0dbc2]">
            <div className="absolute left-8 top-7 h-5 w-5 rounded-full bg-[#1c3765]" />
          </div>
          <div className="absolute right-5 top-7 h-44 w-20 rounded-t-full bg-[#2f9456]" />
          <div className="absolute right-8 top-3 text-5xl text-[#ffd85a]">★</div>
          <div className="absolute left-1/2 top-4 h-16 w-16 -translate-x-1/2 rounded-full bg-[#1a9887]" />
        </div>

        <h1 className="mt-4 text-center font-serif text-6xl leading-[0.9]">Birthday Advent</h1>
        <p className="mx-auto mt-3 max-w-[260px] text-center text-sm text-blue-100/90">
          Descubre sorpresas diarias de cumpleaños, mini planes y recuerdos bonitos para celebrar a tu ritmo.
        </p>
      </div>
      <button
        aria-label="Enter birthday adventure"
        onClick={goToAdventure}
        className="mt-4 w-full rounded-2xl bg-slate-100 py-3 text-lg font-medium text-[#112456] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Enter
      </button>
    </section>
  )
}
