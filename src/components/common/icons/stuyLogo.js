import React from "react";

import logo from "../../../resource/logos/stuyesportstextonlyblack.png";

export default class StuyLogo extends React.Component {
    render () {
        return (
            <img alt={"stuy logo"} src={logo} width={this.props.width} />
        )
    }
}