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
    title: 'Hoy va de elegir',
    description:
      'Hoy tienes la potestad de elegir la cenita, y el postre lo elijo yo, así que en esa parte no puedes mandar porque será algo que te gusta mucho y comes poco. Ya no más pistas.\n\n¿Qué quieres cenar, mi amor?',
    image: undefined,
  },
  {
    day: 6,
    title: 'Hoy se juega al escondite',
    description:
      'Podrás encontrar el regalo de hoy en alguna de tus gavetas, recuerda que tienes varias gavetas en varios sitios.\n\nComo eres muy lista, seguro que lo encuentras súper rápido.',
    image: undefined,
  },
  {
    day: 7,
    title: 'Como diría Ed Sheeran: we made these memories for ourselves',
    description:
      'El regalo de hoy está en alguna parte de la cocina. Puede estar en cualquier parte.',
    image: undefined,
  },
  {
    day: 8,
    title: 'Un caprichito',
    description:
      'Algunos regalos simplemente se disfrutan, y el de hoy es justamente uno de esos.\n\nTe está esperando en la encimera de la cocina.',
    image: undefined,
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
