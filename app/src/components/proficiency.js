import React from 'react';

export default class Proficiency extends React.Component{
    render(){
        const proficiencyBonus = this.props
            .Proficiency
            .Bonus
            .map(v => v.Value)
            .reduce((acc,v) => acc + v);
        const tick = String.fromCharCode(0x2713);
        const nbsp = String.fromCharCode(0xa0);
        const stats = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
        const myStats = this.props.Proficiency.SavingThrows.map(s => s.Name);
        const selectedStats = stats.map(s => 
                ({"Name": s, "Tick": myStats.includes(s) ? tick : nbsp})
            ).map(s => 
                <div key={s.Name}>
                    <div className="proficiency-value">{s.Tick}</div>
                    <span className="proficiency-label">{s.Name}</span>
                </div>
            );

        return(
            <div className="proficiencybonus-container">
                <div className="dndbox">
                    <span className="proficiencybonus-value">{proficiencyBonus}</span>
                    <span className="proficiencybonus-label">Proficiency Bonus</span>
                </div>
                <div className="proficiency-savingthrows dndbox">
                    {selectedStats}
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