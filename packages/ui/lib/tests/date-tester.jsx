import { use } from 'react'
import DateContext from '../helpers/date-context'

const DateTester = () => {
  const { date, setDate } = use(DateContext)
  return (
    <div>
      <p>{date.toString()}</p>
    </div>
  )
}

export default DateTester
