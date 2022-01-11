import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import MiddleSection from './components/MiddleSection';
import Navbar from './components/Navbar';
import ThanksSection from './components/ThanksSection';
import WelcomeSection from './components/WelcomeSection';
import { UserProvider } from './context/userContext';

const App = () => {
  return (
    <UserProvider>
      <Navbar />
      <WelcomeSection />
      <MiddleSection />
      <BenefitsSection />
      <ThanksSection />
      <Footer />
    </UserProvider>
  )
}

export default App
