import React from "react";
import { Helmet } from "react-helmet";

import styles from "../styles/pages/roster.module.css";

import RosterList from "../resource/data/rosterInfo";

import Title from "../components/common/title";
import PlayerCard from "../components/common/playerCard";

/* TODO:
    ADD CHECKING PREVIOUS YEAR'S ROSTERS
*/
export default class Roster extends React.Component {
    constructor(props) {
        super(props);
        /* 
            EXAMPLE:
            this.props.game = "Valorant";
        */

        let keys = Object.keys(RosterList);
        keys = keys.sort((a, b) => b - a);

        this.state = {
            game: this.props.game,
            years: keys,
            selectedYear: 0,
            members: RosterList[keys[0]][this.props.game.toLowerCase()]
        }

        /*
            members: [[username, realName, role, imageUrl, social]]
        */
    }

    renderPlayers = () => {
        let players = [];

        this.state.members.forEach((m, i) => {
            players.push(<PlayerCard username={m[0]} name={m[1]} role={m[2]} imageUrl={m[3]} social={m[4]} key={i} />)
        })

        return players;
    }

    render () {
        return (
            <div>
                <Helmet>
                    <title>StuyEsports - {this.state.game}</title> 
                </Helmet>
                <div className={styles.mainSection}>
                    <Title text={this.state.game.toUpperCase()} />
                    <Title text={this.state.years[this.state.selectedYear]} />
                    {this.renderPlayers()}
                </div>
            </div>
        )
    }
}