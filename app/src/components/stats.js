import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class Stats extends React.Component{
    statModifier(stat) {return Math.floor((stat - 10) / 2)}

    render(){
        const statContainers = this.props.Stats.map((stat, index) => 
            <Grid container className="dndbox stats-container">
                <Grid item key={stat.Name}>
                    <Paper className="stat-container">
                        <div className="stat-value">{stat.Value} <span className='statModifier'>({this.statModifier(stat.Value)})</span></div>
                        <div className="stat-label">{stat.Name}</div>
                    </Paper>
                </Grid>
            </Grid>
        );

        return (
            <div>
                {statContainers}
            </div>
        );
    }
}