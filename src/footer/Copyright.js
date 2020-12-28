import React, {Component} from 'react';
import { Typography, Link } from "@material-ui/core";
import {withTranslation} from "react-i18next";

class Copyright extends Component {
    render() {
        const {t} = this.props;
        return (
            <Typography className="copyright">
                {'Copyright © '}
                <Link color="inherit" href="https://github.com/KuntsevichAndrew" target="_blank" >
                    {t('footer.copyright')}
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }
}

export default Copyright = withTranslation('lang')(Copyright);