import clsx from "clsx";

type CalloutProps = {
  type?: "info" | "success" | "warning" | "error";
  title?: string;
  children: React.ReactNode;
};

const styles = {
  info: "border-blue-500/40 bg-blue-500/10 text-blue-900 dark:text-blue-200",
  success:
    "border-green-500/40 bg-green-500/10 text-green-900 dark:text-green-200",
  warning:
    "border-yellow-500/40 bg-yellow-500/10 text-yellow-900 dark:text-yellow-200",
  error: "border-red-500/40 bg-red-500/10 text-red-900 dark:text-red-200",
};

export function Callout({
  type = "info",
  title,
  children,
}: CalloutProps) {
  return (
    <div
      className={clsx(
        "my-6 rounded-lg border-l-4 p-4",
        styles[type]
      )}
    >
      {title && (
        <div className="mb-1 font-semibold">{title}</div>
      )}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
