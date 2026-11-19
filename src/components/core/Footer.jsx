import { useTranslation } from 'react-i18next';
import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  const { t } = useTranslation('core');

  return (
    <Box
      component="footer"
      sx={{ borderTop: '3px solid', borderColor: 'text.primary', mt: 4 }}
    >
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Typography variant="body2" align="center">
          {t('brand')} · {t('footer.address')}
        </Typography>
      </Container>
    </Box>
  );
}