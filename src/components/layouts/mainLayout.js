import { Outlet } from "react-router-dom";

import NavBar from "../common/nav/navBar.js";
import Footer from "../common/footer/footer.js";

import styles from "../../styles/global.module.css";

// combination of search + side bar
const MainLayout = () => (
    <div className={styles.mainWrapper}>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
);

export default MainLayout;