import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid } from '@mui/material';
import { rutasConNombre } from '../../services/router';
import { DEFAULT_THEME, ThemeContext } from '../../services/theme';
import selloClaro from '../../iluro-logos/sellos/sello-c.svg';
import selloOscuro from '../../iluro-logos/sellos/sello-a-negativo.svg';
import vinedo from '../../assets/home/vinedo.jpg';
import bodega from '../../assets/home/bodega-barricas.jpg';
import Tile from '../shared/Tile';

const tileSx = { minHeight: { xs: 130, md: 190 } };

export default function FeaturedMosaic() {
  const { t } = useTranslation('home');
  const { theme } = useContext(ThemeContext);
  const sello = theme === DEFAULT_THEME ? selloClaro : selloOscuro;

  return (
    <Grid container spacing={1.5}>
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
        <Tile
          variant="photo"
          image={vinedo}
          imageAlt={t('photo.vineyard')}
          sx={{ minHeight: { xs: 220, md: 190 } }}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grid container spacing={1.5}>
          <Grid size={6}>
            <Tile variant="offer" label={t('tile.offer.label')} title={t('tile.offer.title')} sx={tileSx} />
          </Grid>
          <Grid size={6}>
            <Tile variant="photo" title="Vino destacado 1" sx={tileSx} />
          </Grid>
          <Grid size={6}>
            <Tile variant="photo" title="Vino destacado 2" sx={tileSx} />
          </Grid>
          <Grid size={6}>
            <Tile
              variant="history"
              label={t('tile.history.label')}
              title={`${t('tile.history.title')} →`}
              to={rutasConNombre.HISTORY}
              sx={tileSx}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Tile variant="photo" image={bodega} imageAlt={t('photo.cellar')} sx={tileSx} />
      </Grid>
      <Grid size={{ xs: 6, md: 3 }}>
        <Tile
          variant="gold"
          label={t('tile.pricing.label')}
          title={`${t('tile.pricing.title')} →`}
          to={rutasConNombre.PRICING}
          sx={tileSx}
        />
      </Grid>
      <Grid size={{ xs: 6, md: 3 }}>
        <Tile variant="seal" sx={tileSx}>
          <Box
            component="img"
            src={sello}
            alt="Bodegas Iluro"
            sx={{ width: '100%', maxWidth: 150, display: 'block' }}
          />
        </Tile>
      </Grid>
    </Grid>
  );
}