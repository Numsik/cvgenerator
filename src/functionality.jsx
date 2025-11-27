import "./styles/leftpanel.css"

function LeftPanel(){
    return(
        <>
        <div className="wholeass">
            <div className="general-border">
                <h1 className="general">General Information</h1>
        
                <div className="inputy">
                    <p>Full Name</p>
                    <input placeholder="Full Name"/> 
                </div>

                <div className="inputy">
                    <p>Email</p>
                    <input placeholder="Email"/> 
                </div>

                <div className="inputy">
                    <p>Phone Number</p>
                    <input placeholder="Phone"/> 
                </div>

                <div className="inputy">
                    <p>City and province</p>
                    <input placeholder="City and province"/> 
                </div>
            </div>
           


        </div>
       
        </>
    )

}

export default LeftPanel;