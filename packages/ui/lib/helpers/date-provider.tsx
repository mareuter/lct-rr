import { useState, type ReactNode } from 'react'
import DateContext, { type DateContextType } from './date-context'

const DateProvider = ({ children }: { children: ReactNode }) => {
  const [date, setDate] = useState(new Date())
  const context: DateContextType = { date, setDate }

  return <DateContext value={context}>{children}</DateContext>
}

export default DateProvider
