# Binary Quest Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases the skills and projects of Binary Quest, a fullstack developer and cybersecurity enthusiast.

## 🚀 Features

- **Modern Design**: Clean, professional design with glass morphism effects
- **Responsive**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Elements**: Hover effects, flip cards, and interactive components
- **Audio Integration**: Background music and sound effects (optional)
- **Snowfall Effect**: Animated background snowfall for visual appeal
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Performance**: Optimized for fast loading and smooth performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
new-portfolio/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── WelcomeSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── StudiesSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SupportSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── SnowfallEffect.tsx
│   ├── assets/
│   │   ├── audio/
│   │   └── icons/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Sections

1. **Welcome Section**: Hero section with greeting and scroll button
2. **About Section**: Personal information with interactive image
3. **Projects Section**: Showcase of development projects with flip cards
4. **Studies Section**: Educational background and achievements
5. **Experience Section**: Professional experience and skills
6. **Support Section**: UPI payment integration for support
7. **Contact Section**: Social media links and contact information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd new-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update the following files with your information:

- `app/layout.tsx`: Update metadata, title, and description
- `app/components/Navigation.tsx`: Update logo and branding
- `app/components/WelcomeSection.tsx`: Update greeting message
- `app/components/AboutSection.tsx`: Update personal description and image
- `app/components/ProjectsSection.tsx`: Update project details
- `app/components/StudiesSection.tsx`: Update education information
- `app/components/ExperienceSection.tsx`: Update experience details
- `app/components/SupportSection.tsx`: Update UPI details
- `app/components/ContactSection.tsx`: Update social media links

### Styling

- Colors: Update `tailwind.config.js` for custom color scheme
- Fonts: Modify `app/globals.css` for different font families
- Animations: Customize Framer Motion animations in components

### Audio Files

Add your audio files to `app/assets/audio/`:
- `music.mp3`: Background music
- `click.mp3`: Click sound effects
- `type.mp3`: Typing sound effects
- `whoosh.mp3`: Transition sound effects

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- Minimal bundle size
- SEO optimized with proper meta tags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Built with Next.js and Tailwind CSS
- Icons from Lucide React
- Animations powered by Framer Motion

---

**Binary Quest** - Fullstack Developer & Cybersecurity Enthusiast