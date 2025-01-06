import Image from "next/image";
import { StaticImageData } from "next/image";

interface IntentLogoProps {
  src: StaticImageData;
  className?: string;
}

export default function IntentLogo({
  src,
  className = "w-8 h-8",
}: IntentLogoProps) {
  return (
    <Image
      src={src}
      width={24}
      height={16}
      className={className}
      alt="Intent Logo"
    />
  );
}
