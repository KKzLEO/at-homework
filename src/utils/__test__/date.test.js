import { add, subtract } from '../date'

describe('#add', () => {
  it('should return tomorrow', () => {
    const today = new Date('2021/1/1')
    const tomorrow = new Date('2021/1/2')
    expect(+add(today, { days: 1 })).toBe(+tomorrow)
  })

  it('should return today', () => {
    const today = new Date('2021/1/1')

    expect(+add(today, { days: 0 })).toBe(+today)
  })

  it('should return next month', () => {
    const today = new Date('2021/1/1')
    const nextMonth = new Date('2021/2/1')

    expect(+add(today, { months: 1 })).toBe(+nextMonth)
    expect(+add(today, { days: 31 })).toBe(+nextMonth)
  })

  it('should return next 3 months', () => {
    const today = new Date('2021/1/1')
    const next3Months = new Date('2021/4/1')

    expect(+add(today, { months: 3 })).toBe(+next3Months)
  })

  it('should return next year', () => {
    const today = new Date('2021/1/1')
    const nextYear = new Date('2022/1/1')

    expect(+add(today, { years: 1 })).toBe(+nextYear)
    expect(+add(today, { months: 12 })).toBe(+nextYear)
    expect(+add(today, { days: 365 })).toBe(+nextYear)
  })
})

describe('#subtract', () => {
  it('should return yesterday', () => {
    const today = new Date('2021/1/1')
    const yesterday = new Date('2020/12/31')
    expect(+subtract(today, { days: 1 })).toBe(+yesterday)
  })

  it('should return today', () => {
    const today = new Date('2021/1/1')

    expect(+subtract(today, { days: 0 })).toBe(+today)
  })

  it('should return previous month', () => {
    const today = new Date('2021/1/1')
    const prevMonth = new Date('2020/12/1')

    expect(+subtract(today, { months: 1 })).toBe(+prevMonth)
    expect(+subtract(today, { days: 31 })).toBe(+prevMonth)
  })

  it('should return previous 3 months', () => {
    const today = new Date('2021/1/1')
    const prev3Months = new Date('2020/10/1')

    expect(+subtract(today, { months: 3 })).toBe(+prev3Months)
  })

  it('should return prev year', () => {
    const today = new Date('2021/1/1')
    const prevYear = new Date('2020/1/1')

    expect(+subtract(today, { years: 1 })).toBe(+prevYear)
    expect(+subtract(today, { months: 12 })).toBe(+prevYear)
    expect(+subtract(today, { days: 366 })).toBe(+prevYear)
  })
})
