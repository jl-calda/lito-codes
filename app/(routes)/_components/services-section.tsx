import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const feature_1 = [
  "Customizable templates tailored to the profession (e.g., portfolio for artists, resume for consultants)",
  "Contact forms and appointment scheduling for client inquiries and bookings.",
  "Integration with social media platforms to showcase expertise and expand reach.",
  "Blogging platform for sharing insights, updates, and industry knowledge.",
  "Client testimonial section to build credibility and trust.",
  "Analytics dashboard to track website traffic and engagement.",
  "Mobile responsiveness for seamless viewing across devices.",
  "SEO optimization to improve search engine visibility.",
  "SSL security certificate for data encryption and protection.",
];

export const ServicesSection = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2">
        <AspectRatio>
          <Image
            src="/projects/lito-kopi/thumbnail.webp"
            fill
            alt="Lito Kopi Website Thumbnail"
            className="object-center object-cover"
          />
        </AspectRatio>
        <div>
          <p>Website for a Professional</p>
          {feature_1.map((feature, index) => (
            <li key={crypto.randomUUID()}>{feature}</li>
          ))}
        </div>
      </div>
    </section>
  );
};
