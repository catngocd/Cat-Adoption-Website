import React, {Component} from 'react';

class RenderCards extends Component {
    renderCards() {
        const cards = this.props.items.map(item => {
            return {item}
        });

        return(
            <div id="card-wrapper">
                {cards}
            </div>
        );
    }

    render() {
        const cards = this.props.items.map(item => {
            return {item}
        });
        
        return(
                this.renderCards
        );
    }
}

export default RenderCards;