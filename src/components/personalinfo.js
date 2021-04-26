import React from 'react';

class PersonalInfo extends React.Component {
    render(){
        return(
            <div>
                {/* Personal information*/}
                <form>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName"/>
                    <br />
                    <label htmlFor="lasttName">Last Name</label>
                    <input type="text" id="lasttName"/>
                    <br />

                    <label htmlFor="occupation">Occupation</label>
                    <input type="text" id="occupation" />
                    <br />

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" />
                    <br />

                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" />
                    <br />

                    <label htmlFor="github">Github</label>
                    <input type="text" id="github" />
                    <br />

                    <br />
                    <button>Save</button>
                </form>
            </div>
        )
    }
}

export default PersonalInfo