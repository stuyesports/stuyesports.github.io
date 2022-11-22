import React from "react";
import { Helmet } from "react-helmet";

import styles from "../styles/pages/home.module.css";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div>
                <Helmet>
                    <title>StuyEsports</title>
                </Helmet>
                <div className={styles.mainSection}>

                </div>
            </div>
        )
    }
}