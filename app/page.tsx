'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import EventCard from './components/EventCard';
import { events } from '@/data/events';
import { Event } from '@/types/event';

export default function Home() {
  const [locationFilter, setLocationFilter] = useState<string>('');
  const router = useRouter();

  const filteredEvents = locationFilter
    ? events.filter((event: Event) =>
      event.location.toLowerCase().includes(locationFilter.toLowerCase())
    )
    : events;

  const handleEventClick = (id: string) => {
    router.push(`/events/${id}`);
  };

  return (
    <main className="min-h-screen p-6 md:p-0">
      <header className="mb-4 lg:my-6">
        <div className="lg:flex justify-between items-center">
          <h1 className="text-3xl mb-2 lg:mb-0 font-bold">Upcoming Events</h1>
          <div className="relative max-w-md" role="search" aria-label="Search events by location">
            <input
              type="text"
              placeholder="Search by location..."
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full lg:w-64 p-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Search events by location"
              id="location-search"
            />
            <svg
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {locationFilter && (
              <button
                onClick={() => setLocationFilter('')}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                aria-label="Clear location search"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {locationFilter && (
          <div className="text-sm text-gray-500 dark:text-gray-400" aria-live="polite">
            Showing events in: <span className="font-medium">{locationFilter || 'All locations'}</span>
          </div>
        )}
      </header>
      <section aria-label="Events list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onClick={handleEventClick} 
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400 py-10">No events found matching your search criteria.</p>
        )}
      </section>
    </main>
  );
}
