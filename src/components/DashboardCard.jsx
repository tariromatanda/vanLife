function DashboardCards (props){
    return(
        <div className="cardContainer">
        <img src={props.pic} alt="" />
        <div className="text">
            <div>
            <h2>{props.vanName}</h2>
            <p>{props.price}</p>
            </div>
            <div className="edit">
            <p>{props.editText}</p>
        </div>
           
        </div>
       
        </div>
    )

}
export default DashboardCards;