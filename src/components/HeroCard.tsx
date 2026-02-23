export const HeroCard = () => {
  return (
    <section className="glass-panel rounded-mega p-4 pb-5">
      <div className="overflow-hidden rounded-[28px] bg-gradient-to-b from-[#3259ab] via-[#2c4f98] to-[#1d3374] p-4">
        <img
          src={`${import.meta.env.BASE_URL}birthday-cake.svg`}
          alt="Birthday cake"
          className="h-56 w-full rounded-2xl object-cover"
        />

        <h1 className="mt-4 text-center font-serif text-6xl leading-[0.9]">Birthday Advent</h1>
        <p className="mx-auto mt-3 max-w-[260px] text-center text-sm text-blue-100/90">
          Descubre sorpresas diarias, porque celebrarte no cabe en un solo día.
        </p>
      </div>
    </section>
  )
}
