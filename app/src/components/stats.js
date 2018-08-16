import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class Stats extends React.Component{
    render(){
        const statContainers = this.props.Stats.map((stat, index) => 
            <Grid container className="dndbox stats-container" key={stat.Name}>
                <Grid item>
                    <Paper className="stat-container">
                        <div className="stat-value">{stat.Value} <span className='statModifier'>({stat.Modifier})</span></div>
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