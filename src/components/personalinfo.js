import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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

    displayForm(){
        return(
            <div>
                 {/* Personal information*/}
                 <Form onSubmit={this.onSubmitPI}>
                    <Form.Group>
                        <Form.Label htmlFor="firstName">First Name</Form.Label>
                        <Form.Control type="text" id="firstName" 
                        onChange={this.handleChanges}
                        value={this.state.firstName}
                        name='firstName'
                        />
                        <br />
                        <Form.Label htmlFor="lasttName">Last Name</Form.Label>
                        <Form.Control type="text" id="lasttName"
                            onChange={this.handleChanges}
                            value={this.state.LastName}
                            name='lastName'
                        />
                        <br />

                        <Form.Label htmlFor="occupation">Occupation</Form.Label>
                        <Form.Control type="text" id="occupation" 
                            onChange={this.handleChanges}
                            value={this.state.occupation}
                            name='occupation'   
                        />
                        <br />

                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control type="text" id="email" 
                            onChange={this.handleChanges}
                            value={this.state.email}
                            name='email'
                        />
                        <br />

                        <Form.Label htmlFor="phone">Phone</Form.Label>
                        <Form.Control type="text" id="phone" 
                            onChange={this.handleChanges}
                            value={this.state.phone}
                            name='phone'
                        />
                        <br />

                        <Form.Label htmlFor="github">Github</Form.Label>
                        <Form.Control type="text" id="github" 
                            onChange={this.handleChanges}
                            value={this.state.github}
                            name='github'
                        />
                        <br />

                        <Button type='submit' variant="primary">Save</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }


    
    render(){
        return(
            <div className="d-grid row ">
                <div className="col-12 col-lg-6 justify-content-center col-centered"> 
                    {this.displayForm()}
                </div>
                <div className="col-12 col-lg-6 justify-content-center col-centered"> 
                <ul>
                    {this.displayInfo()}
                    </ul>
                </div>
            
                
            </div>
        )
    }
}

export default PersonalInfo