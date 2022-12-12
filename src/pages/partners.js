import React from "react";
import { Helmet } from "react-helmet";

import styles from "../styles/pages/partners.module.css";

import Title from "../components/common/title.js";
import PartnerCard from "../components/common/partnerCard";

export default class Partners extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Helmet>
                    <title>StuyEsports - Partners</title>
                </Helmet>
                <div>
                    <Title text="PARTNERS" />
                    <div className={styles.partnersContainer}>
                        <PartnerCard tier="Iron" />
                    </div>
                    <div className={styles.partnersNotice}>
                        Want to partner? Head over to our contacts page for more information.
                    </div>
                </div>
            </div>
        )
    }
}