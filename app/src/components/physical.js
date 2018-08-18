import React from 'react';
import Grid from '@material-ui/core/Grid';

export default class Physical extends React.Component{
    render(){
        return (
            <div>
                <Grid container>
                    <Grid item lg={4}></Grid><Grid item lg={4}></Grid><Grid item lg={4}></Grid>
                    <Grid item lg={12}></Grid>
                    <Grid item lg={12}></Grid>
                    <Grid item lg={6}></Grid><Grid item lg={6}></Grid>
                </Grid>
            </div>
        );
    }
}