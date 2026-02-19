# ⚡ Hack Days in Hosur — Registration Website

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)
![Google Sheets](https://img.shields.io/badge/Google_Sheets-34A853?style=for-the-badge&logo=googlesheets&logoColor=white)

A modern, dark-futuristic hackathon landing and registration website designed for **Hack Days in Hosur 2026**. Built with high-performance animations, extreme contrast for readability, and a direct integration with Google Sheets for student data management.

## 🚀 Key Features

- **Dark Futuristic UI**: Sleek `#060606` grey/black theme with custom glassmorphism components.
- **Glitch Text Effects**: High-impact animated titles in the Hero section.
- **Interactive Background**: Dynamic `ColorBends` background that responds to interaction.
- **Google Sheets Integration**: Fully functional registration backend using Google Apps Script.
- **Multi-step Stepper Form**: Clean, non-overwhelming registration process for attendees.
- **Bento-style Landing**: Modular sections including Schedule, FAQ, Venue (with dark-themed maps), and Event Details.
- **Prominent Branding**: Optimized MLH and Google Gemini logo loops with high visibility.

## 📦 Tech Stack

- **Frontend**: [React](https://reactjs.org/) + [Vitev4](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Backend Bridge**: Google Apps Script (Web App)
- **Database**: Google Sheets

## 🛠️ Getting Started

### Prerequisites
- Node.js (Version 18+ recommended)
- Google account (for Sheets integration)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```

## 📊 Google Sheets Integration

The website is connected to a Google Sheet via a Web App bridge. 

### Spreadsheet Setup
Create a Google Sheet with the following headers in the first row:
`Timestamp`, `Name`, `Email`, `Phone`, `Institution`, `Experience`, `Participation`, `Referral`

### Apps Script
The project uses a standard `doPost(e)` function to handle JSON payloads and append rows to your active sheet.

## 🎨 Design System

- **Primary Background**: `#060606`
- **Secondary Background**: `#0a0a0a` / `#0d0d0d`
- **Text Primary**: `#f0f0f0` (High Contrast White)
- **Text Muted**: `#888888`
- **Accents**: Pure white and soft grey gradients.

---
Built for the community by **team Flexiroasters**.

