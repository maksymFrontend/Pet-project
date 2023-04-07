import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { memo } from 'react'

let section = [
	{
		name:'Календар',
		icon:faCalendarDays,
		link:'/calendarDays'
	},
	{
		name:'Головна',
		icon:faHouse,
		link:'/'
	},
	{
		name:'Догляд',
		icon:faSeedling,
		link:'/care'
	},
]

const MenuButton = memo(({name,icon,link, status}) =>{
	console.log(status)
	return(
		<Link to={link} className={`menuButton ${status?'menuButtonActive':''}`}>
			<div className='icon'>
				<FontAwesomeIcon icon={icon} />
			</div>
			<div className='font14' style={{marginTop: '5px'}}>
				{name}
			</div>
		</Link>
	)
})

export const Menu = () => {
    const location = window.location.pathname
    return (
		<div className='menu'>
			{
				section.map(({name,icon,link})=> <MenuButton key={name} name={name} icon={icon} link={link} status={((location.length === 1) && (link.length === 1) ) || ((link.length > 1) && (location.includes(link)))}/>)
			}	
		</div>	
    )
}