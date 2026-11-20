import { useTranslation } from 'react-i18next';
import { Typography } from "@mui/material";

export default function History() {
    const {t} = useTranslation('history')

    return (
        <>
            <Typography 
                variant="h1"
            >
                {t('title')}
            </Typography>
        </>
        
    )
}