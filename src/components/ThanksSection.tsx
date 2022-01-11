import { Button, Typography } from '@mui/material';
import instagramIcon from '../assets/img/intagram-icon.png'

const ThanksSection = () => {
  
  const handleGotoWaco = () => {
    window.open(
      `https://wacoservices.com/`,
      '_blank'
    );
  };

  return (
    <div className="thanks-section">
      <Typography variant="h4" gutterBottom component="div">
        Gracias por <strong>completar el ejercicio</strong>
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        Te invitamos a ver mas información
      </Typography>
      <div className='instagram-info'>
        <a href='https://www.instagram.com/waconomads/' target='_blank'><img src={instagramIcon} alt="Instagram" /></a>
        <Button variant="contained" className='to-know' onClick={handleGotoWaco}>
          Conocer más
        </Button>
      </div>
    </div>
  );
};
export default ThanksSection
