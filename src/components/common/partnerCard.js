import React from "react";

import styles from "../../styles/common/partnerCard.module.css";

import ReactCardFlip from 'react-card-flip';

import leagueIron from "../../resource/imgs/leagueIron.png";
import valIron from "../../resource/imgs/valIron.png";

export default class partnerCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}))
    }

    imgChooser(){
        if(this.props.tier === "Iron Tier"){
            return(
                <div>
                    <img src={leagueIron}/>
                    <img src={valIron}/>
                </div>
            )
        }
    }
    render(){
        return(
            <ReactCardFlip className = {styles.card} isFlipped = {this.state.isFlipped}>
                <div className={styles.front}>
                    {this.imgChooser};
                    <div className={styles.tier} >
                        {this.props.tier.toUpperCase()}
                    </div>
                    <button onClick={this.handleClick}>Benefits</button>
                </div>
                <div className={styles.back}>
                    whatever

                    <button onClick={this.handleClick}>Tier</button>
                </div>
            </ReactCardFlip>
        )
    }
}