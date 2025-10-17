import { Container } from '@mantine/core';
import classes from './Header.module.scss';
import { NavLink } from "react-router";
import { getConfig } from '../../../utilites/config';

interface HeaderProps {
    rightContent?: React.ReactNode;
    fullWidth?: boolean;
}

export const Header = ({ rightContent, fullWidth = false }: HeaderProps) => {
    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner} fluid={fullWidth}>
                <NavLink className={classes.logo} to={'/manage/events'}>
                    <img src={getConfig("VITE_APP_LOGO_LIGHT", "/p-up-logo-4-white.svg")} style={{ width: 30, height: 70 }} alt={`${getConfig("VITE_APP_NAME", "StageIQ")} logo`} className={`${classes.logo} gd-boing`} />StageIQ
                </NavLink>

                <div className={classes.rightContent}>
                    {rightContent}
                </div>
            </Container>
        </header>
    );
}
