"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ESTATE_TOTAL } from "@/data/properties";

const stats = [
  {
    value: `${ESTATE_TOTAL.squareMetresLabel} m²`,
    label: "Estate",
  },
  {
    value: `${ESTATE_TOTAL.acresLabel} acres`,
    label: "Land",
  },
  {
    value: "4",
    label: "Private properties",
  },
  {
    value: "1",
    label: "Historic finca",
  },
];

export function EstateStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) setShow(true);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-x-6 gap-y-12 border-t border-[var(--color-warm-stone)]/60 pt-12 lg:grid-cols-4 lg:gap-8"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center lg:text-left"
        >
          <p className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw,3rem)] leading-none tracking-tight text-[var(--color-charcoal)]">
            {stat.value}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[var(--color-deep-olive)]">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
