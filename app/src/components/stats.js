import React from 'react';

export default class Stats extends React.Component{
    render(){
        return (
            <div className="dndbox stats-container">
                <div className="stat-container">
                    <div className="stat-value">13</div>
                    <div className="stat-label">STR</div>
                </div>
                <div className="stat-container">
                    <div className="stat-value">17</div>
                    <div className="stat-label">DEX</div>
                </div>
                <div className="stat-container">
                    <div className="stat-value">14</div>
                    <div className="stat-label">CON</div>
                </div>
                <div className="stat-container">
                    <div className="stat-value">16</div>
                    <div className="stat-label">INT</div>
                </div>
                <div className="stat-container">
                    <div className="stat-value">12</div>
                    <div className="stat-label">WIS</div>
                </div>
                <div className="stat-container">
                    <div className="stat-value">15</div>
                    <div className="stat-label">CHA</div>
                </div>
            </div>
        );
    }
}