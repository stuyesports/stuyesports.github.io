import { Outlet } from "react-router-dom";

import NavBar from "../common/nav/navBar.js";

import styles from "../../styles/global.module.css";

// combination of search + side bar
const MainLayout = () => (
    <div className={styles.mainWrapper}>
        <NavBar />
        <Outlet />
    </div>
);

export default MainLayout;