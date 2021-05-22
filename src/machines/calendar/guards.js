import { add, subtract } from 'utils/date'
import { MAX_YEAR } from 'constants/calendar'

const guards = {
  canNext: ({ startDate }) => {
    return add(startDate, { days: 7 }) <= new Date(MAX_YEAR, 12, 31)
  },
  canPrev: ({ startDate }) => {
    const today = new Date(new Date().setHours(0, 0, 0, 0))

    return (
      subtract(startDate, { days: 7 }) >=
      subtract(today, { days: today.getDay() })
    )
  },
}

export default guards
