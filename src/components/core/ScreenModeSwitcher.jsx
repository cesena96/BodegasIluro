import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DEFAULT_THEME, ThemeContext } from "../../services/theme";

export default function ScreenModeSwitcher() {
    const { t } = useTranslation('core');
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isLight = theme === DEFAULT_THEME;

    return (
        <IconButton onClick={toggleTheme} color="inherit" aria-label={t('a11y.theme')}>
            {isLight ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
}