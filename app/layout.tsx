import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kodologic for Trader",
    description: "Algorithmic trading insights, scripts, indicators, and strategies.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main className="min-h-screen bg-dark text-white">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
