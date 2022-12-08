import React from "react";

const style = {
    "width": "100%",
    "fontSize": "100px",
    "fontFamily": 'Anybody',
    "color": "white",
    "paddingLeft": "20px",
    "paddingTop": "50px",
    "height": "200px",
    "display": "flex",
    "alignItems": "center"
}

export default class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div style={style}>
                {this.props.text}
            </div>
        )
    }
}
