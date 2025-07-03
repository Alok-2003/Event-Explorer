import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Event Not Found
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        The event you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
      >
        Back to All Events
      </Link>
    </div>
  );
}
