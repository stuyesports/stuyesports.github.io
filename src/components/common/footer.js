import React from "react";

import styles from "../../styles/common/footer.module.css";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className={styles.footer}>
                <div className={styles.trademark}>© 2022, Stuyvesant Competitive Gaming Club</div>
            </div>
        )
    }
}