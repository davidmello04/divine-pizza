"use client";

import "../styles/globals.scss";
import { AuthContext, AuthProvider } from "@/contexts/AuthContext";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}
