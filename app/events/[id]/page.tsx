import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { getEventById } from '@/data/events';
import BackButton from './BackButton';
import { events } from '@/data/events';
import Image from 'next/image';

// Export generateStaticParams function directly in this file
export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}

// Define the correct type for Next.js 15.3.4 params
type EventDetailProps = {
  params: Promise<{ id: string }>
};

export default async function EventDetail({ params }: EventDetailProps) {
  // Await the params Promise to get the id
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const event = getEventById(id);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen p-4 sm:p-6 md:p-10 max-w-7xl mx-auto">
      <article className="bg-white flex flex-col lg:flex-row dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden" aria-labelledby="event-title">
        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-3">
            <div className="w-full sm:w-auto">
              <h1 id="event-title" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs px-2 py-1 rounded">
                  {event.category}
                </span>
              </div>
            </div>
            <div className="sm:text-right w-full sm:w-auto">
              <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                {format(new Date(event.date), 'MMMM d, yyyy')}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {event.location}
              </div>
            </div>
          </div>

          <section aria-label="Event description" className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300">
              {event.fullDescription}
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <BackButton />
          </div>
        </div>

        <div className="relative order-first lg:order-last">
          <Image
            src={event.image}
            alt={`Image for ${event.title} event`}
            width={900}
            height={600}
            className="object-cover w-full h-64 lg:h-full lg:max-h-[600px]"
            priority
           />
        </div>
      </article>
    </main>
  );
}




