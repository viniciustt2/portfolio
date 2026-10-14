import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Vinícius — Projetos',
    description: 'Um espaço para conhecer os projetos de software de Vinícius.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}