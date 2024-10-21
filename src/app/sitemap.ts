import { MetadataRoute } from "next"
export default function sitemap(): MetadataRoute.Sitemap {
    return [{
        url: "https://voicefirstai.com",
        lastModified: new Date().toISOString().split('T')[0],
        priority: 1
    }]
}
