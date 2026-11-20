import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

const MAP_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.4382902109846!2d0.8810152!3d42.06813715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a65d313b0e9c13%3A0xcb859fda64d616f2!2s25631%20Cellers%2C%20L%C3%A9rida!5e1!3m2!1ses!2ses!4v1795192707330!5m2!1ses!2ses';
export default function MapEmbed() {
    const { t } = useTranslation('contact');

    return (
        <Box
            component="iframe"
            src={MAP_SRC}
            title={t('map.iframeTitle')}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            sx={{ border: 0, width: '100%', height: { xs: 300, md: 450 }, display: 'block' }}
        />
    );
}