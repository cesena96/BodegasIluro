import { useTranslation } from "react-i18next";
import { MenuItem, Select } from "@mui/material";

export default function LangSwitcher() {
    const { t, i18n } = useTranslation('core');

    function handleChangeLanguage(event) {
        i18n.changeLanguage(event.target.value);
    };

    function returnLangDetected() {
        return i18n.resolvedLanguage ?? i18n.language?.split('-')[0] ?? 'es'
    }

    return (
        <Select
            id="language-switcher"
            value={returnLangDetected()}
            onChange={handleChangeLanguage}
            size="small"
            renderValue={(value) => value.toUpperCase()}
            inputProps={{ 'aria-label': t('a11y.language') }}
        >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Español</MenuItem>
        </Select>
    )
}