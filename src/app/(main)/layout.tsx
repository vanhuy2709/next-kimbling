import AppHeader from "@/components/header/app.header";
import AppFooter from "@/components/footer/app.footer";
import type { Metadata } from 'next';
import Script from "next/script";

export const metadata: Metadata = {
  title: 'Kim Bling',
  description: 'This is my blog - KimBling',
}

const idJsonObject = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "KimBling",
  "image": {
    "@type": "ImageObject",
    "url": "https://salt.tikicdn.com/cache/w500/ts/upload/c0/8b/46/c3f0dc850dd93bfa7af7ada0cbd75dc0.png",
    "width": 1080,
    "height": 1080
  },
  "telephone": "19006035",
  "url": "https://kimtuyen.blog/",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "10.79664498748942",
    "longitude": "106.65856519879867"
  }
}

export default function RootLayout(
  { children, }: { children: React.ReactNode; }
) {

  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(idJsonObject) }}
      />
    </>
  );
}
