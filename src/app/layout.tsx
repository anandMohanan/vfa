
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "VoiceFirst AI",
    description: "VoiceFirst AI is pioneering voice-driven experiences.",
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
                {children}
                <FooterSection />
            </body>
        </html>
    );
}
