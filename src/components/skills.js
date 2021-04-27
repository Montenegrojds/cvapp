import React from 'react';
import uniqid from "uniqid";

class Skills extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            addskill: '',
            skillList: [
                {skill: 'c++', id: uniqid()},
                {skill: 'python', id: uniqid()},
            ],
            displayFormStatus: false,
            skillupdate:{
            }
        }
    }
    
    handleChanges = (e)=>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({            
            [name]: value        
        });

    }

    displaySkillForm(){
        this.setState({
            displayFormStatus: true,
        })
        
    }
    onSubmitSkill = (e)=>{
        e.preventDefault();
        this.setState({
            skillupdate: {
                skill: this.state.addskill,
                id: uniqid(),
            },
            displayFormStatus: false

        })
        
        setTimeout(() => {
            this.updatedSkillList();
          }, 1);


    }

    updatedSkillList(){
        this.setState({
            skillList: this.state.skillList.concat(this.state.skillupdate)
        })
    }

    cancelDisplayNewSkill(){
        this.setState({
            displayFormStatus: false,
            addskill: '',


        })
    }

    addSkill(){
        if (this.state.displayFormStatus === true){
        return(
            <div>
                  <form onSubmit={this.onSubmitSkill}>
                    <label htmlFor="addskill">Add a skill:</label>
                    <input type="text" id="addskill" 
                        onChange={this.handleChanges}
                        value={this.state.addSkill}
                        name="addskill"
                        required
                    />
                    <br />

                    <button type="submit">Save</button> 
                    <button onClick={()=> this.cancelDisplayNewSkill()}> cancel</button> 
                </form>
            </div>
            )
        }
    }

    deleteSkill(id) {
        const skillListToupdate = [...this.state.skillList];
        const updatedList = skillListToupdate.filter(info => info.id !== id);
        this.setState({
            skillList: updatedList
        })
    }

    displaySkillList(){
        return this.state.skillList.map(info => {
            return (
                <li>{info.skill} 
                    <button onClick={()=> this.deleteSkill(info.id)}>
                        X
                    </button>
                </li>
            )
        })
    }
        


    render(){
        return(
            <div>
                <h3>Skills</h3>
                <button onClick={()=> this.displaySkillForm()}>
                    +Add
                </button>
                {this.addSkill()}

                <ul>
                    {this.displaySkillList()}
                </ul>
              
            </div>
        )
    }
}

export default Skills;