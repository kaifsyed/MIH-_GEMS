/**
 * Service JSON-LD (Schema.org).
 *
 * Describes a genuine service offering using only information that is visible
 * on the page. No service locations, coverage areas or operating hours are
 * fabricated — those are omitted unless the caller explicitly passes real data.
 */
export function ServiceJsonLd({
  name,
  description,
  url,
  serviceType,
  areaServed,
  provider,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string;
  provider: { "@id": string };
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType,
    provider,
  };

  if (areaServed) {
    data.areaServed = areaServed;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}