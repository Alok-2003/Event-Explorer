import { events } from '@/data/events';

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}

// This is a workaround for TypeScript to recognize the function
export const dynamicParams = false;
