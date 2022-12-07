import React from "react";

import { Link } from "react-router-dom";

import styles from "../../../styles/common/navBar.module.css";

/* 
TODO: DROPDOWNS
*/
export default class NavElem extends React.Component {
    constructor(props) {
        super(props);

        /* 
            this.props.name = "MainName"
            this.props.to = "/url"
            this.props.dropdown = [
                ["DropDown1", "Url"],
                ["DropDown2", "Url"]
            ],
        */
    }

    render = () => {
        return (
            <div className={styles.navMainElement}>
                <Link to={this.props.to} style={{ textDecoration: 'none' }}>
                    <div className={styles.navMainHover}>
                        {this.props.name}
                    </div>
                </Link>
            </div>
        )
    }
}