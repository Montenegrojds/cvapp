import React from 'react';
import uniqid from "uniqid";
class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameUniversity:'',
            from: '',
            to:'',
            degree: '',
            id: '',
            addNew:false,  
            education: [
                {
                nameUniversity:'ucsp',from: '2000', to: '2015', degree: 'cs', id: uniqid()}
            
            ],
            educationtoupdate: {
                
            }
        }

        this.handleChanges = this.handleChanges.bind(this);
        this.onSubmitEducation = this.onSubmitEducation.bind(this);
        this.displayEducation = this.displayEducation.bind(this);
        this.addNewEducation = this.addNewEducation.bind(this);
        this.cancelDisplayEducation = this.cancelDisplayEducation.bind(this);
        this.updateEducationList = this.updateEducationList.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
        this.displayAllEducation = this.displayAllEducation.bind(this);
    }

    handleChanges = (e)=>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({            
            [name]: value        
        });

    }

    onSubmitEducation = (e)=>{
        e.preventDefault();
        this.setState({
            educationtoupdate: {
                nameUniversity: this.state.nameUniversity,
                from: this.state.from,
                to: this.state.to,
                degree: this.state.degree,
                id: uniqid(),
            },
            
        })
        setTimeout(() => {
            this.updateEducationList();
          }, 1);
        
        this.cancelDisplayEducation();

    }
    updateEducationList(){
        this.setState({
            education: this.state.education.concat(this.state.educationtoupdate),
            addNew: false,
        })
    }

    displayEducation(){
        this.setState({
            addNew: true,
        })}

    cancelDisplayEducation(){
            this.setState({
                addNew: false,
                nameUniversity:'',
                from: '',
                to:'',
                degree: '',
                id: '',
            })
    }

    deleteEducation(id){
        const educationlist = [...this.state.education];
        const updatedEducationList = educationlist.filter(edu => edu.id !== id);
        this.setState({
            education: updatedEducationList
        })
    }

    displayAllEducation(){
        return this.state.education.map(
            info => {
                return(
                    <div>
                        <li>{info.nameUniversity}</li>
                        <li>{info.from}</li>
                        <li>{info.to}</li>
                        <li>{info.degree}</li>
                        <li>
                            {info.id} 
                            <button onClick={()=> this.deleteEducation(info.id)}>
                                X
                            </button> 
                        </li>
                    </div>
                )
            }
        )
    }

    

    addNewEducation(){
        if (this.state.addNew === true){
        return(
            <div>
               <form onSubmit={this.onSubmitEducation}>
                    <label htmlFor="nameUniversity">Name of University or School:</label>
                    <input type="text" id="nameUniversity" 
                        onChange={this.handleChanges}
                        value={this.state.nameUniversity}
                        name='nameUniversity'
                    
                    />
                    <br />

                    <label htmlFor="from">From:</label>
                    <input type="text" id="from" 
                        onChange={this.handleChanges}
                        value={this.state.from}
                        name='from'
                    />
                   
                    
                    <label htmlFor="to">To:</label>
                    <input type="text" id="to" 
                        onChange={this.handleChanges}
                        value={this.state.to}
                        name='to'
                    />
                    <br />  

                    <label htmlFor="degree">Degree:</label>
                    <input type="text" id="degree" 
                        onChange={this.handleChanges}
                        value={this.state.degree}
                        name='degree'
                    />                    

                    <br />
                    <button type="submit" >Save</button> 
                    <button onClick={()=> this.cancelDisplayEducation()}> cancel</button> 
                </form>
            </div>
        )}
    }
    
    
    render(){
        return(
            <div>
                
            <h3>Education</h3>
            <button onClick={()=> this.displayEducation()}>
                +Add
            </button>
            {this.addNewEducation()}
            <ul>
                {this.displayAllEducation()}
            </ul>
            
            </div>
        )
    }
}

export default Education