import React from "react";
import { Helmet } from "react-helmet";

import styles from "../styles/pages/about.module.css";

import { Card, CardContent, CardMedia, CardActionArea, Typography, Stack } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import stuyImg from "../resource/imgs/stuyfront.jpg";

const stuyOfficialSite = "https://stuy.enschool.org/";

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
                    <Card sx={{ display: 'flex', maxWidth: 500 }} onClick={() => this.externalRedirect(stuyOfficialSite)}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={stuyImg}
                            alt="Stuyvesant Highschool"
                            />
                            <CardContent>
                                <Stack spacing={0.5}>
                                    <Typography variant="body2" color="text.secondary">
                                        <LocationOn sx={{color: grey[500]}} /> New York, NY
                                    </Typography>
                                    <Typography fontWeight={700}>Stuyvesant Highschool</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        "Stuyvesant High School has been a symbol of excellence in education for over a century. Our mission is to continue and enhance that commitment by providing an environment which will nurture and enhance the special academic talents of the students admitted to Stuyvesant."
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