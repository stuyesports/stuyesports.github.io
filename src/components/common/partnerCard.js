import React from "react";

import styles from "../../styles/common/partnerCard.module.css";

import ReactCardFlip from 'react-card-flip';

import leagueIron from "../../resource/imgs/leagueIron.png";
import valIron from "../../resource/imgs/valIron.png";

export default class PartnerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}))
    }

    /* 
    INSTEAD OF DOING THIS, FOR BETTER REUSABILITY, MAYBE ACCEPT 
    - cardName property
    - cardImage property

    so we don't have to hardcode each case.
    */
    imgChooser(){
        if(this.props.tier === "Iron"){
            return(
                <div className={styles.tierImagesContainer}>
                    <img className={styles.tierImage} src={leagueIron}/>
                    <img className={styles.tierImage} src={valIron}/>
                </div>
            )
        }
    }
    render(){
        return(
            <ReactCardFlip isFlipped={this.state.isFlipped}>
                <div className={styles.card}>
                    <div className={styles.tier}>
                        {this.props.tier.toUpperCase() + " TIER"}
                    </div>
                    {this.imgChooser()};
                    <div className={styles.buttonContainer}>
                        <button className={styles.benefits} onClick={this.handleClick}>See Benefits</button>
                    </div>
                </div>
                <div className={styles.card}>
                    lorem ipsum

                    <div className={styles.buttonContainer}>
                        <button className={styles.benefits} onClick={this.handleClick}>Tier</button>
                    </div>
                </div>
            </ReactCardFlip>
        )
    }
}