import { SITE_URL } from "@/lib/site";

/**
 * Page-level WebPage JSON-LD (Schema.org).
 *
 * Each route renders its own WebPage entity with the correct @id, name,
 * description and isPartOf reference. The Organization and WebSite entities
 * (rendered globally in the root layout) are referenced by @id from every
 * page-specific schema, so the entity graph stays consistent without any
 * duplicate Organization declarations.
 *
 * Breadcrumb is passed in by the caller — this component stays generic and
 * does not assume the page's navigation hierarchy.
 */
export function PageJsonLd({
  id,
  name,
  description,
  url,
  breadcrumb,
  about,
  mainEntity,
}: {
  id: string;
  name: string;
  description: string;
  url: string;
  breadcrumb?: {
    "@type": "BreadcrumbList";
    "@id": string;
    itemListElement: Array<{
      "@type": "ListItem";
      position: number;
      name: string;
      item: string;
    }>;
  };
  about?: string;
  mainEntity?: { "@id": string };
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": id,
    name,
    description,
    url,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  if (breadcrumb) {
    data.breadcrumb = breadcrumb;
  }

  if (mainEntity) {
    data.mainEntity = mainEntity;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}