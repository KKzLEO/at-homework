import { mockSchedule } from 'mockData/schedule'

const fetchSchedule = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockSchedule)
    }, 100)
  })
}

const services = {
  fetchSchedule: fetchSchedule,
}

export default services
