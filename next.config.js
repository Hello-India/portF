/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'sahildrive.fakefacebook602gmailcom.workers.dev',
      'play-lh.googleusercontent.com',
      'sinay.ai',
      'www.raxatechnosecuritysolutions.in',
      'spp.co',
      'www.fidelity.com',
      'images.unsplash.com',
      'res.cloudinary.com',
      'media.geeksforgeeks.org'
    ],
  },
}

module.exports = nextConfig