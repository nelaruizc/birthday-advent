export type DayData = {
  day: number
  title: string
  description: string
  image?: string
}

export const daysData: DayData[] = [
  {
    day: 1,
    title: '¡Sorpresa!',
    description:
      'Este es tu propio calendario de cumpleaños,\nhecho con mucho amor especialmente para ti.\n\nSpoiler:\nEmpiezan los regalitos.\n\nEl primero te espera encima de la librería del despacho.',
    image: undefined,
  },
  {
    day: 2,
    title: '¿QUÉ SERÁ, QUÉ SERÁ?',
    description:
      'Sé que el regalo del día de hoy será uno de tus favoritos.\n\nDisfrútalo. Pero primero tendrás que buscarlo, está en alguna de las sillas del comedor (ten cuidado).\n\nSi sonríes un poco, sabré que te ha gustado.',
    image: undefined,
  },
  {
    day: 3,
    title: 'Hoy no hay que encontrar la bolsa de regalo, pero siguen las sorpresas.',
    description:
      'Los detalles no siempre vienen en una bolsa de regalo.\n\n10 minutitos de relax siempre vienen bien. Esta noche solo tendrás que relajarte: bolsa caliente, una infusión, y…\n\nUn masaje de pies, especialmente para ti.',
    image: undefined,
  },
  {
    day: 4,
    title: 'Esto va de pequeñas cosas que te gustan mucho.',
    description:
      'Por si no ha quedado claro, me gusta la idea de darte pequeños detalles que sé que te gustan mucho.\n\nPodrás encontrar el regalo del día de hoy justo al lado del sofá.',
    image: undefined,
  },
  {
    day: 5,
    title: 'Little Treat',
    description: 'Placeholder: un pequeño capricho pensado para sacarte una sonrisa.',
    image: '/happy-birthday.svg',
  },
  {
    day: 6,
    title: 'Photo Mission',
    description: 'Placeholder: captura una foto del momento más bonito del día.',
    image: '/birthday-cake.svg',
  },
  {
    day: 7,
    title: 'Warm Wishes',
    description: 'Placeholder: una tarjeta con mensajes bonitos para seguir celebrando.',
    image: '/happy-birthday.svg',
  },
  {
    day: 8,
    title: 'Creative Break',
    description: 'Placeholder: una actividad creativa rápida para activar inspiración.',
    image: '/birthday-cake.svg',
  },
  {
    day: 9,
    title: 'Movie Moment',
    description: 'Placeholder: prepara manta y peli para una noche cozy.',
    image: '/happy-birthday.svg',
  },
  {
    day: 10,
    title: 'Birthday Plan',
    description: 'Placeholder: organiza tu plan ideal para el gran día.',
    image: '/birthday-cake.svg',
  },
  {
    day: 11,
    title: 'Final Surprise',
    description: 'Placeholder: el cierre del calendario trae el mensaje final más especial. ✨',
    image: '/happy-birthday.svg',
  },
]
