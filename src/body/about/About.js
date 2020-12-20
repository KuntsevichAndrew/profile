import React, {Component} from 'react';
import { withTranslation } from "react-i18next";
import { Container, Typography, Grid } from "@material-ui/core";
import ReactTypingEffect from 'react-typing-effect';

import "../../assets/style/about.css";
import MeImage from "../../assets/image/me.jpg";

class About extends Component {
    render() {
        const { t } = this.props;
        return (
            <Container maxWidth="lg" className="about-container">
                <Grid item justify="center"
                      alignItems="center" xs={12} className="about-title">
                    <ReactTypingEffect text={t("about.title")} /></Grid>

                <Grid container justify="center"
                      alignItems="center" spacing={3}>
                    <Grid item xs={4}>
                        <img src={MeImage} className="my-image" />
                    </Grid>
                    <Grid item xs={8}>

                        <Typography className="desc-description">{t("about.description")}</Typography>
                    </Grid>
                </Grid>
            </Container>
            // <Grid
            //     container
            //     direction="row"
            //     justify="center"
            //     alignItems="center"
            //     className="about-container">
            //     <Grid className="image" xs={5} >
            //         <Grid item ></Grid>
            //     </Grid>
            //     <Grid className="text"
            //           container
            //           direction="column"
            //           justify="center"
            //           alignItems="center" xs={7} spacing={4} >
            //         <Grid item ></Grid>
            //         <Grid item ><Typography className="desc-description">{t("about.description")}</Typography></Grid>
            //     </Grid>
            // </Grid>
        );
    }
}

export default About = withTranslation('lang')(About);