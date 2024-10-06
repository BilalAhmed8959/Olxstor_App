function Card (props){
    return(
        <>
        <div className="min">
        <div className="card">
            <img src={props.src} alt="" />
        <h1>{props.res}</h1>
        <h1>{props.name}</h1>
        <p>{props.dr}</p>
        </div>
        
        </div>

        </>
    )
}
export default Card