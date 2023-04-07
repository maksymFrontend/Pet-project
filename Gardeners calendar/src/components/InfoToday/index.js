import moonPhase0 from '../../img/moonPhase0.png'
import moonPhase1 from '../../img/moonPhase1.png'
import moonPhase2 from '../../img/moonPhase2.png'
import moonPhase3 from '../../img/moonPhase3.png'
import {calendarInformation} from '../../data'

export const InfoToday = ({month, day, style=''}) =>{
    const calendarData = (calendarInformation[month])[day]
    const moonPhase = [moonPhase0, moonPhase1, moonPhase2, moonPhase3]
    const d = new Date();
    return(
        <div className={`infoTodayBlock ${style}`}>
            <div className="weatherCity">
                Садово-городні роботи {day === d.getDate() ? 'на сьогодні' : ``}
            </div>
            <div className="infoTodayBlockFlex">
                <div className="weatherInfoMore">
                    Фаза місяця: <b>{calendarData.moonPhase.text}</b>
                </div>
                <img src={moonPhase[calendarData.moonPhase.moonPhaseId]} className="moon"/>
            </div>
            <div className="weatherInfoMore">
                {calendarData.advice}
            </div>
        </div>
    )
}