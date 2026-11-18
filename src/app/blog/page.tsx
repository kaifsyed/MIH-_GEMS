import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import BlogPageClient from "./blog-client";
import { PageJsonLd } from "@/components/seo/page-jsonld";

export const metadata: Metadata = {
  title: "Gemstone Stories & Buying Guides",
  description:
    "Explore MIH GEMS' journal — gemstone buying guides, care tips, styling inspiration and stories about natural coloured gemstones and fine jewellery.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "The MIH GEMS Journal — Gemstone Stories & Guides",
    description:
      "Gemstone buying guides, care tips, styling inspiration and stories from MIH GEMS.",
    type: "website",
    url: `${SITE_URL}/blog`,
    images: [{ url: "/logo-header.png", width: 1821, height: 864, alt: "MIH GEMS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The MIH GEMS Journal",
    description: "Gemstone buying guides, care tips, styling inspiration and stories.",
    images: ["/logo-header.png"],
  },
};

export default function BlogPage() {
  return (
    <>
      <PageJsonLd
        id={`${SITE_URL}/#webpage-blog`}
        name="Gemstone Stories & Buying Guides"
        description="Explore MIH GEMS' journal — gemstone buying guides, care tips, styling inspiration and stories about natural coloured gemstones and fine jewellery."
        url={`${SITE_URL}/blog`}
        breadcrumb={{
          "@type": "BreadcrumbList",
          "@id": `${SITE_URL}/#breadcrumb-blog`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${SITE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Journal",
              item: `${SITE_URL}/blog`,
            },
          ],
        }}
      />
      <BlogPageClient />
    </>
  );
}