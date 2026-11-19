import { Typography } from "@mui/material";
import { withTranslation } from "react-i18next"

function Banner ({t, i18n }) {
    return (
        <>
            <Typography variant="h4" component="h3">
                {t('banner.title', { name: "Esteve" })}
            </Typography>
            <p>{t('banner.subtitle')}</p>
            <ul>
                {
                    t('banner.list', { returnObjects: true }).map((item, index) =>
                        <li key={index}>
                            {item.name}: {item.price}
                        </li>
                    )
                }
            </ul>
            <div>
                Primer elemento de la lista:
                { t('banner.list', { returnObjects: true })[0].name + " " + t('banner.list', { returnObjects: true })[0].price}
            </div>
        </>
    )
}

export default withTranslation('home')(Banner);