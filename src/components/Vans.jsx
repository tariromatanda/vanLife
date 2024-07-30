
function Van(props){
    return(
        <>
        <div className="card">
            <div className="cardPic">
                <img src={props.pic} alt=""  className="pic"/>
            </div>
            <div className="cardText">
                <div className="first">
                    <h1>{props.vanName}</h1>
                    <div className="day">
                        <h2>{props.size}</h2>
                        <p>/day</p>
                    </div>
                </div>
                <div className="btn">
                    {props.button}
                </div>
            </div>
        </div>
        </>
    );
}
export default Van;