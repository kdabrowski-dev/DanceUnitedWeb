import { useEffect } from 'react'
import type { MetaArgs } from 'react-router'
import { useNavigate } from 'react-router'

export function meta(_args: MetaArgs) {
  return [
    { title: 'About Us - Dance United' },
    { name: 'description', content: 'The story, mission, and founder behind Dance United Gdańsk.' },
  ]
}

export default function About() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/#about', { replace: true })
  }, [navigate])

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-gray-950 text-white">
      <div className="text-center">
        <p className="text-gray-400 text-lg">Redirecting to About Us...</p>
      </div>
    </div>
  )
}
