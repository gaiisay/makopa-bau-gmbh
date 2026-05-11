type StructuredDataValue = Record<string, unknown> | Array<Record<string, unknown>>;

type StructuredDataProps = {
  data: StructuredDataValue;
};

export function StructuredData({ data }: StructuredDataProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}