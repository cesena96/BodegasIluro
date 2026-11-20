import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

export default function BottleCard({ wine }) {
    const { t, i18n } = useTranslation('pricing');

    const price = new Intl.NumberFormat(i18n.language, {
        style: 'currency',
        currency: 'EUR',
    }).format(wine.price);

    return (
        <Box sx={{ bgcolor: 'custom.tile', height: '100%', display: 'flex', flexDirection: 'column' }}>
            {wine.image ? (
                <Box
                    component="img"
                    src={wine.image}
                    alt={wine.name}
                    sx={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block' }}
                />
            ) : (
                <Box sx={{ width: '100%', aspectRatio: '4 / 5', bgcolor: 'action.hover' }} />
            )}
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
                    {wine.name}
                </Typography>
                <Typography variant="caption" sx={{ letterSpacing: '0.08em', textTransform: 'uppercase', mb: 1 }}>
                    {wine.region} · {t('vintage', { year: wine.year })}
                </Typography>
                <Typography variant="body2" sx={{ flexGrow: 1 }}>
                    {t(`wine.${wine.id}.description`)}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 700, mt: 2 }}>
                    {price}
                </Typography>
            </Box>
        </Box>
    );
}