import Image from 'next/image';
import { format } from 'date-fns';
import { KeyboardEvent } from 'react';

interface EventCardProps {
  event: {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
    image: string;
  };
  onClick: (id: string) => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(event.id);
    }
  };

  return (
    <article
      className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
    >
      <div
        role="button"
        tabIndex={0}
        onClick={() => onClick(event.id)}
        onKeyDown={handleKeyDown}
        aria-label={`View details of ${event.title}`}
        className="cursor-pointer h-full w-full"
      >
        <div className="relative lg:h-[20rem] w-full">
          <Image
            width={300}
            height={300}
            src={event.image}
            alt={event.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <div className="text-sm text-gray-600 flex justify-between items-center dark:text-gray-300 mb-1 ">
            <div className="flex items-center ">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <time dateTime={event.date}>{format(new Date(event.date), 'MMMM d, yyyy')}</time>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <address className="not-italic">{event.location}</address>
            </div>
          </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{event.title}</h3>

          <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{event.description}</p>
        </div>
      </div>
    </article>
  );
}
