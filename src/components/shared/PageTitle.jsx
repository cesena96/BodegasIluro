import { Box, Typography } from '@mui/material';

export default function PageTitle({ title, intro }) {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3.5rem' }, mb: 2 }}>
                {title}
            </Typography>
            {intro && (
                <Typography variant="body1" sx={{ maxWidth: '65ch' }}>
                    {intro}
                </Typography>
            )}
        </Box>
    );
}