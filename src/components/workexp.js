import React  from "react";

class WorkExp extends React.Component {
    render(){
        return(
            <div>
                <h3>Work Experience</h3>
                <form>
                    <label htmlFor="companyName">Company:</label>
                    <input type="text" id="companyName" />
                    <br /> 

                    <label htmlFor="jobRole">Role:</label>
                    <input type="text" id="jobRole" />
                    <br /> 

                    <label htmlFor="jobStartDate">From:</label>
                    <input type="text" id="jobStartDate" />
                    

                    <label htmlFor="jobEndDate">To:</label>
                    <input type="text" id="jobEndDate" />
                    <br /> 

                    <button>Save</button> <button> cancel</button> 

                </form>
            </div>
        )
    }
}

export default WorkExp;