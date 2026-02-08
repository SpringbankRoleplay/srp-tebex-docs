import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href?: string;
};

export function Card({ title, description, href }: CardProps) {
  const Component = href ? Link : "div";

  return (
    <Component
      href={href as any}
      className="group block rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
    >
      <h3 className="mb-1 text-base font-semibold group-hover:underline">
        {title}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </Component>
  );
}

export function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}