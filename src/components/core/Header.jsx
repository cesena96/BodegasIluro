import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navItems, rutasConNombre } from '../../services/router';
import { DEFAULT_THEME, ThemeContext } from '../../services/theme';
import marcaTemaClaro from '../../iluro-logos/marca/marca-iluro.svg';
import marcaTemaOscuro from '../../iluro-logos/marca/marca-iluro-negativo.svg';
import LangSwitcher from './LangSwitcher';
import ScreenModeSwitcher from './ScreenModeSwitcher';

export default function Header() {
  const { t } = useTranslation('core');
  const [anchorEl, setAnchorEl] = useState(null);
  const { theme } = useContext(ThemeContext);
  const marca = theme === DEFAULT_THEME ? marcaTemaClaro : marcaTemaOscuro;

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: '3px solid', borderColor: 'text.primary' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box
            component={NavLink}
            to={rutasConNombre.HOME}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Box
              component="img"
              src={marca}
              alt={t('brand')}
              sx={{ height: { xs: 16, sm: 20, md: 24 }, width: 'auto', display: 'block' }}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map(({ key, path }) => (
                <Button
                  key={key}
                  component={NavLink}
                  to={path}
                  end={path === '/'}
                  color="inherit"
                  sx={{
                    whiteSpace: 'nowrap',
                    '&:hover': { color: 'primary.main', backgroundColor: 'transparent' },
                    '&.active': {
                      textDecoration: 'underline',
                      textDecorationThickness: '3px',
                      textUnderlineOffset: '6px',
                      textDecorationColor: (theme) => theme.palette.primary.main,
                    },
                  }}
                >
                  {t(`nav.${key}`)}
                </Button>
              ))}
            </Box>

            <LangSwitcher />
            <ScreenModeSwitcher />

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton aria-label={t('a11y.menu')} color="inherit" onClick={(e) => setAnchorEl(e.currentTarget)}>
                <MenuIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                {navItems.map(({ key, path }) => (
                  <MenuItem key={key} component={NavLink} to={path} onClick={() => setAnchorEl(null)}>
                    {t(`nav.${key}`)}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}