import type { MetaArgs } from 'react-router'
import { ShinyText } from '../components/ui'
import { trainers } from '../content/team'
import { asset } from '../lib/asset'

export function meta(_args: MetaArgs) {
  return [
    { title: 'Our Team - Dance United' },
    { name: 'description', content: 'Meet the trainers and instructors at Dance United Gdańsk.' },
  ]
}

export default function Team() {
  return (
    <div className="container mx-auto px-4 pt-4 pb-12">
      <div className="mb-12 text-center">
        <ShinyText as="h1" variant="title" className="!block !w-full mb-4 text-center text-5xl">
          Our Team
        </ShinyText>
        <ShinyText as="p" variant="body" className="!block mx-auto max-w-2xl text-center text-gray-300 text-xl">
          Our team is a group of enthusiasts, experienced dancers, and educators who share their knowledge with
          commitment. Meet the people who will introduce you to the world of dance!
        </ShinyText>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {trainers.map((trainer) => (
          <div
            key={trainer.name}
            className="group relative overflow-hidden rounded-xl border border-amber-900/20 bg-gray-900/40 p-6 transition-all hover:bg-gray-900/60"
          >
            <div className="mb-4 aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={asset(trainer.image)}
                alt={trainer.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="text-center">
              <ShinyText as="h3" variant="title" className="mb-1 text-2xl text-gold">
                {trainer.name}
              </ShinyText>
              <ShinyText
                as="p"
                variant="body"
                className="mb-3 font-semibold text-amber-500 text-sm uppercase tracking-wider"
              >
                {trainer.role}
              </ShinyText>
              <p className="text-gray-300">{trainer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
