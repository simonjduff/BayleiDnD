import React from 'react';

export default class Stats extends React.Component{
    render(){
        return (
            <div className="dndbox stats-container">
                <div className="stat-container">
                    <div className="character-value">13</div>
                    <div className="character-label">STR</div>
                </div>
                <div className="stat-container">
                    <div className="character-value">17</div>
                    <div className="character-label">DEX</div>
                </div>
                <div className="stat-container">
                    <div className="character-value">14</div>
                    <div className="character-label">CON</div>
                </div>
                <div className="stat-container">
                    <div className="character-value">16</div>
                    <div className="character-label">INT</div>
                </div>
                <div className="stat-container">
                    <div className="character-value">12</div>
                    <div className="character-label">WIS</div>
                </div>
                <div className="stat-container">
                    <div className="character-value">15</div>
                    <div className="character-label">CHA</div>
                </div>
            </div>
        );
    }
}