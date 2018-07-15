import React from 'react';

export default class Stats extends React.Component{
    render(){
        const statContainers = this.props.Stats.map((stat, index) => 
            <div className="stat-container" key={stat.Name}>
                <div className="stat-value">{stat.Value}</div>
                <div className="stat-label">{stat.Name}</div>
            </div>
        );

        return (
            <div className="dndbox stats-container">
                {statContainers}
            </div>
        );
    }
}