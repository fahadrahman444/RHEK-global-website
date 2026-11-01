import Image from "next/image";

export function PartnerLogos() {
  const partners = [
    {
      name: "Meta Business Partner",
      src: "/images/meta-partner.webp",
      width: 180,
      height: 48,
    },
    {
      name: "Google Partner",
      src: "/images/google-partner.webp",
      width: 140,
      height: 48,
    },
    {
      name: "LinkedIn Marketing Partner",
      src: "/images/linkedin-partner.webp",
      width: 180,
      height: 48,
    },
    {
      name: "Shopify Partner",
      src: "/images/shopify-partner.webp",
      width: 150,
      height: 48,
    },
  ];

  return (
    <div className="mt-8 lg:mt-12 pt-8 border-t border-[#F3F3F3]">
      <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-10">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] hover:scale-105"
          >
            <Image
              src={partner.src}
              alt={partner.name}
              width={partner.width}
              height={partner.height}
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
