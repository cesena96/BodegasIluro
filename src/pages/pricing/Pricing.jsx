import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import PageTitle from '../../components/shared/PageTitle';
import CatalogGrid from '../../components/pricing/CatalogGrid';
import { WINES } from '../../services/wines';

export default function Pricing() {
    const { t } = useTranslation('pricing');

    return (
        <Box sx={{ py: { xs: 2, md: 4 } }}>
            <PageTitle title={t('title')} intro={t('intro')} />
            <CatalogGrid wines={WINES} />
        </Box>
    );
}