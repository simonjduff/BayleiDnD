import React from 'react';

export default class ProficiencyBonus extends React.Component{
    render(){
        return(
            <div className="dndbox proficiencybonus-container">
                <span className="proficiencybonus-value">0</span>
                <span className="proficiencybonus-label">Proficiency Bonus</span>
            </div>
        );
    }
}