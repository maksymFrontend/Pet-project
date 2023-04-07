import { Header } from '../Header'
import { CWeather } from '../Weather'
import { InfoToday } from '../InfoToday'

export const MainPage = ({}) =>{
    const d = new Date();
    const monthA = 'січня, лютого, березня, квітня, травня, червня, липня, серпня, вересня, жовтня, листопада, грудня'.split(',');
    return(
        <>
            <Header name='Добридень, Олексій' subtitle={`${d.getDate()} ${monthA[d.getMonth()]}, ${d.getFullYear()}`}/>
            <CWeather />
            <InfoToday month={d.getMonth()+1} day={d.getDate()} />
        </>
    )
}