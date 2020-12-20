import React, {Component} from 'react';
import {NavLink, BrowserRouter as Router, Route} from "react-router-dom"
import {withTranslation} from "react-i18next";
import {Select} from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import "../../assets/style/menu.css";
import About from "../../body/about/About";
import Experience from "../../body/experience/Experience";
import Skill from "../../body/skills/Skill";
import Project from "../../body/projects/Project";
import Contact from "../../body/contacts/Contact";


class Menu extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        // eslint-disable-next-line default-case
        switch (e.target.value) {
            case '1' :
                this.props.i18n.changeLanguage('en');
                break;
            case '2' :
                this.props.i18n.changeLanguage('ru');
                break;
        }

    }

    render() {
        const {t} = this.props;
        return (
            <div className="menu">
                <div className="lang">
                    <LanguageIcon className="lang-icon"/>
                    <Select native
                            labelId="Translation"
                            className="translation"
                            onChange={this.handleChange}>
                        <option value={1}>en</option>
                        <option value={2}>ru</option>
                    </Select>
                </div>

                <div className="nav">

                        <NavLink to="/about"
                                 activeClassName="active" className="draw">
                            {t('menu.about')}</NavLink>
                        <NavLink to="/experience"
                                 activeClassName="active" className="draw">
                            {t('menu.experience')}</NavLink>
                        <NavLink to="/skill"
                                 activeClassName="active">
                            {t('menu.skill')}</NavLink>
                        <NavLink to="/project"
                                 activeClassName="active">
                            {t('menu.project')}</NavLink>
                        <NavLink to="/contact"
                                 activeClassName="active">
                            {t('menu.contact')}</NavLink>
                </div>


                {/*<button onClick={() => i18n.changeLanguage('en')}>en</button>*/}
                {/*<button onClick={() => i18n.changeLanguage('ru')}>ru</button>*/}
            </div>
        );
    }
}

export default Menu = withTranslation('lang')(Menu);