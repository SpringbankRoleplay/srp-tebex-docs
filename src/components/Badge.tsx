import clsx from "clsx";

export function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "new" | "beta" | "deprecated";
}) {
  const styles = {
    default: "bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200",
    new: "bg-green-500/15 text-green-700 dark:text-green-300",
    beta: "bg-yellow-500/15 text-yellow-700 dark:text-yellow-300",
    deprecated: "bg-red-500/15 text-red-700 dark:text-red-300",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        styles[variant]
      )}
    >
      {children}
    </span>
  );
}
