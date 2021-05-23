import React from 'react'
import PropTypes from 'prop-types'
import * as Style from '../style'
import { format, add } from 'utils/date'
import { STATUSES } from 'constants/calendar'

const TimeSlot = ({ start, end, status }) => {
  const halfHours = (Math.abs(end - start) / 36e5) * 2

  if (halfHours <= 0) return null

  const timeSlots = Array(halfHours)
    .fill(0)
    .map((_, index) => {
      return add(start, { hours: 0.5 * index })
    })

  return (
    <>
      {timeSlots.map((date) => (
        <div key={+date}>
          <Style.Time isAvailable={status === STATUSES.AVAILABLE}>
            {format(date, 'HH:mm')}
          </Style.Time>
        </div>
      ))}
    </>
  )
}

TimeSlot.propTypes = {
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  status: PropTypes.string.isRequired,
}

export default TimeSlot
