import { Link } from "react-router-dom"

export const ButtonBack = ({}) =>{
    return(
        <Link to="./">
            <button className="buttonBack">
                Переглянути інші дні
            </button>
        </Link>
    )
}



