import React from 'react';

export default class Character extends React.Component{
    render(){
        return (
            <div>
                <div className='character-name dndbox column'>
                    <div className='character-value'>{this.props.Character.Name}</div>
                    <div className='character-label'>Character</div>
                </div>
                <div className='character-box dndbox column'>
                    <div>
                        <div className='character-class character-container'>
                            <div className='character-value'>{this.props.Character.Class}</div>
                            <div className='character-label'>Class</div>
                        </div>
                        <div className='character-background character-container'>
                            <div className='character-value'>{this.props.Character.Background.Name}</div>
                            <div className='character-label'>Background</div>
                        </div>
                        <div className='character-player character-container'>
                            <div className='character-value'>{this.props.Character.PlayerName}</div>
                            <div className='character-label'>Player</div>
                        </div>
                    </div>
                    <div>
                        <div className='character-race character-container'>
                            <div className='character-value'>{this.props.Character.Race}</div>
                            <div className='character-label'>Race</div>
                        </div>
                        <div className='character-alignmnet character-container'>
                            <div className='character-value'>{this.props.Character.Alignment}</div>
                            <div className='character-label'>Alignment</div>
                        </div>
                        <div className='character-xp character-container'>
                            <div className='character-value'>{this.props.Character.ExperiencePoints}</div>
                            <div className='character-label'>XP</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}