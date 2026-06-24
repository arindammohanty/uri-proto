// ─── STAT CARD COMPONENT ───

import type { Stat } from "@/types";

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <article className="border-border rounded-card flex min-h-[140px] flex-col items-center justify-center border bg-background p-6 text-center md:min-h-[160px] md:p-8">
      <p className="text-brand-blue text-3xl font-bold md:text-4xl lg:text-5xl">
        {stat.value}
      </p>
      <p className="text-text-dark mt-2 text-sm font-semibold md:text-base">
        {stat.label}
      </p>
    </article>
  );
}

// ─── END STAT CARD ───
