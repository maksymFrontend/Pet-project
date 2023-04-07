export const Header = ({name, subtitle}) =>{
    return(
        <div className="headerBlock">
            <h1>
                {name}
            </h1>
            <p className="subtitle">
                {subtitle}
            </p>
        </div>
    )
}