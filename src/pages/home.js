import React from "react";
import { Helmet } from "react-helmet";

import styles from "../styles/pages/home.module.css";

import video from "../resource/vids/montage_vala_2022.mp4";
import logo from "../resource/logos/stuyesportstextonlyblack.png";

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
                    <div className={styles.mainTitle}>
                        <img className={styles.mainLogo} src={logo} />
                    </div>
                    <video className={styles.mainVideo} loop autoPlay playsInline muted width="1920" height="910">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        )
    }
}