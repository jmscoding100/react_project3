const Card =(props)=>{

    return(
        <div className="col">
            <div className="card h-100 user-card">
                <img src="https://via.placeholder.com/50x50"alt="placeholder img" className="img-fluid image card-img-top" />
                <div className="card-body">
                    <h3 className="card-title">{props.myName}</h3>
                    <div className="card-stats">
                        <ul className="user-list">
                            <li>Age: {props.myAge}</li>
                            <li>Birthday: {props.myBirthday}</li>
                            {props.myFavFood && <li>Favorite food (today, at least...): {`My favorite food is: ${props.myFavFood}` }</li>}
                
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card