import { padStart } from './base'

export const add = (date, { days, months, years }) => {
  const dateObj = new Date(date)

  if (days) dateObj.setDate(dateObj.getDate() + days)
  else if (months) dateObj.setMonth(dateObj.getMonth() + months)
  else if (years) dateObj.setFullYear(dateObj.getFullYear() + years)

  return dateObj
}

export const subtract = (date, { days, months, years }) => {
  return add(date, { days: -days, months: -months, years: -years })
}

export const isDate = (date) => {
  const isDate = Object.prototype.toString.call(date) === '[object Date]'
  const isValidDate = date && !Number.isNaN(date.valueOf())

  return isDate && isValidDate
}

export const convert24HourTo12 = (hour) => hour % 12 || 12

export const format = (date, format = 'YYYY/MM/DD') => {
  const dateObj = new Date(date)

  if (!isDate(dateObj)) return new Error('invalid date')

  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()
  const hour = dateObj.getHours()
  const hour12 = convert24HourTo12(hour)
  const minutes = dateObj.getMinutes()
  const second = dateObj.getSeconds()

  return format
    .replace('YYYY', year)
    .replace('MM', padStart(month, 2, '0'))
    .replace('DD', padStart(day, 2, '0'))
    .replace('HH', padStart(hour, 2, '0'))
    .replace('hh', padStart(hour12, 2, '0'))
    .replace('mm', padStart(minutes, 2, '0'))
    .replace('ss', padStart(second, 2, '0'))
}

export const getTimeZone = (date) => {
  const timeZoneOffset = date.getTimezoneOffset()
  const sign = timeZoneOffset > 0 ? '-' : '+'
  const clientTimezoneOffset = Math.abs(timeZoneOffset) / 60

  return `${sign}${padStart(clientTimezoneOffset, 2, 0)}:00`
}
