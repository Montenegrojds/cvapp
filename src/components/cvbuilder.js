import React from 'react';
import PersonalInfo from './personalinfo';
import Education from './education';
import WorkExp from './workexp'
import Skills from './skills';
import Pdfconverter from './pdfconverter'
class Cvbuilder extends React.Component {
    render(){
        return (
            <div>
                
                <PersonalInfo />
                <Education />
                <WorkExp />
                <Skills />
                <Pdfconverter/>
            </div>
        )
    }
}

export default Cvbuilder;
