import React from "react";
import { Helmet } from "react-helmet";

import styles from "../styles/pages/partners.module.css";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Helmet>
                    <title>StuyEsports - Contact</title>
                </Helmet>
            </div>
        )
    }
}