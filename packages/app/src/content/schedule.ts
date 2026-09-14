/**
 * The weekly class schedule shown on /schedule.
 *
 * This site is fully static, so this list *is* the schedule - there's no admin panel or
 * database behind it. To change a class time, rename one, or add/remove a slot, just edit
 * this array and redeploy.
 *
 * `day`: 0 = Monday ... 6 = Sunday.
 */
export interface ScheduleClass {
  day: number
  start: string
  end: string
  title: string
  description: string
  trainer: string
  hall: string
}

export const weeklySchedule: ScheduleClass[] = [
  {
    day: 0,
    start: '20:00',
    end: '21:00',
    title: 'Grupa Początkująca',
    description: 'Taniec towarzyski i użytkowy dla początkujących',
    trainer: 'Alice Dancer',
    hall: 'Hall 1',
  },
  {
    day: 1,
    start: '12:00',
    end: '13:00',
    title: 'Body Balet',
    description: 'Balet dla dorosłych',
    trainer: 'Bob Stepper',
    hall: 'Hall 2',
  },
  {
    day: 1,
    start: '20:00',
    end: '21:00',
    title: 'Standard',
    description: 'Grupa zaawansowana - taniec standardowy',
    trainer: 'Alice Dancer',
    hall: 'Hall 1',
  },
  {
    day: 3,
    start: '19:15',
    end: '20:15',
    title: 'Łacina',
    description: 'Grupa zaawansowana - taniec latynoamerykański',
    trainer: 'Bob Stepper',
    hall: 'Hall 2',
  },
  {
    day: 3,
    start: '20:15',
    end: '21:15',
    title: 'Grupa Początkująca',
    description: 'Taniec towarzyski i użytkowy dla początkujących',
    trainer: 'Alice Dancer',
    hall: 'Hall 1',
  },
  {
    day: 4,
    start: '20:00',
    end: '21:00',
    title: 'Latino Solo',
    description: 'Latino solo',
    trainer: 'Alice Dancer',
    hall: 'Hall 1',
  },
  {
    day: 5,
    start: '10:00',
    end: '11:00',
    title: 'Body Balet',
    description: 'Balet dla dorosłych',
    trainer: 'Bob Stepper',
    hall: 'Hall 2',
  },
]
