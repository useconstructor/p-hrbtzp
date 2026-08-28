import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1787937741909',
  description: 'Adding a work gallery section to showcase 6 recent haircuts in a grid layout with hover effects revealing style details, maintaining the black and neon green barbershop aesthetic.',
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
