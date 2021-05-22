import { assign } from 'xstate'
import { add, subtract } from 'utils/date'
import { generateCalendar } from 'utils/calendar'

const actions = {
  setStartDate: assign({
    startDate: ({ startDate }) => {
      return subtract(startDate, { days: startDate.getDay() })
    },
  }),
  updatedCalendar: assign({
    calendar: ({ startDate }, { data }) => {
      return generateCalendar(startDate, data)
    },
  }),
  addOneWeek: assign({
    startDate: ({ startDate }) => {
      return add(startDate, { days: 7 })
    },
  }),
  subtractOneWeek: assign({
    startDate: ({ startDate }) => {
      return subtract(startDate, { days: 7 })
    },
  }),
}

export default actions
