import React  from "react";
import uniqid from "uniqid";

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
                <form onSubmit={this.onSubmitWorkForm}>
                    <label htmlFor="companyName">Company:</label>
                    <input type="text" id="companyName" 
                        onChange={this.handleChanges}
                        value={this.state.companyName}
                        name='companyName'
                    />
                    <br /> 

                    <label htmlFor="jobRole">Role:</label>
                    <input type="text" id="jobRole" 
                        onChange={this.handleChanges}
                        value={this.state.jobRole}
                        name='jobRole'   
                    />
                    <br /> 

                    <label htmlFor="jobStartDate">From:</label>
                    <input type="text" id="jobStartDate" 
                        onChange={this.handleChanges}
                        value={this.state.jobStartDate}
                        name='jobStartDate' 
                    />
                    

                    <label htmlFor="jobEndDate">To:</label>
                    <input type="text" id="jobEndDate" 
                        onChange={this.handleChanges}
                        value={this.state.jobEndDate}
                        name='jobEndDate'
                    />
                    <br /> 

                    <button type='submit'>Save</button> 
                    <button onClick={()=> this.cancelWorkFrom()}> cancel</button> 
                </form>
            </div>
        )}
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
                <button onClick={()=> this.displayAddForm()}>
                    +Add
                </button>
                {this.addNewWorkExpe()}
                {this.displayAllWorkexpe()}
            </div>
        )
    }
}

export default WorkExp;