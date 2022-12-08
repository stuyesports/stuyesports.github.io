import React from "react";
import { Helmet } from "react-helmet";

import styles from "../styles/pages/teams.module.css";

import { Navigate } from "react-router-dom";

import valorantCover from "../resource/imgs/valorantcover.jpg";
import leagueCover from "../resource/imgs/leaguecover.jpg";

export default class Teams extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: ""
        }
    }

    renderVerticalTitle = title => {
        let letters = [];

        title.split("").forEach(l => {
            letters.push(
                <div className={styles.verticalTitleLetter}>
                    {l.toUpperCase()}
                </div>
            )
        })

        return (
            <div className={styles.verticalTitle}>
                <div className={styles.letterContainer}>{letters}</div>
            </div>
        )
    }

    renderGame = (game, to, img) => {
        return (
            <div className={styles.gameCard} onClick={() => {this.setState({ redirect: to })}}>
                <div className={styles.opacityHover}></div>
                {this.renderVerticalTitle(game)}
                <img alt={game} src={img} className={styles.gameCover} />
            </div>
        )
    }

    redirect = () => {
        if (this.state.redirect)
            return <Navigate to={this.state.redirect} />
    }

    render () {
        return (
            <div>
                {this.redirect()}
                <Helmet>
                    <title>StuyEsports - Teams</title>
                </Helmet>
                <div className={styles.title}>TEAMS</div>
                <div className={styles.mainSection}>
                    {this.renderGame("Valorant", "/teams/valorant", valorantCover)}
                    {this.renderGame("League", "/teams/league", leagueCover)}
                </div>
            </div>
        )
    }
}