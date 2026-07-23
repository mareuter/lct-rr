import { useState, type ReactNode } from 'react'
import DateContext, { type DateContextType } from './date_context'

const DateProvider = ({ children }: { children: ReactNode }) => {
  const [date, setDate] = useState(new Date())
  const context: DateContextType = { setDate, date }

  return <DateContext value={context}>{children}</DateContext>
}

export default DateProvider
