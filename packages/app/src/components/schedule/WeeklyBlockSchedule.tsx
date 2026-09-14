import { useMemo, useState } from 'react'

export interface WeekBlockEvent {
  id: string
  title: string
  start: Date | string
  end: Date | string
  isEnrolled?: boolean
  trainer?: string
  hall?: string | null
  description?: string | null
}

interface ParsedWeekBlockEvent extends Omit<WeekBlockEvent, 'start' | 'end'> {
  start: Date
  end: Date
}

interface WeeklyBlockScheduleProps {
  events: WeekBlockEvent[]
  onEventClick?: (event: ParsedWeekBlockEvent) => void
  /** How many weeks away from the current one a visitor may browse to, in either direction. */
  maxWeekOffset?: number
}

const DAY_MS = 24 * 60 * 60 * 1000

function startOfWeek(date: Date): Date {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  const day = d.getDay() // 0 = Sunday .. 6 = Saturday
  const diffToMonday = (day === 0 ? -6 : 1) - day
  d.setDate(d.getDate() + diffToMonday)
  return d
}

function sameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function formatTime(d: Date): string {
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
}

export function WeeklyBlockSchedule({ events, onEventClick, maxWeekOffset = 2 }: WeeklyBlockScheduleProps) {
  const [weekOffset, setWeekOffset] = useState(0)

  const weekStart = useMemo(() => {
    const base = startOfWeek(new Date())
    base.setDate(base.getDate() + weekOffset * 7)
    return base
  }, [weekOffset])

  const days = useMemo(() => Array.from({ length: 7 }, (_, i) => new Date(weekStart.getTime() + i * DAY_MS)), [
    weekStart,
  ])

  const eventsByDay = useMemo(() => {
    const parsed: ParsedWeekBlockEvent[] = events.map((e) => ({
      ...e,
      start: e.start instanceof Date ? e.start : new Date(e.start),
      end: e.end instanceof Date ? e.end : new Date(e.end),
    }))
    return days.map((day) =>
      parsed.filter((e) => sameDay(e.start, day)).sort((a, b) => a.start.getTime() - b.start.getTime())
    )
  }, [events, days])

  const rangeLabel = useMemo(() => {
    const end = new Date(weekStart.getTime() + 6 * DAY_MS)
    const fmt = (d: Date) => d.toLocaleDateString([], { day: 'numeric', month: 'short' })
    return `${fmt(weekStart)} – ${fmt(end)}`
  }, [weekStart])

  const today = new Date()

  return (
    <div>
      <div className="mb-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => setWeekOffset((o) => Math.max(-maxWeekOffset, o - 1))}
          disabled={weekOffset <= -maxWeekOffset}
          className="rounded-lg border border-[#ffd700]/30 px-3 py-1.5 text-[#ffd700] transition-colors hover:bg-[#ffd700]/10 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Previous week"
        >
          ←
        </button>
        <div className="text-center">
          <div className="font-bold text-[#ffd700] text-sm uppercase tracking-wide">
            {weekOffset === 0 ? 'This Week' : weekOffset < 0 ? 'Previous Week' : 'Next Week'}
          </div>
          <div className="text-gray-500 text-xs">{rangeLabel}</div>
        </div>
        <button
          type="button"
          onClick={() => setWeekOffset((o) => Math.min(maxWeekOffset, o + 1))}
          disabled={weekOffset >= maxWeekOffset}
          className="rounded-lg border border-[#ffd700]/30 px-3 py-1.5 text-[#ffd700] transition-colors hover:bg-[#ffd700]/10 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Next week"
        >
          →
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="grid min-w-[42rem] grid-cols-7 divide-x divide-[#ffd700]/20">
          {days.map((day, i) => {
            const dayEvents = eventsByDay[i]
            const isToday = sameDay(day, today)
            return (
              <div key={day.toISOString()} className="flex flex-col px-2">
                <div className={`mb-3 border-b pb-2 text-center ${isToday ? 'border-[#ffd700]/40' : 'border-[#ffd700]/10'}`}>
                  <div className={`font-bold text-xs uppercase tracking-wider ${isToday ? 'text-[#ffd700]' : 'text-[#ffd700]/70'}`}>
                    {day.toLocaleDateString([], { weekday: 'short' })}
                  </div>
                  <div className="text-gray-500 text-xs">{day.toLocaleDateString([], { day: 'numeric', month: 'short' })}</div>
                </div>

                <div className="flex flex-col gap-1.5">
                  {dayEvents.length === 0 ? (
                    <span className="text-center text-gray-700 text-xs italic">—</span>
                  ) : (
                    dayEvents.map((event) => (
                      <button
                        key={event.id}
                        type="button"
                        onClick={() => onEventClick?.(event)}
                        className="w-full rounded-md border border-[#ffd700]/10 bg-white/[0.03] px-2 py-1.5 text-left transition-colors hover:border-[#ffd700]/30 hover:bg-white/[0.06]"
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffd700]/60" />
                          <span className="font-mono text-[#ffd700]/80 text-[0.65rem]">
                            {formatTime(event.start)}–{formatTime(event.end)}
                          </span>
                        </div>
                        <div className="mt-0.5 truncate text-gray-300 text-xs">{event.title}</div>
                      </button>
                    ))
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
