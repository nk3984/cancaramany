"use client";

import Image from "next/image";

type BrandLogoProps = {
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  variant = "dark",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const src =
    variant === "light"
      ? "/images/can-caramany/brand/logo-lockup.png"
      : "/images/can-caramany/brand/logo-lockup-dark.png";

  return (
    <Image
      src={src}
      alt="Can Caramany Mallorca"
      width={649}
      height={681}
      priority={priority}
      className={`h-full w-auto max-w-none !h-full !w-auto ${className}`}
    />
  );
}
