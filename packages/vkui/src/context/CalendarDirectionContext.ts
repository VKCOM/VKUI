import { createContext, useContext } from 'react';
import { type Direction } from '../lib/direction';

export interface CalendarDirectionContextProps {
  direction: Direction;
}

export const CalendarDirectionContext = createContext<CalendarDirectionContextProps>({
  direction: 'ltr',
});

export const useCalendarDirectionContext = () => useContext(CalendarDirectionContext);
