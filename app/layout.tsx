import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Vinícius | Projects',
    description: 'A home for Vinícius’s software projects and the ideas behind them.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}