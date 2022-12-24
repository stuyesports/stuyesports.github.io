import React from "react";

import styles from "../../../styles/common/navBar.module.css";

import StuyLogo from "../icons/stuyLogo";
import Hamburger from "../../../resource/imgs/hamburgericon.png";

import NavElem from "./navElem";

// logo kinda looks bad on navbar, needs a new one

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDrop: false,
        }
    }

    renderDropdown = () => {
        if (this.state.displayDrop) return (
            <div className={styles.navDropdown}>
                <NavElem name="HOME" to="/" />
                <NavElem name="ABOUT" to="/about" />
                <NavElem name="PARTNERS" to="/partners" />
                <NavElem name="TEAMS" to="/teams" />
            </div>
        )
    }

    render = () => {
        return (
            <div className={styles.navBar}>
                <div className={styles.navLogoWrapper}>
                    <StuyLogo width={150} />
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
                    <img width={80} height={80} src={Hamburger} className={styles.navHamburger} onClick={() => {
                        this.setState({ displayDrop: !this.state.displayDrop })
                    }} />
                </div>

                {this.renderDropdown()}
            </div>
        )
    }
}