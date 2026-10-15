import './index.css';
import CardNav from './components/ui/CardNav';
import Home from './pages/Home';
import { EVENT_CONFIG } from './config/eventConfig';

const navItems = [
  {
    label: 'About',
    bgColor: '#0a0a0a',
    textColor: '#888',
    links: [
      { label: 'Event Info', href: '#about', ariaLabel: 'About the event' },
      { label: 'Highlights', href: '#highlights', ariaLabel: 'Hackathon highlights' },
      { label: 'Details', href: '#details', ariaLabel: 'Event details' },
    ],
  },
  {
    label: 'Program',
    bgColor: '#0a0a0a',
    textColor: '#888',
    links: [
      { label: 'Schedule', href: '#schedule', ariaLabel: 'Event schedule' },
      { label: 'Food & Meals', href: '#food', ariaLabel: 'Food arrangements' },
      { label: 'Prizes & Swag', href: '#prizes', ariaLabel: 'Prizes and goodies' },
      { label: 'Venue', href: '#venue', ariaLabel: 'Venue information' },
    ],
  },
  {
    label: 'Community',
    bgColor: '#0a0a0a',
    textColor: '#888',
    links: [
      { label: 'WhatsApp Community', href: EVENT_CONFIG.whatsappUrl, ariaLabel: 'Join WhatsApp Community' },
      { label: 'Register', href: '#register', ariaLabel: 'Event Registration' },
      { label: 'FAQ', href: '#faq', ariaLabel: 'Frequently asked questions' },
    ],
  },
];

function App() {
  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#060606]">
      <CardNav
        items={navItems}
        onRegisterClick={scrollToRegister}
        menuColor="#666"
        buttonBgColor="#111"
        buttonTextColor="#aaa"
      />
      <Home />
    </div>
  );
}

export default App;
