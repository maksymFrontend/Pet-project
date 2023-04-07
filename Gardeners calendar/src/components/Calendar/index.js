import { Link } from 'react-router-dom'
import { Header } from '../Header'

const months = [
    {
        id: 1,
        name:'Січ.'
    },
    {
        id: 2,
        name:'Лют.'
    },
    {
        id: 3,
        name:'Берез.'
    },
    {
        id: 4,
        name:'Квіт.'
    },
    {
        id: 5,
        name:'Трав.'
    },
    {
        id: 6,
        name:'Черв.'
    },
    {
        id: 7,
        name:'Лип.'
    },
    {
        id: 8,
        name:'Серп.'
    },
    {
        id: 9,
        name:'Верес.'
    },
    {
        id: 10,
        name:'Жовт.'
    },
    {
        id: 11,
        name:'Листоп.'
    },
    {
        id: 12,
        name:'Груд.'
    }
]

const Months = () => {
    const d = new Date();
    const monthNow = d.getMonth();
    return(
        <div className='months'>
            {months.map(({id, name})=>
                <Link to={`/calendarDays/${id}`} key={id} className={`monthBlock ${monthNow === (id-1)?'monthBlockNow':''}`}>
                    {name}
                </Link>
            )}
        </div>
    )
}

export const Calendar = ({}) =>{
    const d = new Date();
    return(
        <>
            <Header name={`Календар садівника та городника на ${d.getFullYear()}`} subtitle=''/>
            <Months />
        </>
    )
}