import { groupBy, sortBy } from 'lodash'
import { format, add } from 'utils/date'
import { STATUSES } from 'constants/calendar'

export const generateCalendar = (startDate, schedule) => {
  const availableMap = groupBy(schedule.available, ({ start }) => {
    return format(start)
  })
  const bookedMap = groupBy(schedule.booked, ({ start }) => {
    return format(start)
  })

  return Array(7)
    .fill(0)
    .map((_, index) => {
      const dateObj = add(startDate, { days: index })
      const key = format(dateObj)

      const todaySchedule = sortBy(
        [
          ...(availableMap[key]?.map((element) => ({
            ...element,
            status: STATUSES.AVAILABLE,
          })) || []),
          ...(bookedMap[key]?.map((element) => ({
            ...element,
            status: STATUSES.BOOKED,
          })) || []),
        ],
        ['start']
      )

      return {
        date: dateObj,
        schedule: todaySchedule,
      }
    })
}
