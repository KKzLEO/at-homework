import React from 'react'
import PropTypes from 'prop-types'
import * as Style from '../style'
import { format } from 'utils/date'
import { STATUSES } from 'constants/calendar'

const TimeSlot = ({ start, end, status }) => {
  return (
    <div key={+new Date(start)}>
      <Style.Time isAvailable={status === STATUSES.AVAILABLE}>
        {format(start, 'HH:mm')}
      </Style.Time>
      <Style.Time isAvailable={status === STATUSES.AVAILABLE}>
        {format(end, 'HH:mm')}
      </Style.Time>
    </div>
  )
}

TimeSlot.propTypes = {
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  status: PropTypes.string.isRequired,
}

export default TimeSlot
