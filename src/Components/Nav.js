import React, { Component } from 'react';
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <nav>
                    <div className="Title">
                        <h4>Word App</h4>
                    </div>
                   <ul>
                     <li className="App-list">Home</li>
                     <li>Results</li>
                </ul>
                </nav>
            </div>
         );
    }
}
 
export default Nav;