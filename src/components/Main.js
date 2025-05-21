import { useState, useEffect } from "react"

import Card from "./Card"
import Form from "./Form"
import data from "../data"

const Main =()=>{

const [users, setUsers] = useState([])
const [formData, setFormData] = useState({
    myName: '',
    myAge: '',
    myBirthday: '',
    myFavFood: '',
    img: ''
})

//useEffect(callback func, dependency array)
useEffect(()=>{
    setUsers(data)
}, [])


// console.log(users)

//handleClick
const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(formData)
    setUsers(prevState => [...prevState, formData])
}


const handleChange =(event)=>{
    const {name, value } = event.target

    setFormData(prevState => {
        return {
            ...prevState,
            id: users.length + 1,
            [name]: value
        }
    })
}


const cardComponents = users.map(item =>{
    return(
        <Card 
        key={item.id} 
        myName={item.myName} 
        myAge={item.myAge} 
        myFavFood={item.myFavFood} 
        img={item.img} 
        myBirthday={item.myBirthday} />
    )
})

    return(
        <main className="main" id="main">
            <section className="section" id="formSection">
                <div className="container">
                    <Form 
                    handleSubmit={ handleSubmit } 
                    formData={ formData } 
                    handleChange={ handleChange } />
                </div>
            </section>
            <section className="section" id="cardSection">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                            {cardComponents}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main