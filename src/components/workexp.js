import React  from "react";
import uniqid from "uniqid";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class WorkExp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            companyName: '',
            jobRole: '',
            jobStartDate: '',
            jobEndDate: '',
            id: '',
            displayWorkFormStatus: false,
            workexpe: [
            ],
            workexpeUpdated:{
            }
        }  
        this.handleChanges = this.handleChanges.bind(this);
        this.updateWorkInfoList = this.updateWorkInfoList.bind(this);
        this.onSubmitWorkForm = this.onSubmitWorkForm.bind(this);
        this.addNewWorkExpe = this.addNewWorkExpe.bind(this);
        this.displayAllWorkexpe = this.displayAllWorkexpe.bind(this);
        this.displayAddForm = this.displayAddForm.bind(this);
        this.cancelWorkFrom = this.cancelWorkFrom.bind(this); 
        this.deleteWorkExpe = this.deleteWorkExpe.bind(this);  
    }

    handleChanges = (e)=>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({            
            [name]: value        
        });
    }
    onSubmitWorkForm = (e)=>{
        e.preventDefault();
        console.log('work')
        this.setState({
            workexpeUpdated: {
                companyName: this.state.companyName,
                jobRole: this.state.jobRole,
                jobStartDate: this.state.jobStartDate,
                jobEndDate: this.state.jobEndDate,
                id: uniqid(),
            },            
        })
        setTimeout(() => {
            this.updateWorkInfoList();
          }, 1);
          this.cancelWorkFrom();
    }
    cancelWorkFrom(){
        this.setState({
            companyName: '',
            jobRole: '',
            jobStartDate: '',
            jobEndDate: '',
            id: '',
            displayWorkFormStatus: false,

        })
    }
    updateWorkInfoList(){

        this.setState({
            workexpe: this.state.workexpe.concat(this.state.workexpeUpdated),
            addNew: false,
        })

    }
    addNewWorkExpe(){
        if (this.state.displayWorkFormStatus === true){
        return (
            <div>
                <Form onSubmit={this.onSubmitWorkForm}>
                <Form.Group>
                        <Form.Label htmlFor="companyName">Company:</Form.Label>
                        <Form.Control type="text" id="companyName" 
                            onChange={this.handleChanges}
                            value={this.state.companyName}
                            name='companyName'
                        />
                        <br /> 

                        <Form.Label htmlFor="jobRole">Role:</Form.Label>
                        <Form.Control type="text" id="jobRole" 
                            onChange={this.handleChanges}
                            value={this.state.jobRole}
                            name='jobRole'   
                        />
                        <br /> 

                        <Form.Label htmlFor="jobStartDate">From:</Form.Label>
                        <Form.Control type="text" id="jobStartDate" 
                            onChange={this.handleChanges}
                            value={this.state.jobStartDate}
                            name='jobStartDate' 
                        />
                        

                        <Form.Label htmlFor="jobEndDate">To:</Form.Label>
                        <Form.Control type="text" id="jobEndDate" 
                            onChange={this.handleChanges}
                            value={this.state.jobEndDate}
                            name='jobEndDate'
                        />
                        <br /> 

                        <Button type='submit' variant="primary">Save</Button> 
                        <Button onClick={()=> this.cancelWorkFrom()} variant="primary"> cancel</Button> 
                    </Form.Group>
                </Form>
            </div>
        )}
    }

    deleteWorkExpe(id){
        const workListToUpdate = [...this.state.workexpe];
        const updatedWorkList = workListToUpdate.filter(info => info.id !== id);
        this.setState({
            workexpe: updatedWorkList
        })
    }

    displayAllWorkexpe(){
        return this.state.workexpe.map(
            info => {
                return (
                    <div>
                        <ul>
                            <li>{info.companyName}</li>
                            <li>{info.jobRole}</li>
                            <li>{info.jobStartDate}</li>
                            <li>{info.jobEndDate}</li>
                            <li><Button onClick={()=>{this.deleteWorkExpe(info.id)}} variant="primary">X</Button></li>
                        </ul>  
                        <br />
                    </div>
                )
            }
        )
    }

    displayAddForm(){
        this.setState({
            displayWorkFormStatus: true
        })
    }

    render(){
        return(
            <div>
                <h3>Work Experience</h3>
                <Button onClick={()=> this.displayAddForm()} variant="primary">
                    +Add
                </Button>
                {this.addNewWorkExpe()}
                {this.displayAllWorkexpe()}
            </div>
        )
    }
}

export default WorkExp;