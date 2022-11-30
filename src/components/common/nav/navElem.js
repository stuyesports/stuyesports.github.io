import React from "react";

import { Navigate } from "react-router-dom";

import styles from "../../../styles/common/navBar.module.css";

/* 
TODO: DROPDOWNS
*/
export default class NavElem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }

        /* 
            this.props.name = "MainName"
            this.props.to = "/url"
            this.props.dropdown = [
                ["DropDown1", "Url"],
                ["DropDown2", "Url"]
            ]
        */
    }

    redirect = () => {
        if (this.state.redirect)
            return <Navigate to={this.props.to} />
    }

    render = () => {
        return (
            <>
                {this.redirect()}
                <div className={styles.navMainElement} onClick={() => { this.setState({ redirect: true}) }}>
                    <div className={styles.navMainHover}>
                        {this.props.name}
                    </div>
                </div>
            </>
        )
    }
}