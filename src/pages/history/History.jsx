import { useTranslation } from 'react-i18next';
import { Box, Grid, Stack, Typography } from "@mui/material";
import Tile from '../../components/shared/Tile';
import manosVid from '../../assets/history/manos-vid.jpg';

const MILESTONES = [1, 2, 3, 4];
const VALUES = [1, 2, 3];

export default function History() {
    const { t } = useTranslation('history')

    return (
        <Box sx={{ py: { xs: 2, md: 4 } }}>
            <PageTitle title={t('title')} intro={t('intro')} />
            <Grid container spacing={1.5}>
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
                    <Tile
                        variant="photo"
                        image={manosVid}
                        imageAlt={t('milestones.photoAlt')}
                        sx={{ minHeight: { xs: 260, md: 360 } }}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2.25rem' }, mb: 3 }}>
                        {t('milestones.title')}
                    </Typography>
                    <Stack spacing={3}>
                        {MILESTONES.map((n) => (
                            <Box key={n} sx={{ borderLeft: 3, borderColor: 'primary.main', pl: 2 }}>
                                <Typography variant="h5" color="primary" sx={{ fontWeight: 700 }}>
                                    {t(`milestones.${n}.year`)}
                                </Typography>
                                <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 700 }}>
                                    {t(`milestones.${n}.title`)}
                                </Typography>
                                <Typography variant="body2">
                                    {t(`milestones.${n}.text`)}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Grid>
            </Grid>

            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2.25rem' }, mt: 8, mb: 3 }}>
                {t('values.title')}
            </Typography>
            <Grid container spacing={1.5}>
                {VALUES.map((n) => (
                    <Grid key={n} size={{ xs: 12, md: 4 }}>
                        <Box sx={{ bgcolor: 'custom.tile', p: 3, height: '100%' }}>
                            <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                                {t(`values.${n}.title`)}
                            </Typography>
                            <Typography variant="body2">
                                {t(`values.${n}.text`)}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}