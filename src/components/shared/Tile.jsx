import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const colorsByVariant = (theme) => ({
  photo: { bgcolor: theme.palette.custom.tile, color: theme.palette.text.secondary },
  offer: { bgcolor: theme.palette.custom.offer, color: theme.palette.primary.contrastText },
  history: { bgcolor: theme.palette.custom.dark, color: theme.palette.custom.onDark },
  gold: { bgcolor: theme.palette.custom.gold, color: theme.palette.custom.onGold },
  seal: { bgcolor: 'transparent', color: theme.palette.text.primary },
});

export default function Tile({ variant = 'photo', label, title, to, image, imageAlt = '', children, sx }) {
  const linkProps = to ? { component: NavLink, to } : {};

  return (
    <Box
      {...linkProps}
      sx={(theme) => ({
        ...colorsByVariant(theme)[variant],
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: { xs: 130, md: 118 },
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: variant === 'seal' ? 'center' : 'flex-end',
        alignItems: variant === 'seal' ? 'center' : 'flex-start',
        textDecoration: 'none',
        overflow: 'hidden',
        ...(image && { color: '#ffffff' }),
        ...sx,
      })}
    >
      {image && (
        <>
          <Box
            component="img"
            src={image}
            alt={imageAlt}
            sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {(label || title) && (
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0) 60%)',
              }}
            />
          )}
        </>
      )}
      {label && (
        <Typography
          variant="caption"
          sx={{ position: 'relative', zIndex: 1, letterSpacing: '0.14em', textTransform: 'uppercase' }}
        >
          {label}
        </Typography>
      )}
      {title && (
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ position: 'relative', zIndex: 1, fontWeight: 700, lineHeight: 1.2 }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
}