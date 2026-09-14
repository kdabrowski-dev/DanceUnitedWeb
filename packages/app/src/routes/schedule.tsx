import { useState } from 'react'
import { Link } from 'react-router'
import type { MetaArgs } from 'react-router'
import { ShinyText } from '../components/ui'
import { type ScheduleClass, weeklySchedule } from '../content/schedule'

export function meta(_args: MetaArgs) {
  return [
    { title: 'Schedule - Dance United' },
    { name: 'description', content: 'Weekly class schedule at Dance United Gdańsk.' },
  ]
}

// 2024-01-01 was a Monday - used only as a stable reference date so weekday names come out
// in the visitor's own browser language, without this page needing to know "today".
function dayName(day: number): string {
  return new Date(2024, 0, day + 1).toLocaleDateString([], { weekday: 'long' })
}

export default function Schedule() {
  const [selectedClass, setSelectedClass] = useState<ScheduleClass | null>(null)

  const days = Array.from({ length: 7 }, (_, day) =>
    weeklySchedule.filter((c) => c.day === day).sort((a, b) => a.start.localeCompare(b.start))
  )

  return (
    <div className="container relative mx-auto p-8 text-center">
      <ShinyText as="h1" variant="title" className="mb-8 text-4xl">
        Schedule
      </ShinyText>
      <ShinyText as="p" variant="body" className="mb-12 text-xl">
        Find a class that fits your time.
      </ShinyText>

      <div className="rounded-xl border border-[#ffd700]/20 bg-[#1a1a1a]/50 p-6 shadow-xl backdrop-blur-sm">
        <div className="overflow-x-auto">
          <div className="grid min-w-[42rem] grid-cols-7 divide-x divide-[#ffd700]/20">
            {days.map((dayClasses, day) => (
              <div key={day} className="flex flex-col px-2">
                <div className="mb-3 border-[#ffd700]/10 border-b pb-2 text-center">
                  <div className="font-bold text-[#ffd700]/70 text-xs uppercase tracking-wider">{dayName(day)}</div>
                </div>

                <div className="flex flex-col gap-1.5">
                  {dayClasses.length === 0 ? (
                    <span className="text-center text-gray-700 text-xs italic">—</span>
                  ) : (
                    dayClasses.map((c) => (
                      <button
                        key={`${c.day}-${c.start}-${c.title}`}
                        type="button"
                        onClick={() => setSelectedClass(c)}
                        className="w-full rounded-md border border-[#ffd700]/10 bg-white/[0.03] px-2 py-1.5 text-left transition-colors hover:border-[#ffd700]/30 hover:bg-white/[0.06]"
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffd700]/60" />
                          <span className="font-mono text-[#ffd700]/80 text-[0.65rem]">
                            {c.start}–{c.end}
                          </span>
                        </div>
                        <div className="mt-0.5 truncate text-gray-300 text-xs">{c.title}</div>
                      </button>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedClass && (
        <div
          className="fade-in fixed inset-0 z-50 flex animate-in items-center justify-center bg-black/60 p-4 backdrop-blur-sm duration-200"
          onClick={() => setSelectedClass(null)}
        >
          <div
            className="zoom-in-95 relative w-full max-w-md animate-in rounded-xl border border-[#ffd700]/40 bg-[#1a1a1a] p-8 shadow-2xl duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedClass(null)}
              className="absolute top-4 right-4 text-[#ffd700]/60 transition-colors hover:text-[#ffd700]"
            >
              ✕
            </button>
            <ShinyText as="h2" variant="title" className="mb-4 text-2xl text-[#ffd700]">
              {selectedClass.title}
            </ShinyText>
            <div className="space-y-3 text-left">
              <div className="flex items-center justify-between text-gray-400 text-sm">
                <span>
                  🕒 {dayName(selectedClass.day)}, {selectedClass.start} - {selectedClass.end}
                </span>
                <span className="rounded border border-[#ffd700]/20 bg-[#ffd700]/10 px-2 py-1 font-bold text-[#ffd700] text-xs">
                  {selectedClass.hall}
                </span>
              </div>
              <p className="border-gray-800 border-t pt-3 text-gray-300">{selectedClass.description}</p>
              <div className="pt-2 font-semibold text-[#ffd700]/80 text-sm">💃 Trainer: {selectedClass.trainer}</div>
            </div>

            <div className="mt-8 border-[#ffd700]/10 border-t pt-4">
              <Link
                to="/contact"
                className="block w-full rounded-lg bg-[#ffd700] py-2 text-center font-bold text-black shadow-lg transition-colors hover:bg-[#e6c200] hover:shadow-[#ffd700]/20"
              >
                Contact Us to Enroll ✨
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
