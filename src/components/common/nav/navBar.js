import React from "react";

import styles from "../../../styles/common/navBar.module.css";

import logo from "../../../resource/logos/stuyesportstextonlyblack.png";

import NavElem from "./navElem";

// logo kinda looks bad on navbar, needs a new one

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className={styles.navBar}>
                <div className={styles.navLogoWrapper}>
                    <img src={logo} className={styles.navLogo} />
                </div>

                {/* FULLSCREEN (Desktop) */}
                <div className={styles.navMain}>
                    <NavElem name="HOME" to="/" />
                    <NavElem name="ABOUT" to="/about" />
                    <NavElem name="PARTNERS" to="/partners" />
                    <NavElem name="TEAMS" to="/teams" />
                </div>
                <div className={styles.navRight}>
                    <NavElem name="CONTACT" to="/contact" />
                </div>

                {/* MOBILE, dropdown WIP */}
                <div className={styles.navSmallRight}>
                    <div className={styles.navHamburger}>

                    </div>
                </div>
            </div>
        )
    }
}