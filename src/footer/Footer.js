import React, {Component} from 'react';
import {Container, Link, Grid} from "@material-ui/core";
import {withTranslation} from "react-i18next";
import Copyright from "./Copyright";
import "../assets/style/footer.css";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Container maxWidth="sm">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className="social-link"  spacing={1}>
                        <Grid>
                            <Link href="https://www.linkedin.com/in/andrew-kuntsevich-aa4b3a182/" target="_blank">
                                <LinkedInIcon className="linked-in"/></Link></Grid>
                        <Grid>
                            <Link href="https://github.com/KuntsevichAndrew" target="_blank">
                                <GitHubIcon className="github"/></Link></Grid>
                    </Grid>
                    <Copyright className="copyright" />
                </Container>
            </footer>
        );
    }
}

export default Footer = withTranslation('lang')(Footer);