import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events App | Find and Explore Local Events',
  description: 'Discover and explore exciting events happening in your area. Filter by location and find the perfect event for you.',
  openGraph: {
    title: 'Events App | Find and Explore Local Events',
    description: 'Discover and explore exciting events happening in your area.',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Events App',
      },
    ],
  },
};
