import { Link } from 'react-router-dom'
import { Header } from '../Header'
import { InfoToday } from '../InfoToday'
import { ButtonBack } from '../ButtonBack'

export const InfoDay = ({match}) =>{
    let month = match.params.month
    let day = match.params.day
    const monthA = 'січня, лютого, березня, квітня, травня, червня, липня, серпня, вересня, жовтня, листопада, грудня'.split(',');
    return(
        <>
            <Header name={`Календар садівника та городника на ${day} ${monthA[month-1]}`} subtitle=''/>
            <InfoToday month={month} day={day} style='infoBlock'/>
            <ButtonBack />  
        </>
    )
}