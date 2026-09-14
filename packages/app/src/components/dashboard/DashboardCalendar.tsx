import type { DateSelectArg, EventClickArg, EventDropArg, EventInput } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ShinyText } from '../ui'

export interface CalendarLegendItem {
  label: string
  color: string
}

interface DashboardCalendarProps {
  events?: EventInput[]
  onDateSelect?: (selectInfo: DateSelectArg) => void
  onEventClick?: (clickInfo: EventClickArg) => void
  onEventDrop?: (dropInfo: EventDropArg) => void
  readOnly?: boolean
  editable?: boolean
  height?: string | number | 'auto'
  /** Explains what the event colors mean. Rendered as a small key above the calendar. */
  legend?: CalendarLegendItem[]
  /** Restricts the time-grid (week/day) view to these hours so classes aren't lost in empty scroll space. */
  slotMinTime?: string
  slotMaxTime?: string
}

// Full config including listWeek
const desktopHeaderConfig = {
  left: 'prev,next today',
  center: 'title',
  right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
} as const

// Mobile still needs a way to switch views - a compact month/agenda toggle beats being locked to one view.
const mobileHeaderConfig = {
  left: 'prev,next today',
  center: 'title',
  right: 'dayGridMonth,listWeek',
} as const

const buttonTextConfig = {
  today: 'today',
  month: 'month',
  week: 'week',
  day: 'day',
  list: 'list',
} as const

const calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]

const _eventTimeFormatConfig = {
  hour: '2-digit',
  minute: '2-digit',
  meridiem: false,
  hour12: false,
} as const

const slotLabelFormatConfig = {
  hour: '2-digit',
  minute: '2-digit',
  meridiem: false,
  hour12: false,
} as const

function DashboardCalendarComponent({
  events = [],
  onDateSelect,
  onEventClick,
  onEventDrop,
  readOnly = false,
  editable = false,
  height = 600,
  legend,
  slotMinTime = '07:00:00',
  slotMaxTime = '23:00:00',
}: DashboardCalendarProps) {
  const [isClient, setIsClient] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const calendarRef = useRef<FullCalendar>(null)

  // Mobile detection and SSR hydration safety
  useEffect(() => {
    setIsClient(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleDateSelect = useCallback(
    (selectInfo: DateSelectArg) => {
      if (readOnly) return
      onDateSelect?.(selectInfo)
    },
    [onDateSelect, readOnly]
  )

  const handleEventClick = useCallback(
    (clickInfo: EventClickArg) => {
      onEventClick?.(clickInfo)
    },
    [onEventClick]
  )

  if (!isClient) {
    return (
      <div className="dashboard-calendar" style={{ minHeight: '600px' }}>
        <div className="flex h-full items-center justify-center">
          <ShinyText variant="body">Loading calendar...</ShinyText>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard-calendar overflow-hidden rounded-xl border border-amber-900/20 bg-gray-900/30 p-2 sm:p-4">
      {legend && legend.length > 0 && (
        <div className="calendar-legend" role="list" aria-label="Legend">
          {legend.map((item) => (
            <span className="calendar-legend-item" role="listitem" key={item.label}>
              <span className="calendar-legend-dot" style={{ backgroundColor: item.color }} />
              {item.label}
            </span>
          ))}
        </div>
      )}
      <FullCalendar
        ref={calendarRef}
        plugins={calendarPlugins}
        initialView={isMobile ? 'listWeek' : 'dayGridMonth'}
        headerToolbar={isMobile ? mobileHeaderConfig : desktopHeaderConfig}
        events={events}
        selectable={!readOnly}
        selectMirror={!readOnly}
        dayMaxEvents={true}
        weekends={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
        editable={editable && !readOnly}
        eventDrop={onEventDrop}
        displayEventEnd={!isMobile}
        height={isMobile ? 'auto' : height}
        aspectRatio={isMobile ? 0.7 : 1.8}
        handleWindowResize={true}
        stickyHeaderDates={true}
        nowIndicator={true}
        slotMinTime={slotMinTime}
        slotMaxTime={slotMaxTime}
        noEventsText="No classes scheduled"
        eventClassNames="calendar-event"
        dayHeaderClassNames="calendar-day-header"
        buttonText={buttonTextConfig}
        eventTimeFormat={{
          hour: 'numeric',
          minute: '2-digit',
          meridiem: false,
          hour12: false,
        }}
        slotLabelFormat={slotLabelFormatConfig}
        dayHeaderFormat={isMobile ? { weekday: 'narrow' } : { weekday: 'short' }}
        titleFormat={isMobile ? { month: 'short', year: 'numeric' } : { month: 'long', year: 'numeric' }}
        listDayFormat={
          isMobile ? { weekday: 'short', day: 'numeric' } : { weekday: 'long', month: 'long', day: 'numeric' }
        }
        listDaySideFormat={isMobile ? false : { year: 'numeric' }}
      />
    </div>
  )
}

export const DashboardCalendar = React.memo(DashboardCalendarComponent)
