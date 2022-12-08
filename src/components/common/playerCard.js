import React from "react";

import styles from "../../styles/common/playerCard.module.css";

import NoProfile from "../../resource/imgs/noprofile.jpg";

export default class PlayerCard extends React.Component {
    constructor(props) {
        super(props);

        /* 
            this.props.name = ""; real name
            this.props.username = ""; username
            this.props.role = "";
            this.props.imageUrl = "";
            this.props.social = ""; url to social
        */
    }

    render () {
        return (
            <div className={styles.playerCard} onClick={() => {
                window.open(this.props.social, "_blank")
            }}>
                <img src={NoProfile} className={styles.playerImage} />
                <div className={styles.playerName}>
                    {this.props.username.toUpperCase()}
                </div>
            </div>
        )
    }
}