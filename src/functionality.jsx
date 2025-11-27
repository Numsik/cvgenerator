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

    function handleEducation(e){
        const {name, value} = e.target
        setEducation(array => ({
            ...array, [name]: value
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
                        <p>School</p>
                        <input placeholder="School" value={education.school} name="school" onChange={handleEducation}/> 
                    </div>

                    <div className="inputy">
                        <p>Degree</p>
                        <input placeholder="Degree" value={education.degree} name="degree" onChange={handleEducation}/> 
                    </div>

                    <div className="inputy">
                        <p>Start Date</p>
                        <input placeholder="Start Date" value={education.startdate} name="startdate" onChange={handleEducation}/> 
                    </div>

                    <div className="inputy">
                        <p>End Date</p>
                        <input placeholder="End Date" value={education.enddate} name="enddate" onChange={handleEducation}/> 
                    </div>
                </div>

            </div>

            <div className="blankpage">
                <div>
                    <p className="fullname">{array.fullname}</p>

                    <div className="contact">
                        <p className="email">{array.email}</p>
                        <p className="phone">{array.phone}</p>
                        <p className="city">{array.city}</p>
                    </div>
                </div>
                <p className="educationheading">Education</p>
                <div>
                    

                    <div className="display-row">
                        <div>
                            <p>{education.startdate}-{education.enddate}</p>
                            <p>{education.place}</p>
                        </div>

                        <div>
                            <p>{education.school}</p>
                            <p>{education.degree}</p>
                        </div>
                    </div>

                </div>
                


                

            </div>

        </div>

       
        </>
    )

}

export default Aplikacka;