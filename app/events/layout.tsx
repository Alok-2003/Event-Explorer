import { ReactNode } from 'react';

export default function EventsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen  ">
      {children}
    </div>
  );
}
