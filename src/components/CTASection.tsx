import { ctaSection } from "@/constants/data";
import Link from "next/link";
import { Button } from "./ui/button";

export function CTASection() {
  return (
    <div className="w-full mx-auto py-16 px-4 max-w-5xl">
      <div className="bg-gradient-to-b relative  overflow-hidden   from-accent/40 rounded-lg p-8 text-center">
        <div className="md:bottom-[-18rem] left-[30%] opacity-100 z-[-1] absolute bg-gradient-to-t from-primary to-green-900/90  blur-[4em] rounded-xl transition-all translate-x-[-50%] duration-700 ease-out w-[10rem] md:w-[10rem] h-[10rem] md:h-[30rem] rotate-90"></div>
        <h2 className="text-3xl font-bold mb-6">{ctaSection.title}</h2>
        <Button>
          <Link href={ctaSection.buttonHref}>{ctaSection.buttonText}</Link>
        </Button>
      </div>
    </div>
  );
}
