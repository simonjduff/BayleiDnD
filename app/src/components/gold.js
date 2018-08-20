import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class Gold extends React.Component{
    render(){
        const currencyValues = [
            {
                denomination: "pp",
                order: 0,
                copperEach: 1000
            },
            {
                denomination: "gp",
                order: 1,
                copperEach: 100
            },
            {
                denomination: "ep",
                order: 2,
                copperEach: 50
            },
            {
                denomination: "sp",
                order: 3,
                copperEach: 10
            },
            {
                denomination: "cp",
                order: 4,
                copperEach: 1
            }
        ];
        
        const currencyValue = m => {
            return currencyValues.filter(c => c.denomination === m.Denomination)[0];
        }

        const money = this.props.Money
            .sort((a,b) => 
                currencyValue(a).Order > currencyValue(b).Order);

        const totalCopper = 
            money
                .map(m =>
                    currencyValue(m).copperEach * m.Count
                ).reduce((acc, curr) =>
                    acc += curr
                );

        const total = () => {
            var runningCount = totalCopper;
            return currencyValues
                .reduce((acc, cur) => {
                    var countForThisCurrency = Math.floor(runningCount / cur.copperEach);
                    runningCount = runningCount % cur.copperEach;
                    acc.push({
                        denomination: cur.denomination,
                        count: countForThisCurrency
                    });
                    return acc;
                },[])
                .map(m => 
                    <Grid item key={m.Denomination} xs={4} lg={2}>{m.count}{m.denomination}</Grid>
                );
        }

        const moneyHtml =
            money
                .map(m => {
                    return (<Grid item key={m.Denomination} xs={4} lg={2}>{m.Count}{m.Denomination}</Grid>)
                });

        return(
            <Paper>
                <Grid container spacing={24}>
                    {moneyHtml}
                </Grid>
                Total
                <Grid container spacing={24}>
                    {total()}
                </Grid>
            </Paper>
        )
    }
}