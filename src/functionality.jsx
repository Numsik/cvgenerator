import "./styles/leftpanel.css"
import { useState } from "react"


function Aplikacka(){
    const [array, SetArray] = useState({
    fullname: "Honzik Spalik",
    email: "honzikuvemalik@seznam.cz",
    phone: "777 777 777",
    city: "Praha"
    })

    const [education, setEducation] = useState({
        school: "IT MINSTR ZEMĚ KOULE",
        degree: "Softvware Engineer",
        startdate: 2020,
        enddate: 2024,
        place: "prague"
    })

    function handleChange(e){
       const {name, value} = e.target;
       SetArray(prevArray => ({
        ...prevArray, [name]: value
       }))
    }

    return(
        <>
        <div className="page">

            <div className="query">
                <div className="generalinfo borderr">
                    <h1 className="general">General Information</h1>
            
                    <div className="inputy">
                        <p>Full Name</p>
                        <input placeholder="Full Name" name="fullname" onChange={handleChange} value={array.fullname}/> 
                    </div>

                    <div className="inputy">
                        <p>Email</p>
                        <input placeholder="Email" name="email" onChange={handleChange} value={array.email}/> 
                    </div>

                    <div className="inputy">
                        <p>Phone Number</p>
                        <input placeholder="Phone" name="phone" onChange={handleChange} value={array.phone}/> 
                    </div>

                    <div className="inputy">
                        <p>City and province</p>
                        <input placeholder="City and province" name="city" onChange={handleChange} value={array.city}/> 
                    </div>
                </div>

                <div className="education borderr">
                    <h1 className="general">Education</h1>
            
                    <div className="inputy">
                        <p>Full Name</p>
                        <input placeholder="Full Name" /> 
                    </div>

                    <div className="inputy">
                        <p>Email</p>
                        <input placeholder="Email" /> 
                    </div>

                    <div className="inputy">
                        <p>Phone Number</p>
                        <input placeholder="Phone" /> 
                    </div>

                    <div className="inputy">
                        <p>City and province</p>
                        <input placeholder="City and province"/> 
                    </div>
                </div>

            </div>

            <div className="blankpage">
                <p className="fullname">{array.fullname}</p>
                <div className="contact">
                    <p className="email">{array.email}</p>
                    <p className="phone">{array.phone}</p>
                    <p className="city">{array.city}</p>
                </div>
                

            </div>

        </div>

       
        </>
    )

}

export default Aplikacka;