import React from 'react';

class Skills extends React.Component {
    render(){
        return(
            <div>
                <h3>Skills</h3>

                <form>
                    <label htmlFor="addSkill">Add a skill:</label>
                    <input type="text" id="addSkill" />
                    <br />

                    <button>Save</button> <button> cancel</button> 
                </form>
            </div>
        )
    }
}

export default Skills;