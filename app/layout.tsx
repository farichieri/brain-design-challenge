import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/footer';
import { Toaster } from 'sonner';
import CustomThemeProvider from '@/providers/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'RCC Brain Design Challenge',
  description:
    'Backend API for frontend developers to build creative AI chat interfaces',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomThemeProvider>
          <div className="min-h-screen flex flex-col">
            {children}
            <Footer />
          </div>
          <Toaster position="top-right" />
        </CustomThemeProvider>
      </body>
    </html>
  );
}
