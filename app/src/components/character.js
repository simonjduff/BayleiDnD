import React from 'react';

export default class Character extends React.Component{
    render(){
        return (
            <div>
                <div className='name-box dndbox'>M'Chee-daro</div>
                <div className='character-box dndbox'>
                    <div>
                        <div className='character-class character-container'>
                            <div className='character-value'>Rogue</div>
                            <div className='character-label'>Class</div>
                        </div>
                        <div className='character-background character-container'>
                            <div className='character-value'>Criminal</div>
                            <div className='character-label'>Background</div>
                        </div>
                        <div className='character-player character-container'>
                            <div className='character-value'>Bastett</div>
                            <div className='character-label'>Player</div>
                        </div>
                    </div>
                    <div>
                        <div className='character-race character-container'>
                            <div className='character-value'>Tabaxi</div>
                            <div className='character-label'>Race</div>
                        </div>
                        <div className='character-alignmnet character-container'>
                            <div className='character-value'>Chaotic Neutral</div>
                            <div className='character-label'>Alignment</div>
                        </div>
                        <div className='character-xp character-container'>
                            <div className='character-value'>0</div>
                            <div className='character-label'>XP</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}