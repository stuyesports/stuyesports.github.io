import React from "react";

import { Link } from "react-router-dom";

import styles from "../../../styles/common/footerLink.module.css";

export default class FooterLink extends React.Component {
    constructor(props) {
        super(props);

        /* 
            this.props.name = "MainName"
            this.props.to = "/url"
        */
    }

    render = () => {
        return (
            <div className={styles.footerLink}>
                <Link to={this.props.to} style={{ textDecoration: 'none' }}>
                    <div className={styles.footerLinkHover}>
                        {this.props.name}
                    </div>
                </Link>
            </div>
        )
    }
}