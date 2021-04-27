import React from 'react';

class Skills extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            addskill: '',
            skillList: [
                {skill: 'c++'},
                {skill: 'python'},
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
                skill: this.state.addskill
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

    displaySkillList(){
        return this.state.skillList.map(info => {
            return (
                <li>{info.skill}</li>
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