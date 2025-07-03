import type { Event } from '../types/event';

export const events: Event[] = [
  {
    id: '3',
    title: 'Build on APTOS',
    date: '2023-07-05',
    location: 'Kolkata',
    description: 'Join us for a day of workshops and networking as we explore the latest in APTOS development.',
    fullDescription: 'Learn how to build on APTOS, a decentralized platform for building scalable and secure applications.',
    image: '/images/build-on-aptos.png',
    category: 'Technology'
  },
  {
    id: '4',
    title: 'Spark to Startup',
    date: '2023-07-05',
    location: 'New Delhi',
    description: 'Watch promising startups pitch to investors and learn from industry experts.',
    fullDescription: 'A full-day event featuring startup pitches, panel discussions, and networking opportunities.',
    image: '/images/startup-pitch.png',
    category: 'Business'
  },
  {
    id: '5',
    title: 'ML Ops',
    date: '2023-07-5',
    location: 'OPStree Solution, Noida',
    description: 'Hands-on workshop on MLOps.',
    fullDescription: 'Learn how to build and deploy machine learning models in production. Hands-on exercises and expert guidance provided.',
    image: '/images/mlops.jpg',
    category: 'Technology'
  },
  {
    id: '6',
    title: 'Gaming Connect',
    date: '2023-07-06',
    location: 'Boomer,New Delhi',
    description: 'A day of gaming and networking with fellow gamers and industry experts.',
    fullDescription: 'Join us for a day of gaming, panel discussions, and networking opportunities.',
    image: '/images/avalance.png',
    category: 'Gaming'
  },
  {
    id: '1',
    title: 'Quiz-a-thon',
    date: '2023-07-04',
    location: 'New Delhi',
    description: 'Annual technology conference featuring the latest in web development and AI.',
    fullDescription: 'Join us for the biggest tech conference of the year! Learn from industry experts, network with peers, and discover the latest trends in technology.',
    image: '/images/quiz-a-thon.jpg',
    category: 'Technology'
  },
  {
    id: '2',
    title: 'SnapAR',
    date: '2023-07-20',
    location: 'New Delhi',
    description: 'Three days of live music, art installations, and workshops.',
    fullDescription: 'Experience the best of live music with performances from top artists across various genres. Food trucks, art installations, and workshops will be available throughout the festival grounds.',
    image: '/images/snap-ar.png',
    category: 'Music'
  },
];

export const getEventById = (id: string): Event | undefined => {
  return events.find((event: Event) => event.id === id);
};

export const getAllLocations = (): string[] => {
  return Array.from(new Set(events.map(event => event.location)));
}
