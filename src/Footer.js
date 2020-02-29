import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        let time = new Date().getFullYear();
        return ( 
            <div className="footer">
                Moses Codes {time}
            </div>
         );
    }
}
 
export default Footer;