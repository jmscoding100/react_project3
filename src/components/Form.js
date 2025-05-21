import { useState, useEffect } from "react"


import { useId } from "react"

const Form =(props)=>{

    

    return(
        <form className="form" id="userForm" onSubmit={ props.handleSubmit } >
            <div className="row my-5">
                <div className="col">
                    <label htmlFor="myName" className="form-lable">Name:</label>
                    <input type="text" className="form-control" id="myName" name="myName" value={props.formData.myName} onChange={props.handleChange} />
                </div>
                <div className="col">
                    <label htmlFor="myAge" className="form-lable">Age:</label>
                    <input type="number" className="form-control" id="myAge" name="myAge" min={0} max={100} value={props.formData.myAge} onChange={props.handleChange} />
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    <label htmlFor="myBirthday" className="form-lable">Birthday:</label>
                    <input type="date" className="form-control" id="myBirthday" name="myBirthday" value={props.formData.myBirthday} onChange={props.handleChange} />
                </div>
                <div className="col">
                    <label htmlFor="myFavFood" className="form-lable">Favorite Food:</label>
                    <input type="text" className="form-control" id="myFavFood" name="myFavFood" value={props.formData.myFavFood} onChange={props.handleChange} />
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    <button className="btn btn-info submit-btn" >Add User</button>
                </div>
            </div>
        </form>
    )
}

export default Form