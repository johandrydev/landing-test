import { Container, Typography } from "@mui/material"

const WelcomeSection = () => {
  return (
    <section className="section-welcome">
      <Container>
        <div className="text-white">
          <Typography variant="h3" gutterBottom component="div">
            Bienvenido a tu
          </Typography>
          <Typography variant="h3" gutterBottom component="div">
            <strong>Entrevista Técnica</strong> en
          </Typography>
          <Typography variant="h3" gutterBottom component="div">
            WACO
          </Typography>
        </div>
      </Container>
    </section>
  );
};
export default WelcomeSection;

