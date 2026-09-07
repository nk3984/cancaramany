import Image from "next/image";

type ImagePlaceholderProps = {
  label: string;
  alt: string;
  className?: string;
  aspect?: string;
  src?: string | null;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
};

export function ImagePlaceholder({
  label,
  alt,
  className = "",
  aspect = "aspect-[16/10]",
  src,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 80vw",
  objectPosition = "center",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden bg-[var(--color-warm-stone)]/25 ${aspect} ${className}`.trim()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition }}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden bg-[var(--color-warm-stone)]/35 ${aspect} ${className}`.trim()}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(250,249,246,0.35),transparent_55%),linear-gradient(160deg,rgba(56,61,49,0.18),rgba(32,33,31,0.28))]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(32,33,31,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(32,33,31,0.35)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
        <p className="max-w-sm font-[family-name:var(--font-sans)] text-[11px] uppercase tracking-[0.22em] text-[var(--color-charcoal)]/70">
          {label}
        </p>
      </div>
    </div>
  );
}
