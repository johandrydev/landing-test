import { Container, Grid, useMediaQuery } from "@mui/material"
import Images from '../assets/img/ImagesAssets.png';
import { useTheme } from '@mui/material/styles';

const MiddleSection = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));
  
  return (
    <section className="middle-section">
      <Container>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={16} md={8}>
            <div style={{
              maxWidth: 400
            }}>
              <img src={Images} alt="Images" width='100%' />
            </div>
          </Grid>
          <Grid item xs={16} md={8}>
            <p className={`text-white call-to-action ${md ? 'text-right' : 'text-center'}`}>Trabajamos para <br />
              <strong>Convertir ideas</strong> en<br /> productos
            </p>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
export default MiddleSection;

