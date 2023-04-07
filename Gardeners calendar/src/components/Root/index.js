import { BrowserRouter as Route, Switch } from 'react-router-dom'
import { MainPage } from '../MainPage'
import { Menu } from '../Menu'
import { Background } from '../Background'
import { Calendar } from '../Calendar'
import { CalendarDays } from '../CalendarDays'
import { InfoDay } from '../InfoDay'
import { Care } from '../Care'

export const Root = () => {
    return (
		<>
			<Switch>	
				<Route path="/calendarDays/:month/:day" exact component={InfoDay} />
				<Route path="/calendarDays/:id" exact component={CalendarDays} />
				<Route path="/calendarDays" exact component={Calendar} />
				<Route path="/care" exact component={Care} />
				<Route path="/"  exact component={MainPage} />
			</Switch>
			<Menu/>
			<Background/>
		</>
    )
  }