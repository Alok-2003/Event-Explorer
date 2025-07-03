import { Metadata } from 'next';
import { getEventById } from '@/data/events';

interface EventMetadataProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(
  { params }: EventMetadataProps
): Promise<Metadata> {
  const event = getEventById(params.id);
  
  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }

  return {
    title: `${event.title} | Event Details`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      type: 'article',
      publishedTime: event.date,
      images: [
        {
          url: event.image,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
  };
}
