import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Binary Quest | Fullstack Developer',
  description: 'Binary Quest\'s personal portfolio showcasing skills and projects as a fullstack developer.',
  authors: [{ name: 'Binary Quest' }],
  keywords: [
    'Binary Quest',
    'Fullstack Developer',
    'Full-Stack Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Developer Portfolio',
    'Software Engineer',
    'Programming',
    'Binary Quest Portfolio'
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Binary Quest | Fullstack Developer',
    description: 'Explore Binary Quest\'s portfolio and fullstack development projects.',
    url: 'https://binary-quest.vercel.app',
    siteName: 'Binary Quest Portfolio',
    images: [
      {
        url: 'https://binary-quest.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Binary Quest Portfolio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@binaryquest',
    title: 'Binary Quest | Fullstack Developer',
    description: 'Check out Binary Quest\'s fullstack projects and experience.',
    images: ['https://binary-quest.vercel.app/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-YOUR-ID');
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-YOUR-ID"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}