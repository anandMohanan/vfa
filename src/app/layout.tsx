import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { CSPostHogProvider } from "./posthog-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "VoiceFirst AI: Leading the Voice-Driven Workflow Revolution | Simplify Operations with Intelligent Voice AI Agents",
        template: "%s | VoiceFirst AI",
    },
    description: "Transform your business with VoiceFirst AI's advanced voice-driven agents. Enhance customer engagement, streamline hiring processes, and optimize operations with our intelligent AI solutions. Discover how VoiceFirst AI can revolutionize your workflow and boost efficiency.",
    metadataBase: new URL("https://voicefirstai.com"),
    twitter: {
        card: "summary_large_image",
    },
    openGraph: {

        title: "VoiceFirst AI",
        description: "VoiceFirst AI is pioneering voice-driven experiences.",
        images: ["https://utfs.io/f/d59eb4b2-7f6f-48b2-9aa3-8bfbc0583e12-mdohhu.png"],
    },
    applicationName: 'VoiceFirst AI',
    referrer: 'origin-when-cross-origin',
    keywords: ['VoiceFirst Ai', 'Ai', 'Voice', 'Voice Ai', 'Ai Agent', 'Ai Assistant', 'Workflow Automation'],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="google-site-verification" content="b-3N7Dreasf0Mag5FQiD9Gwd7YUdWRYdu36pGjajm-c" />
            </head>
            <CSPostHogProvider>
                <body className={inter.className}>
                    <Navbar />
                    {children}
                    <Toaster />
                    <FooterSection />
                </body>
            </CSPostHogProvider>
        </html>
    );
}
