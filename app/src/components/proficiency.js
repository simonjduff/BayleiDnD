import React from 'react';
import Paper from '@material-ui/core/Paper';

export default class Proficiency extends React.Component{
    render(){
        const proficiencyBonus = this.props
            .Proficiency
            .Bonus
            .map(v => v.Value)
            .reduce((acc,v) => acc + v);
        const stats = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
        const myStats = this.props.Proficiency.SavingThrows.map(s => s.Name);
        const selectedStats = stats.map(s => 
                ({
                    Name: s, 
                    Proficient: myStats.includes(s),
                })
            ).map(s => 
                <div key={s.Name} className="clearfix">
                    <span className={`proficiency-label ${s.Proficient ? "proficient" : ""}`}>{s.Name}</span>
                    <span className={`proficiency-value ${s.Proficient}`}>
                        + {this.props.Stats.filter(v => v.Name === s.Name)[0].Modifier + (s.Proficient ? proficiencyBonus : 0)}
                    </span>
                </div>
            );

        const other = this.props.Proficiency.Other.map(p =>
                <div key={p.Name}>
                    <div className="proficiencyType">{p.Name}</div>
                    {
                        p.Items.map(i => {
                            var expert = i.Expert ? "expert" : "";
                            return (<div className={`proficiencyName ${expert}`} key={`${p.Name}${i.Name}`}>{i.Name}</div>)
                        })
                    }
                </div>
        );

        return(
            <div className="proficiencybonus-container">
                <Paper className="dndbox">
                    <span className="proficiencybonus-value">{proficiencyBonus}</span>
                    <span className="proficiencybonus-label">Proficiency Bonus</span>
                </Paper>
                <Paper>
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