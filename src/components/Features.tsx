import { featuresOne } from "@/constants/data";
import { Icon, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image"; // Import NextImage
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: Icon;
  className: string;
  href: string;
  image: StaticImageData | null; // Use StaticImageData type for image
}

interface FeaturesProps {
  features?: Feature[];
  title?: string; // Added title prop
  description?: string; // Added description prop
}

export default function Features({
  features: customFeatures,
  title,
  description,
}: FeaturesProps) {
  const displayFeatures = customFeatures || featuresOne;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold flex flex-col items-center gap-2 text-center mb-16">
          {title || "Why Choose Intent?"} {/* Use title prop or default text */}
          <span className="text-sm font-semibold text-gray-400">
            {description || "Turbocharge your coding All tools on deck."}{" "}
            {/* Use description prop or default text */}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayFeatures.map((feature, index) => (
            <div
              key={index}
              className={cn(
                feature.className,
                `relative group overflow-hidden bg-acccent/20 backdrop-blur-sm rounded-3xl p-8 hover:bg-accent/10 transition-all duration-300 border border-white/10`
              )}
            >
              <Link href={feature.href} className="absolute inset-0 z-10" />
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
              {/* {feature.image && ( // Check if image is not null
                <div className=" w-10 h-10">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    className="absolute -bottom-20 -right-4 object-cover"
                    // Maintain aspect ratio
                  />
                </div>
              )} */}
              <div className="md:bottom-[-29rem] left-[50%] group-hover:opacity-100 opacity-0 z-[-1] absolute bg-gradient-to-t from-primary to-green-900/90  blur-[8em] rounded-xl transition-all translate-x-[-50%] duration-700 ease-out w-[10rem] md:w-[30rem] h-[20rem] md:h-[30rem] rotate-[54deg]"></div>
              <Link
                href={feature.href}
                className="text-primary flex items-center mt-2 text-sm gap-2 bg-transparent"
              >
                Read More{" "}
                <span className="">
                  <IconArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
