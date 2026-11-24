// src/pages/NotFound.jsx
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { rutasConNombre } from "../services/router";

export default function NotFound() {
    const { t } = useTranslation('core');

    return (
        <>
            <h1>{t('notfound.title')}</h1>
            <nav>
                <NavLink to={rutasConNombre.HOME}>{t('nav.home')}</NavLink>
            </nav>
        </>
    );
}