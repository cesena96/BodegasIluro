import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import FeaturedMosaic from '../../components/home/FeaturedMosaic';

export default function Home() {
    const { t } = useTranslation('home');

    return (
        <>
            <Typography
                variant="h1"
                sx={{ fontSize: { xs: '2.25rem', sm: '3.5rem', md: '5rem', lg: '6.5rem' }, py: { xs: 2, md: 4 } }}
            >
                {t('hero.title')}
            </Typography>

            <FeaturedMosaic />
        </>
    );
}