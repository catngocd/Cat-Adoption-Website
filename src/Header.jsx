import React, { Component } from 'react';
import './styles.css';
class Header extends Component {
    render() {
        return(
            <div id="header"> 
            {this.props.pageName}
            </div>
        );
    }
}

export default Header;