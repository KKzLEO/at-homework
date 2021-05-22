import { createMachine } from 'xstate'

import services from './services'
import actions from './actions'
import guards from './guards'

export const calendarMachine = createMachine(
  {
    initial: 'startup',
    id: 'calendar',
    context: {
      calendar: [],
      startDate: new Date(),
    },
    states: {
      startup: {
        always: 'fetching',
        entry: 'setStartDate',
      },
      fetching: {
        id: 'fetchSchedule',
        invoke: {
          src: 'fetchSchedule',
          onDone: {
            target: 'fetched',
            actions: 'updatedCalendar',
          },
          onError: 'error',
        },
      },
      fetched: {
        on: {
          NEXT: {
            actions: 'addOneWeek',
            cond: 'canNext',
            target: 'fetching',
          },
          PREV: {
            actions: 'subtractOneWeek',
            cond: 'canPrev',
            target: 'fetching',
          },
        },
      },
      error: {},
    },
  },
  {
    services,
    guards,
    actions,
  }
)
