import type { LocationFilterId } from "@/data/locations";
import { locationCategories } from "@/data/locations";

type LocationFiltersProps = {
  activeFilter: LocationFilterId;
  onFilterChange: (filter: LocationFilterId) => void;
};

export function LocationFilters({
  activeFilter,
  onFilterChange,
}: LocationFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {locationCategories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onFilterChange(category.id)}
          className={`px-3.5 py-2 text-[10px] uppercase tracking-[0.16em] transition-colors sm:px-4 sm:text-[11px] ${
            activeFilter === category.id
              ? "bg-[var(--color-charcoal)] text-[var(--color-white)]"
              : "border border-[var(--color-warm-stone)] text-[var(--color-deep-olive)] hover:border-[var(--color-charcoal)]/40"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
