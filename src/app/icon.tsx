import { AudioLines, AudioWaveform } from 'lucide-react'
import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: "white"
                }}
            >
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.06667 3.40003C5.06667 4.79915 3.93245 5.93337 2.53333 5.93337C1.13421 5.93337 0 4.79915 0 3.40003C0 2.00091 1.13421 0.866699 2.53333 0.866699C3.93245 0.866699 5.06667 2.00091 5.06667 3.40003Z" fill="white" />
                    <path d="M7.60011 12.2667C7.60011 13.6659 6.4659 14.8001 5.06678 14.8001C3.66766 14.8001 2.53345 13.6659 2.53345 12.2667C2.53345 10.8676 3.66766 9.7334 5.06678 9.7334C6.4659 9.7334 7.60011 10.8676 7.60011 12.2667Z" fill="white" />
                    <circle cx="11.4" cy="21.1334" r="2.53333" fill="white" />
                    <circle cx="20.2667" cy="3.40003" r="2.53333" fill="white" />
                    <circle cx="17.7333" cy="12.2667" r="2.53333" fill="white" />
                </svg>
            </div>),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported icons size metadata
            // config to also set the ImageResponse's width and height.
            ...size,
        }
    )
}
