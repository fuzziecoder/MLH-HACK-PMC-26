import './index.css';
import CardNav from './components/ui/CardNav';
import Home from './pages/Home';

const navItems = [
  {
    label: 'About',
    bgColor: '#0a0a0a',
    textColor: '#888',
    links: [
      { label: 'Event Info', href: '#about', ariaLabel: 'About the event' },
      { label: 'Details', href: '#details', ariaLabel: 'Event details' },
    ],
  },
  {
    label: 'Program',
    bgColor: '#0a0a0a',
    textColor: '#888',
    links: [
      { label: 'Schedule', href: '#schedule', ariaLabel: 'Event schedule' },
      { label: 'Prizes', href: '#prizes', ariaLabel: 'Prizes & recognition' },
      { label: 'Venue', href: '#venue', ariaLabel: 'Venue information' },
    ],
  },
  {
    label: 'Resources',
    bgColor: '#0a0a0a',
    textColor: '#888',
    links: [
      { label: 'Apply Now', href: 'https://events.mlh.io/events/13832-hack-days-in-hosur', ariaLabel: 'Register on MLH' },
      { label: 'Discord', href: 'https://discord.gg/y65P74z9M', ariaLabel: 'Join Discord server' },
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
