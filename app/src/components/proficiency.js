import React from 'react';
import Paper from '@material-ui/core/Paper';

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

        const other = this.props.Proficiency.Other.map(p => 
            <div key="{p.Name}">
                <div className="proficiencyType">{p.Name}</div>
                {p.Items.map(i => 
                    <div className='proficiencyName' key="{p.Name}{i.Name}">{i.Name}</div>
                )}
            </div>
        );

        return(
            <div className="proficiencybonus-container">
                <Paper className="dndbox">
                    <span className="proficiencybonus-value">{proficiencyBonus}</span>
                    <span className="proficiencybonus-label">Proficiency Bonus</span>
                </Paper>
                <Paper>
                    <h3>Proficiency</h3>
                    <div className="proficiency-savingthrows dndbox">
                        <div className="proficiencyType">Saving Throws</div>
                        {selectedStats}
                    </div>
                    <div className="proficiency-skills dndbox">
                    {other}
                    </div>
                </Paper>
            </div>
        );
    }
}