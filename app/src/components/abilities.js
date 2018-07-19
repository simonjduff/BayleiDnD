import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class Abilities extends React.Component{
    ability(ability){
        var limitations = (ability.Limitation || []).map(l => <li key='l{l}'>{l}</li>);
        var bonuses = (ability.Bonus || []).map(l => <li key='b{l}'>{l}</li>);

        return(
            <div>
                <h4>{ability.Name}</h4>
                <div className='abilityLabel'>Bonuses</div>
                <ul>
                    {bonuses}
                </ul>
                <div className='abilityLabel'>Limitations</div>
                <ul>
                    {limitations}
                </ul>
            </div>
        );
    }

    render(){
        const abilities = this.props.Abilities.map(a => this.ability(a));

        return (
            <Paper className='abilities-container'>
                {abilities}
            </Paper>
        );
    }
}