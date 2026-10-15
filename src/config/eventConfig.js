/**
 * Centralized Event Configuration
 * Hacktoberfest in PMC 2026
 * 
 * Edit all event dates, links, copy, and partner details here.
 */

export const EVENT_CONFIG = {
  name: "Hacktoberfest in PMC",
  shortName: "Hacktoberfest",
  tagline: "Build. Collaborate. Innovate.",
  heroDescription:
    "Join fellow builders at PMC Tech, Hosur, for a day of creativity, collaboration, and hands-on problem-solving. Build innovative projects, explore modern technologies, connect with developers, and compete for exciting gifts and exclusive goodies.",
  
  // Date & Time (Asia/Kolkata timezone)
  date: "Friday, October 23, 2026",
  shortDate: "October 23, 2026",
  targetDateISO: "2026-10-23T09:00:00+05:30",
  scheduleTime: "To be announced",
  
  // Venue
  venueName: "PMC Tech",
  venueCity: "Hosur, Tamil Nadu",
  venueCountry: "India",
  venueFull: "PMC Tech, Hosur, Tamil Nadu, India",
  hall: "To be announced",
  format: "In-person student hackathon",
  
  // Theme & Scope
  theme: "Innovative technology solutions to real-world problems",
  audience: "College students, developers, designers, and technology enthusiasts",
  
  // Registration & Food
  registrationCost: "Free",
  foodContribution: "Separate participant contribution (Amount to be announced)",
  foodNotice: "Event registration is free. Food expenses are collected separately.",
  foodDescription:
    "Food arrangements will be made for participants. A separate contribution will be collected to cover food expenses. The contribution amount and payment instructions will be shared by the organizing team before the event. Refreshments will also be arranged, subject to the finalized arrangements.",
  
  // Registration URLs & state
  // Set to official MLH registration URL
  registrationUrl: "https://events.mlh.com/events/15445-hacktoberfest-in-pmc",
  isRegistrationOpen: true,
  
  // WhatsApp Community
  whatsappUrl: "https://chat.whatsapp.com/BXyaYKATJvM1614nMeNYc5?s=cl&p=a&mlu=4&ilr=4",
  
  // Organizer Information
  organizer: {
    name: "Flexiroasters / Hacktoberfest in PMC organizing team",
    website: "https://fuzziecoder.in/",
    email: "ramvj2005@gmail.com",
    github: "https://github.com/fuzziecoder",
    linkedin: "https://linkedin.com/in/fuzziecoder",
    twitter: "https://x.com/fuzziecoder",
    instagram: "https://instagram.com/fuzziecoder",
  },
  
  // Prizes & Goodies Notice
  prizes: {
    cashNoticeHeading: "NO CASH PRIZES",
    cashNoticeDescription: "Winners will receive exciting gifts and goodies instead of cash awards.",
    items: [
      {
        emoji: "🏆",
        title: "Top Performers",
        desc: "Outstanding participants and teams will receive exciting gifts and goodies in recognition of their performance.",
        highlight: true,
      },
      {
        emoji: "📜",
        title: "Official E-Certificates",
        desc: "Official verified e-certificates will be provided to all participants by Major League Hacking (MLH).",
        highlight: true,
      },
      {
        emoji: "👕",
        title: "Exclusive T-shirts",
        desc: "T-shirts will be provided to selected top performers, subject to availability and final allocation.",
      },
      {
        emoji: "☁️",
        title: "AWS Swag",
        desc: "AWS-themed swag for all, subject to confirmation and availability.",
      },
      {
        emoji: "⭐",
        title: "Special Recognition",
        desc: "Outstanding projects will receive recognition for creativity, implementation, and impact.",
      },
    ],
  },
  
  // About Section Feature Cards
  aboutFeatures: [
    {
      icon: "⚡",
      title: "Building Real Projects",
      desc: "Develop practical solutions to real-world challenges in a fast-paced, collaborative hackathon environment.",
    },
    {
      icon: "🤝",
      title: "Collaborating & Learning",
      desc: "Connect with fellow builders, share knowledge, and learn alongside passionate students and developers.",
    },
    {
      icon: "🚀",
      title: "Exploring Modern Technologies",
      desc: "Experiment with cutting-edge tools, cloud platforms, modern APIs, and developer frameworks.",
    },
    {
      icon: "🎯",
      title: "Showcasing Technical Skills",
      desc: "Present your work, demonstrate your creativity to peers and mentors, and earn recognition.",
    },
  ],
  
  // Highlights
  highlights: [
    { icon: "🛠️", title: "Hands-on Project Development", desc: "Build practical, working software solutions from scratch." },
    { icon: "📜", title: "MLH E-Certificates for All", desc: "Official verified e-certificates will be provided to all participants by Major League Hacking (MLH)." },
    { icon: "👥", title: "Team Collaboration", desc: "Partner with teammates, brainstorm ideas, and build together." },
    { icon: "💡", title: "Creative Problem-Solving", desc: "Tackle meaningful real-world problem statements with novel tech." },
    { icon: "🎤", title: "Project Demos & Judging", desc: "Showcase live demos and get valuable feedback from judges." },
    { icon: "🌟", title: "Recognition for Top Performers", desc: "Celebrate outstanding engineering, design, and execution." },
    { icon: "🎁", title: "Exciting Gifts & Goodies", desc: "Win rewards, gadgets, and special tech goodies (no cash prizes)." },
    { icon: "👕", title: "T-Shirts for Selected Performers", desc: "Exclusive event tees awarded to selected top performers." },
    { icon: "☁️", title: "Potential AWS Swag", desc: "AWS-themed swag packages, subject to final confirmation." },
  ],
  
  // Event Details Cards
  eventDetails: [
    { icon: "⚡", label: "Event", value: "Hacktoberfest in PMC" },
    { icon: "📅", label: "Date", value: "October 23, 2026" },
    { icon: "📍", label: "Venue", value: "PMC Tech, Hosur, Tamil Nadu" },
    { icon: "🏛️", label: "Hall", value: "To be announced" },
    { icon: "👥", label: "Team Size", value: "1–3 members per team" },
    { icon: "💻", label: "Format", value: "In-person" },
    { icon: "🎟️", label: "Registration", value: "Free" },
    { icon: "🍽️", label: "Food Contribution", value: "Amount to be announced" },
    { icon: "⏱️", label: "Schedule", value: "To be announced" },
    { icon: "🎓", label: "Audience", value: "College Students & Developers" },
  ],
  
  // Schedule Timeline
  schedule: {
    notice: "The event schedule will be announced soon. Join our WhatsApp community for updates.",
    activities: [
      { time: "TBA", event: "Check-in and Registration", desc: "Arrive at PMC Tech, check in, and receive your event credentials." },
      { time: "TBA", event: "Opening Ceremony", desc: "Welcome address, hackathon guidelines, and orientation." },
      { time: "TBA", event: "Hackathon Kickoff", desc: "Official start of the hacking phase." },
      { time: "TBA", event: "Problem Statement Announcement", desc: "Theme briefing, domains, and criteria revealed." },
      { time: "TBA", event: "Hacking Session", desc: "Intense project building, mentorship rounds, and progress check-ins." },
      { time: "TBA", event: "Lunch and Refreshments", desc: "Break to recharge and network with peers (separate food contribution)." },
      { time: "TBA", event: "Project Submission", desc: "Final code freeze, repository submission, and demo preparation." },
      { time: "TBA", event: "Project Demonstrations and Judging", desc: "Live project pitches and evaluation by judges." },
      { time: "TBA", event: "Awards and Closing Ceremony", desc: "Recognition of top performers, swag distribution, and wrap-up." },
    ],
  },
  
  // FAQs
  faqs: [
    {
      q: "What is Hacktoberfest in PMC?",
      a: "An in-person student hackathon where participants collaborate, develop technology-based solutions, and showcase their ideas.",
    },
    {
      q: "When is the event?",
      a: "Friday, October 23, 2026.",
    },
    {
      q: "Where will the event take place?",
      a: "PMC Tech, Hosur, Tamil Nadu. The exact hall details will be announced later.",
    },
    {
      q: "Is registration free?",
      a: "Yes. Registration is free. A separate contribution will be collected for food expenses.",
    },
    {
      q: "Will participants receive a certificate?",
      a: "Yes! Official e-certificates will be provided to all participants by Major League Hacking (MLH).",
    },
    {
      q: "How much is the food contribution?",
      a: "The amount will be announced by the organizing team before the event.",
    },
    {
      q: "Will food and refreshments be available?",
      a: "Food and refreshments are being planned. Final arrangements will be communicated by the organizers.",
    },
    {
      q: "Are there cash prizes?",
      a: "No. There are no cash prizes. Winners and top performers will receive exciting gifts and goodies.",
    },
    {
      q: "Will every participant receive a T-shirt?",
      a: "No. T-shirts are planned for selected top performers, subject to availability.",
    },
    {
      q: "Will AWS swag be provided?",
      a: "AWS-themed swag may be provided, subject to confirmation and availability.",
    },
    {
      q: "Should I bring my laptop?",
      a: "Participants should plan to bring their own laptop, charger, and development tools unless the organizers announce otherwise.",
    },
    {
      q: "Do I need a team?",
      a: "Teams can have 1–3 members per team. Solo participants are also welcome. Team formation rules and additional guidelines will be announced later.",
    },
    {
      q: "What will I build?",
      a: "The final problem statement and technical requirements will be announced by the organizers.",
    },
    {
      q: "How can I receive event updates?",
      a: "Join the official WhatsApp group: https://chat.whatsapp.com/BXyaYKATJvM1614nMeNYc5?s=cl&p=a&mlu=4&ilr=4",
    },
    {
      q: "Who can I contact?",
      a: "Email ramvj2005@gmail.com for event-related questions.",
    },
  ],
  
  // Partners & Community
  partners: [
    { name: "Hacktoberfest", shortName: "Hacktoberfest", type: "Global Open Source Initiative" },
    { name: "Major League Hacking (MLH)", shortName: "MLH", type: "Community Partner" },
    { name: "AWS", shortName: "AWS", type: "Cloud & Swag Partner (Subject to confirmation)" },
    { name: "Google Gemini", shortName: "Google Gemini", type: "AI Technology Partner" },
    { name: "DigitalOcean", shortName: "DigitalOcean", type: "Cloud Partner" },
    { name: "DEV", shortName: "DEV", type: "Developer Community Partner" },
  ],
  
  // Footer
  footerCopyright: "© 2026 Hacktoberfest in PMC. Built with care by the organizing team.",
};
