import { Link } from 'react-router-dom'
import { Header } from '../Header'
import moonPhase0 from '../../img/moonPhase0.png'
import moonPhase1 from '../../img/moonPhase1.png'
import moonPhase2 from '../../img/moonPhase2.png'
import moonPhase3 from '../../img/moonPhase3.png'
import {calendarInformation} from '../../data'

const Days = ({amountDays, month}) => {
    const d = new Date();
    const dayNow = d.getDate();
    const days = []
    const monthNow = d.getMonth();    
    const moonPhase = [moonPhase0, moonPhase1, moonPhase2, moonPhase3]
    for(let i = 1; i<=amountDays; i++){
        const calendarData = (calendarInformation[month])[i]
        days.push(
            <Link to={`/calendarDays/${month}/${i}`} key={i} className={`dayBlock ${((dayNow === i) && (monthNow === (month-1)))?'dayBlockNow':''}`}>
                <div className='dayBlockDate'>
                    <div>
                        {i}
                    </div>
                    <img src={moonPhase[calendarData.moonPhase.moonPhaseId]} className="moon"/>
                </div>
                <div className='quarter'>{calendarData.moonPhase?.quarter===1?'Перша ч.':calendarData.moonPhase?.quarter===2?'Остання ч.':''}</div>
            </Link>
        ) 
    }
    return(
        <div className='days'>
            {days.map((day)=> day)}
        </div>
    )
}

export const CalendarDays = ({match}) =>{
    let id = match.params.id
    const d = new Date();
    const amountDays = new Date(2023, id, 0).getDate();
    return(
        <>
            <Header name={`Календар садівника та городника на ${d.getFullYear()}`} subtitle=''/>
            <Days amountDays={amountDays} month={id}/>
        </>
    )
}