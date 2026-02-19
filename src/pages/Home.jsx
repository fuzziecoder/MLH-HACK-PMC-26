import Hero from '../components/Hero';
import About from '../components/About';
import EventDetails from '../components/EventDetails';
import Schedule from '../components/Schedule';
import RegistrationForm from '../components/RegistrationForm';
import Venue from '../components/Venue';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
    const scrollToRegister = () => {
        document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main>
            <Hero onRegisterClick={scrollToRegister} />
            <About />
            <EventDetails />
            <Schedule />
            <RegistrationForm />
            <Venue />
            <FAQ />
            <Footer />
        </main>
    );
}
