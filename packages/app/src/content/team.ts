/**
 * Trainers shown on /team. `image` points at a file under public/trainers/ -
 * drop a new photo there and update the path to swap it.
 */
export interface Trainer {
  name: string
  role: string
  image: string
  description: string
}

export const trainers: Trainer[] = [
  {
    name: 'Anna Kowalska',
    role: 'Ballroom Dance',
    image: '/trainers/trainer_1.webp',
    description: 'Multiple Polish Champion with 10 years of teaching experience.',
  },
  {
    name: 'Janusz Wiśniewski',
    role: 'Ballroom Dance',
    image: '/trainers/trainer_ballroom_male.webp',
    description: 'Expert in standard ballroom dances, international judge.',
  },
  {
    name: 'Maria Wiśniewska',
    role: 'Contemporary Dance',
    image: '/trainers/trainer_3.webp',
    description: 'Specialist in technique and artistic expression in dance.',
  },
  {
    name: 'Krzysztof Zieliński',
    role: 'Salsa & Bachata',
    image: '/trainers/trainer_4.webp',
    description: 'Feel the rhythm of Latin dances under the guidance of an experienced dancer.',
  },
  {
    name: 'Katarzyna Lewandowska',
    role: 'Ballet for Kids',
    image: '/trainers/trainer_5.webp',
    description: 'Patient and smiling instructor for the youngest talents.',
  },
  {
    name: 'Tomasz Dąbrowski',
    role: 'Breakdance',
    image: '/trainers/trainer_6.webp',
    description: 'Master of acrobatics and style, teaches you to control your body.',
  },
]
