import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "VoiceFirst AI",
    description: "VoiceFirst AI is pioneering voice-driven experiences.",
    metadataBase: new URL("https://voicefirstai.com"),
    twitter: {
        card: "summary_large_image",
    },
    openGraph: {

        title: "VoiceFirst AI",
        description: "VoiceFirst AI is pioneering voice-driven experiences.",
        images: "/opengraph-image.png",
    },
    applicationName: 'VoiceFirst AI',
    referrer: 'origin-when-cross-origin',
    keywords: ['VoiceFirst Ai', 'Ai', 'Voice'],
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
            <body className={inter.className}>
                <Navbar />
                {children}
                <Toaster />
                <FooterSection />
            </body>
        </html>
    );
}
