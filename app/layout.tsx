import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1787937741909',
  description: 'A promotional banner component that sticks to the top of the page, featuring a special offer for new clients with a neon green call-to-action button and dismiss functionality.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900" style={{ backgroundColor: '#0A0A0A' }}>
        {children}
      </body>
    </html>
  );
}
