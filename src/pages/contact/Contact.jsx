import { useTranslation } from 'react-i18next';
import { Box, Grid, Stack, Typography } from '@mui/material';
import ContactForm from '../../components/contact/ContactForm';
import MapEmbed from '../../components/contact/MapEmbed';

export default function Contact() {
    const { t } = useTranslation('contact');

    const info = [
        { key: 'address', value: t('footer.address', { ns: 'core' }) },
        { key: 'hours', value: t('info.hours.value') },
        { key: 'email', value: t('info.email.value') },
    ];

    return (
        <Box sx={{ py: { xs: 2, md: 4 } }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3.5rem' }, mb: 2 }}>
                {t('title')}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '65ch', mb: 4 }}>
                {t('intro')}
            </Typography>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Box sx={{ bgcolor: 'custom.tile', p: 3, height: '100%' }}>
                        <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, mb: 3 }}>
                            {t('info.title')}
                        </Typography>
                        <Stack spacing={2}>
                            {info.map((item) => (
                                <Box key={item.key}>
                                    <Typography
                                        variant="caption"
                                        sx={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}
                                    >
                                        {t(`info.${item.key}.label`)}
                                    </Typography>
                                    <Typography variant="body1">{item.value}</Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 7 }}>
                    <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, mb: 3 }}>
                        {t('form.title')}
                    </Typography>
                    <ContactForm />
                </Grid>
            </Grid>

            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, mt: 6, mb: 3 }}>
                {t('map.title')}
            </Typography>
            <MapEmbed />
        </Box>
    );
}