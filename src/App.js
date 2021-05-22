import Calendar from 'components/Calendar'
import { inspect } from '@xstate/inspect'
import { getUrlParams } from 'utils/base'

if (getUrlParams().debug) {
  inspect({
    iframe: false,
  })
}

function App() {
  return <Calendar />
}

export default App
