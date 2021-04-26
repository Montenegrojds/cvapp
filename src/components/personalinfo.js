import React from 'react';

class PersonalInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
            firstName: '',
            lastName: '',
            occupation: '',
            email: '',
            phone: '',
             github: '',
            
            displayStatus: false
        }

        this.handleChanges= this.handleChanges.bind(this);
        this.onSubmitPI = this.onSubmitPI.bind(this);
        this.displayInfo = this.displayInfo.bind(this);
    }



    handleChanges = (e)=>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            
                [name]: value
        
        });

    }

    onSubmitPI(e){
        e.preventDefault();
        this.setState({
            displayStatus: true
        })
    }

    displayInfo(){
        
        if (this.state.displayStatus === true){
            /*return Object.values(this.state.personalInfo)*/
             return(
                <div>
                    <h2>{this.state.firstName}</h2>
                    <h2>{this.state.lastName}</h2>
                    <h2>{this.state.occupation}</h2>
                    <h2>{this.state.email}</h2>
                    <h2>{this.state.phone}</h2>
                    <h2>{this.state.github}</h2>
                </div>
            )
            
        }
    }


    
    render(){
        return(
            <div>
                {/* Personal information*/}
                <form onSubmit={this.onSubmitPI}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" 
                    onChange={this.handleChanges}
                    value={this.state.firstName}
                    name='firstName'
                    />
                    <br />
                    <label htmlFor="lasttName">Last Name</label>
                    <input type="text" id="lasttName"
                        onChange={this.handleChanges}
                        value={this.state.LastName}
                        name='lastName'
                    />
                    <br />

                    <label htmlFor="occupation">Occupation</label>
                    <input type="text" id="occupation" 
                        onChange={this.handleChanges}
                        value={this.state.occupation}
                        name='occupation'   
                    />
                    <br />

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" 
                        onChange={this.handleChanges}
                        value={this.state.email}
                        name='email'
                    />
                    <br />

                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" 
                        onChange={this.handleChanges}
                        value={this.state.phone}
                        name='phone'
                    />
                    <br />

                    <label htmlFor="github">Github</label>
                    <input type="text" id="github" 
                        onChange={this.handleChanges}
                        value={this.state.github}
                        name='github'
                    />
                    <br />

                    <button type='submit'>Save</button>
                </form>
                
                <h1>info go here</h1>
                <ul>
                    
                     {this.displayInfo()}
                </ul>
                
                
            </div>
        )
    }
}

export default PersonalInfo