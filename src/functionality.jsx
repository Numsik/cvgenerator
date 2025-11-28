import "./styles/leftpanel.css"
import { useState } from "react"


function Aplikacka(){
    const [array, SetArray] = useState({
    fullname: "Honzik Spalik",
    email: "emalik@seznam.cz",
    phone: "777 777 777",
    city: "Praha 1 Křepčích 755",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corporis eligendi quos natus consectetur sint eum nobis dolore neque error reiciendis explicabo ex minima quae fugit, corrupti, temporibus soluta blanditiis."
    })

    const [education, setEducation] = useState({
        school: "IT School",
        degree: "software university",
        startdate: 2020,
        enddate: 2024,
        place: "Prague",
        skills: "Adobe Figma Html Css"
    })

    function renderSkills(skillsString) {
        return skillsString
            .split(' ')  
            .map((skill, index) => (
                <li key={index}>{skill}</li>
            ))
    }


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
                    <div className="inputy">
                        <p>Tell something about yourself</p>
                        <textarea placeholder="About" name="about" onChange={handleChange} value={array.about}/> 
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
                    <div className="display-row">
                        <div className="uprava">
                            <p className="fullname">{array.fullname}</p>
                            <p className="about">{array.about}</p>
                        </div>

                        <div className="contact">
                            <p className="email">{array.email}</p>
                            <p className="phone">{array.phone}</p>
                            <p className="city">{array.city}</p>
                        </div>
                    </div>
                    


                </div>

                <div className="row nejakejcenter">
                    <div style={{width: 400}}>
                        <p className="educationheading" style={{color: "#7EB2FF"}}>Education</p>
                        <hr style={{color: "#7EB2FF"}}></hr>

                        <div className="row">

                            <div className="changemarginp">
                                <p style={{marginBottom: 0}}>{education.school}</p>
                                <p>{education.degree}</p>
                            </div>

                            <div className="changemarginp">
                                <p>{education.startdate}-{education.enddate}</p>
                                <p>{education.place }</p>
                            </div>

                        </div>

                    </div>
                    <div className="mm" style={{width: 200}}>
                        <p className="technicalskils" style={{color: "#7EB2FF"}}>Technical Skills</p>
                        <hr style={{color: "#7EB2FF"}}></hr>
                        <ul style={{color: "black", paddingLeft: 20}}>{renderSkills(education.skills)}</ul>
                    </div>
                    

                </div>
                
                <div>
                    



                </div>
                


                

            </div>

        </div>

       
        </>
    )

}

export default Aplikacka;