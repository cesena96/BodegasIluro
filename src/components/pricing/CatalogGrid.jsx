import { Grid } from '@mui/material';
import BottleCard from '../shared/BottleCard';

export default function CatalogGrid({ wines }) {
    return (
        <Grid container spacing={1.5}>
            {wines.map((wine) => (
                <Grid key={wine.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <BottleCard wine={wine} />
                </Grid>
            ))}
        </Grid>
    );
}