import React from "react";

import styles from "../../../styles/common/footer.module.css";

import StuyLogo from "../icons/stuyLogo";
import FooterLink from "./footerLink";

/* 
    TODO: Email List Signup Component
*/

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className={styles.footer}>
                <div className={styles.firstRow}>
                    <StuyLogo width={200} />
                </div>
                <div className={styles.secondRow}>
                    
                </div>
                <div className={styles.thirdRow}>
                    <FooterLink name="HOME" to="/" />
                    <FooterLink name="ABOUT" to="/about" />
                    <FooterLink name="PARTNERS" to="/partners" />
                    <FooterLink name="TEAMS" to="/teams" />
                    <FooterLink name="CONTACT" to="/contact" />
                </div>
                <div className={styles.trademark}>© 2022, Stuyvesant Competitive Gaming Club</div>
            </div>
        )
    }
}