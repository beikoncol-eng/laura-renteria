/**
 * JsonLd — structured-data injector for the SEO layer.
 *
 * Renders a JSON-LD script tag. Pages/sections pass a schema.org object
 * (Person, Organization, Service, BreadcrumbList, …). Content is serialized
 * JSON, never user-authored HTML, so injection is safe.
 */
export interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- serialized JSON, not HTML
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
