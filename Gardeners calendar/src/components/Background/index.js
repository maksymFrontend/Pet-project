import BackgroundImage from '../../img/BackgroundImage.jpg'

export const Background = ({}) =>{
    return(
        <div className="background" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div className='backgroundDark' />
        </div>
    )
}