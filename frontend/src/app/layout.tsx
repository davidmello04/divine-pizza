'use client'

import "../app/styles/globals.scss";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <AuthProvider>
                <body>{children}</body>
            </AuthProvider>
        </html>
    );
}
