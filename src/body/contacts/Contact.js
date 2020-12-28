import React, {Component} from 'react';
import {Container, Grid, Typography, Button, List, ListItem, ListItemIcon, TextField, ListItemText} from "@material-ui/core";
import {withTranslation} from "react-i18next";

import "../../assets/style/contact.css";

import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Contact extends Component {
    render() {
        const {t} = this.props;
        return (
            <Container maxWidth="lg" className="contact-container">

                <Typography className="contact-title" variant="h4" component="h4">
                    {t("contact.title")}
                </Typography>
                <Grid container justify="center"
                      alignItems="center" direction="row" spacing={3}>
                    <Grid item md={6} lg={6} xs={12}>
                        <form noValidate autoComplete="off">
                            <TextField
                                className="contact-input contact-company"
                                id="standard-basic"
                                variant="outlined"
                                label={t("contact.company")} />

                            <TextField
                                className="contact-input contact-name"
                                id="standard-basic"
                                variant="outlined"
                                label={t("contact.name")} />

                            <TextField
                                className="contact-input contact-email"
                                id="outlined-full-width"
                                label={t("contact.email")}
                                fullWidth
                                variant="outlined" />

                            <TextField
                                className="contact-input contact-message"
                                id="outlined-multiline-static"
                                label={t("contact.message")}
                                multiline
                                fullWidth
                                rows={8}
                                variant="outlined" />

                            <Button variant="outlined" className="contact-button">
                                {t("contact.button")}
                            </Button>
                        </form>
                    </Grid>
                    {/*<Grid item md={4} lg={4} xs={12}>*/}
                    {/*    <List>*/}
                    {/*        <ListItem>*/}
                    {/*            <ListItemIcon>*/}
                    {/*                <EmailIcon/>*/}
                    {/*            </ListItemIcon>*/}
                    {/*            <ListItemText*/}
                    {/*                primary="Single-line item"*/}
                    {/*            />*/}
                    {/*        </ListItem>*/}
                    {/*        <ListItem>*/}
                    {/*            <ListItemIcon>*/}
                    {/*                <LinkedInIcon/>*/}
                    {/*            </ListItemIcon>*/}
                    {/*            <ListItemText*/}
                    {/*                primary="Single-line item"*/}
                    {/*            />*/}
                    {/*        </ListItem>*/}
                    {/*    </List>*/}
                    {/*</Grid>*/}
                </Grid>


            </Container>
        );
    }
}

export default Contact = withTranslation('lang')(Contact);