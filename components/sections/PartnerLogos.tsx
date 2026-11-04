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
    <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#EBEBEB]">
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-between gap-4 sm:gap-10">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center justify-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-105"
          >
            <Image
              src={partner.src}
              alt={partner.name}
              width={partner.width}
              height={partner.height}
              className="h-7 sm:h-9 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
