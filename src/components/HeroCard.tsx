export const HeroCard = () => {
  const headerIllustration = `${import.meta.env.BASE_URL}happy-birthday.svg`

  return (
    <section className="rounded-mega bg-[#FFFFFF] px-5 pb-7 pt-4">
      <img
        src={headerIllustration}
        alt="Ilustración de pastel de cumpleaños"
        className="max-h-56 w-full object-contain opacity-90"
      />

      <h1 className="mt-5 text-center font-serif text-[3.2rem] leading-[0.9] text-[#48506a]">Birthday Advent</h1>
      <p className="mx-auto mt-4 max-w-[290px] text-center text-[1.05rem] leading-relaxed text-[#727a8f]">
        Descubre sorpresas diarias, porque celebrarte no cabe en un solo día.
      </p>
    </section>
  )
}
