import { ServiceCardProps } from "@/interface/service";
import Image from "next/image";

export const ServiceCard: React.FC<ServiceCardProps> = ({
  img,
  title,
  description,
  isActive,
}) => {
  return (
    <article
      className={`rounded-2xl p-6 sm:p-8 flex flex-col gap-5 transition-transform duration-300 hover:scale-105`}
      style={{
        boxShadow: isActive
          ? "0 2px 16px 0 rgba(0,0,0,0.07)"
          : "0 2px 16px 0 rgba(0,0,0,0.05)",
        border: isActive ? "none" : `1px solid var(--primary-light)`,
        backgroundColor: isActive
          ? "var(--background)"
          : "rgba(248, 190, 205, 0.1)",
        minHeight: "280px",
      }}
    >
      <figure className="w-20 h-20 flex items-center justify-center mx-auto">
        <Image
          src={img}
          alt={title}
          width={60}
          height={60}
          className="object-contain"
        />
      </figure>

      <h3
        className="font-bold text-xl sm:text-xl leading-snug text-center"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h3>

      <p
        className="text-sm sm:text-base leading-relaxed flex-1 text-center"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>

      <div className="flex justify-center mt-2">
        <button
          className="text-sm sm:text-base font-medium rounded-full px-5 py-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
          style={{
            border: `1px solid var(--primary)`,
            color: "var(--primary)",
            backgroundColor: "var(--background)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--primary)";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--background)";
            e.currentTarget.style.color = "var(--primary)";
          }}
        >
          Read More
        </button>
      </div>
    </article>
  );
};
