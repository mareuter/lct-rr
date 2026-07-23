import { createContext, type Dispatch, type SetStateAction } from 'react'

export type DateContextType = {
  date: Date
  setDate: Dispatch<SetStateAction<Date>>
}

const DateContext = createContext<DateContextType>({} as DateContextType)

export default DateContext
