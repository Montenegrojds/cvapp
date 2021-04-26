import React from 'react';

class Education extends React.Component {
    render(){
        return(
            <div>
            <h3>Education</h3>
                <form>
                    <label htmlFor="schoolName">Name of University or School:</label>
                    <input type="text" id="schoolName" />
                    <br />

                    <label htmlFor="startDate">From:</label>
                    <input type="text" id="startDate" />
                   
                    
                    <label htmlFor="endDate">To:</label>
                    <input type="text" id="endDate" />
                    <br />  

                    <label htmlFor="degree">Degree:</label>
                    <input type="text" id="degree" />
                    <br />                          

                    <br />
                    <button>Save</button> <button> cancel</button> 
                </form>
            </div>
        )
    }
}

export default Education