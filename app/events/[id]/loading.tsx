export default function EventDetailLoading() {
  return (
    <div className="min-h-screen p-6 md:p-10 max-w-4xl mx-auto animate-pulse">
      <div className="bg-gray-200 dark:bg-gray-700 h-64 md:h-96 w-full rounded-lg mb-6"></div>
      
      <div className="space-y-4">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
        
        <div className="space-y-2 pt-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
        </div>
        
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32 mt-8"></div>
      </div>
    </div>
  );
}
