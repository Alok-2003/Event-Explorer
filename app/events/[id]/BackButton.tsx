'use client';

import { useRouter } from 'next/navigation';
import { KeyboardEvent } from 'react';

export default function BackButton() {
  const router = useRouter();

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      router.back();
    }
  };

  return (
    <button
      onClick={() => router.back()}
      onKeyDown={handleKeyDown}
      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      aria-label="Go back to events list"
    >
      <span aria-hidden="true">←</span> Back to Events
    </button>
  );
}
