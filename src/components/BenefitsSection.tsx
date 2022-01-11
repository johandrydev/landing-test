import React from 'react';
import { Container, Typography } from '@mui/material';
import BenefitComponent from './BenefitComponent';

import clockIcon from '../assets/img/clockIcon.svg';
import homeOfficeIcon from '../assets/img/homeOffice.svg';
import capacitacionesWorkshopsIcon from '../assets/img/capacitacionesWorkshops.svg';
import foodIcon from '../assets/img/foodIcon.svg';

const benefits = [
  {
    icon: clockIcon,
    text: 'Flexibilidad Horaria'
  },
  {
    icon: homeOfficeIcon,
    text: 'HomeOffice'
  },
  {
    icon: capacitacionesWorkshopsIcon,
    text: 'Capacitaciones y workshops'
  },
  {
    icon: foodIcon,
    text: 'Snacks, frutas y bebidas gratis'
  }
];

const BenefitsSection = () => {
  return (
    <section className="benefits-section" id='benefits-section'>
      <Container>
        <div className="text-white text-center">
          <Typography variant="h4" gutterBottom component="div">
            Entre los <strong className="benefits-word">beneficios</strong> que
          </Typography>
          <Typography variant="h4" gutterBottom component="div">
            <strong>Ofrecemos</strong> se encuentran
          </Typography>
        </div>
        <div className='benefits-carrousel'>
          {
            benefits.map(({ icon, text }, index) => (
              <React.Fragment key={index}>
                <BenefitComponent
                  icon={icon}
                  text={text}
                />
              </React.Fragment>
            ))
          }
        </div>
      </Container>
    </section>
  );
};
export default BenefitsSection;

