import React from "react";
import { Helmet } from "react-helmet";

import styles from "../styles/pages/about.module.css";

import { Card, CardContent, CardMedia, CardActionArea, Typography, Stack } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import stuyImg from "../resource/imgs/stuyfront.jpg";
import scgcImg from "../resource/logos/stuygamingclublogo.png";

const stuyOfficialSite = "https://stuy.enschool.org/";
const scgcSite = "https://stuyactivities.org/SCGC";

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    externalRedirect = url => {
        window.open(url, '_blank');
    }

    render = () => {
        return (
            <div>
                <Helmet>
                    <title>StuyEsports - About</title>
                </Helmet>
                <div className={styles.aboutTitle}>ABOUT US</div>
                <div className={styles.schoolInfo}>
                    <Card sx={{ display: 'flex', maxWidth: 500, marginBottom: 5 }} onClick={() => this.externalRedirect(stuyOfficialSite)}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="230"
                            image={stuyImg}
                            alt="Stuyvesant High School"
                            />
                            <CardContent>
                                <Stack spacing={0.5}>
                                    <Typography variant="body2" color="text.secondary">
                                        <LocationOn sx={{color: grey[500]}} /> New York, NY
                                    </Typography>
                                    <Typography fontWeight={700}>Stuyvesant High School</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        "Stuyvesant High School has been a symbol of excellence in education for over a century. Our mission is to continue and enhance that commitment by providing an environment which will nurture and enhance the special academic talents of the students admitted to Stuyvesant."
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ display: 'flex', maxWidth: 500, marginBottom: 5 }} onClick={() => this.externalRedirect(scgcSite)}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="230"
                            image={scgcImg}
                            alt="Competitive Gaming Club"
                            />
                            <CardContent>
                                <Stack spacing={0.5}>
                                    <Typography variant="body2" color="text.secondary">
                                        <LocationOn sx={{color: grey[500]}} /> New York, NY
                                    </Typography>
                                    <Typography fontWeight={700}>Stuyvesant Competitive Gaming Club</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        The Stuyvesant Competitive Gaming Club (SCGC) unites our gaming community and provides opportunities to participate in eSport leagues for Valorant and League. We work together with the other gaming clubs at Stuy in order to develop high school eSports.
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        )
    }
}