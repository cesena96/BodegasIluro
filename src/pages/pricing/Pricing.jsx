import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import CatalogGrid from '../../components/pricing/CatalogGrid';
import { WINES } from '../../services/wines';

export default function Pricing() {
    const { t } = useTranslation('pricing');

    return (
        <Box sx={{ py: { xs: 2, md: 4 } }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3.5rem' }, mb: 2 }}>
                {t('title')}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '65ch', mb: 4 }}>
                {t('intro')}
            </Typography>
            <CatalogGrid wines={WINES} />
        </Box>
    );
}