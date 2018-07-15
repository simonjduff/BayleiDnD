import React from 'react';

export default class Inspiration extends React.Component{
    render(){
        return(
            <div className="dndbox inspiration-container">
                <span className="inspiration-value">{this.props.Inspiration}</span>
                <span className="inspiration-label">Inspiration</span>
            </div>
        );
    }
}