import React from 'react'
import * as Style from './style'
import { useMachine } from '@xstate/react'
import { calendarMachine } from 'machines/calendar'
import { format, getTimeZone } from 'utils/date'
import { padStart } from 'utils/base'
import { isEmpty } from 'lodash'
import TimeSlot from './TimeSlot'

const Calendar = () => {
  const [state, send] = useMachine(calendarMachine, {
    devTools: true,
    context: {
      startDate: new Date(),
    },
  })

  const { calendar } = state.context

  const renderTitle = () => {
    if (isEmpty(calendar)) return null

    const start = calendar[0]
    const end = calendar[calendar.length - 1]

    return [format(start.date), format(end.date, 'DD')].join(' - ')
  }

  const renderTimeZone = () => {
    const timezone = getTimeZone(new Date())
    const name = Intl.DateTimeFormat().resolvedOptions().timeZone

    return `* 時間以 ${name} (GMT${timezone}) 顯示`
  }

  const handleClickNext = () => send('NEXT')
  const handleClickPrev = () => send('PREV')
  const today = new Date().setHours(0, 0, 0, 0)

  return (
    <Style.Container>
      <Style.Title>授課時間</Style.Title>
      <Style.FunctionBar>
        <Style.Navigation>
          <Style.NavigationButton onClick={handleClickPrev}>
            {'<'}
          </Style.NavigationButton>
          <Style.NavigationButton onClick={handleClickNext}>
            {'>'}
          </Style.NavigationButton>
        </Style.Navigation>
        <Style.DateTitle>{renderTitle()}</Style.DateTitle>
        <Style.TimeZoneDesc>{renderTimeZone()}</Style.TimeZoneDesc>
      </Style.FunctionBar>
      <Style.CalendarContainer>
        {calendar &&
          calendar.map(({ date, schedule }) => {
            return (
              <Style.CalendarItem isAvailable={today <= date} key={+date}>
                <Style.WeekDay>
                  {date.toLocaleString('zh-tw', {
                    weekday: 'narrow',
                  })}
                </Style.WeekDay>
                <Style.Date>{padStart(date.getDate(), 2, '0')}</Style.Date>

                {schedule &&
                  schedule.map(({ start, end, status }) => (
                    <TimeSlot
                      start={start}
                      end={end}
                      status={status}
                      key={+new Date(start)}
                    />
                  ))}
              </Style.CalendarItem>
            )
          })}
      </Style.CalendarContainer>
    </Style.Container>
  )
}

export default Calendar
