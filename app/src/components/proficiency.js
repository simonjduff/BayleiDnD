import React from 'react';

export default class Proficiency extends React.Component{
    render(){
        return(
            <div className="proficiencybonus-container">
                <div className="dndbox">
                    <span className="proficiencybonus-value">0</span>
                    <span className="proficiencybonus-label">Proficiency Bonus</span>
                </div>
                <div className="proficiency-savingthrows dndbox">
                    <div>
                        <div className="proficiency-value">&nbsp;</div>
                        <span className="proficiency-label">STR</span>
                    </div>
                    <div>
                        <span className="proficiency-value">&#x2713;</span>
                        <span className="proficiency-label">DEX</span>
                    </div>
                    <div>
                        <span className="proficiency-value">&nbsp;</span>
                        <span className="proficiency-label">CON</span>
                    </div>
                    <div>
                        <span className="proficiency-value">&#x2713;</span>
                        <span className="proficiency-label">INT</span>
                    </div>
                    <div>
                        <span className="proficiency-value">&nbsp;</span>
                        <span className="proficiency-label">WIS</span>
                    </div>
                    <div>
                        <span className="proficiency-value">&nbsp;</span>
                        <span className="proficiency-label">CHA</span>
                    </div>
                </div>
                <div className="proficiency-skills dndbox">
                    <div>
                        <div className="proficiency-value">&nbsp;</div>
                        <span className="proficiency-label">Acrobatics STR</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&nbsp;</div>
                        <span className="proficiency-label">Animal Handling WIS</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&nbsp;</div>
                        <span className="proficiency-label">Arcana Int</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&nbsp;</div>
                        <span className="proficiency-label">Athletics STR</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&#x2713;</div>
                        <span className="proficiency-label">Deception CHA</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&nbsp;</div>
                        <span className="proficiency-label">History INT</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&nbsp;</div>
                        <span className="proficiency-label">Insight WIS</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&nbsp;</div>
                        <span className="proficiency-label">Intimidation CHA</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&#x2713;</div>
                        <span className="proficiency-label">Investigation INT</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&nbsp;</div>
                        <span className="proficiency-label">Medicine WIS</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&nbsp;</div>
                        <span className="proficiency-label">Nature INT</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&#x2713;</div>
                        <span className="proficiency-label">Perception WIS</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&nbsp;</div>
                        <span className="proficiency-label">Performance CHA</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&nbsp;</div>
                        <span className="proficiency-label">Persuasion CHA</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&nbsp;</div>
                        <span className="proficiency-label">Religion INT</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&#x2713;</div>
                        <span className="proficiency-label">Sleight of Hand DEX</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&#x2713;</div>
                        <span className="proficiency-label">Stealth DEX</span>
                    </div>
                    <div>
                        <div className="proficiency-value">&nbsp;</div>
                        <span className="proficiency-label">Survival WIS</span>
                    </div>
                </div>
            </div>
        );
    }
}