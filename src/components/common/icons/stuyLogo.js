import React from "react";

import logo from "../../../resource/logos/stuyesportstextonlyblack.png";

export default class StuyLogo extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <img src={logo} width={this.props.width} />
        )
    }
    
}