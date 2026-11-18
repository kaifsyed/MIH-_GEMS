import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import EnquiryForm from "@/components/enquiry/enquiry-form";
import { WHOLESALE_FORM } from "@/components/enquiry/enquiry-fields";
import { DiamondIcon, ShieldIcon, SparkleIcon } from "@/components/ui/icons";
import { ServiceJsonLd } from "@/components/seo/service-jsonld";
import { PageJsonLd } from "@/components/seo/page-jsonld";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wholesale Enquiries",
  description:
    "Partner with MIH GEMS for wholesale gemstones and silver jewellery. Tell us about your business and we'll get back to you with the details.",
};

const BENEFITS = [
  {
    icon: DiamondIcon,
    title: "Direct sourcing",
    body: "Natural rough and cut stones, hand-selected and supplied without unnecessary intermediaries.",
  },
  {
    icon: ShieldIcon,
    title: "Verified quality",
    body: "Consistent grading and independent certification available for your gemstone orders.",
  },
  {
    icon: SparkleIcon,
    title: "Dedicated support",
    body: "A single point of contact for pricing, custom manufacturing and repeat orders.",
  },
];

export default function WholesalePage() {
  return (
    <div className="container-luxe section-gap">
      <PageJsonLd
        id={`${SITE_URL}/#webpage-wholesale`}
        name="Wholesale Enquiries"
        description="Partner with MIH GEMS for wholesale gemstones and silver jewellery. Tell us about your business and we'll get back to you with the details."
        url={`${SITE_URL}/wholesale`}
        breadcrumb={{
          "@type": "BreadcrumbList",
          "@id": `${SITE_URL}/#breadcrumb-wholesale`,
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
              name: "Wholesale",
              item: `${SITE_URL}/wholesale`,
            },
          ],
        }}
      />
      <ServiceJsonLd
        name="Wholesale Gemstone & Jewellery Supply"
        description="MIH GEMS supplies natural gemstones and sterling silver jewellery to jewellers, designers and retailers. Direct sourcing, verified quality and dedicated support for wholesale partners."
        url={`${SITE_URL}/wholesale`}
        serviceType="Wholesale Gemstone & Jewellery Supply"
        provider={{ "@id": `${SITE_URL}/#organization` }}
      />
      <SectionHeading
        as="h1"
        eyebrow="For businesses"
        title="Wholesale partnerships"
        description="We supply natural gemstones and sterling silver jewellery to jewellers, designers and retailers. Share a few details about your business and we'll be in touch to discuss how we can work together."
      />

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <aside className="flex flex-col gap-6 lg:col-span-5">
          <div className="card-luxe p-8">
            <h2 className="font-serif text-2xl text-ivory">Partner benefits</h2>
            <div className="divider-gold mt-4" />
            <ul className="mt-6 flex flex-col gap-6">
              {BENEFITS.map((benefit) => (
                <li key={benefit.title} className="flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-gold/30 text-gold">
                    <benefit.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-ivory">{benefit.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {benefit.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm leading-relaxed text-muted">
            Prefer to talk it through? Use the WhatsApp option on the form and
            we&rsquo;ll respond personally.
          </p>
        </aside>

        <div className="lg:col-span-7">
          <EnquiryForm config={WHOLESALE_FORM} />
        </div>
      </div>
    </div>
  );
}
