export function Steps({ children }: { children: React.ReactNode }) {
  return (
    <ol className="my-6 space-y-4 border-l border-zinc-300 pl-6 dark:border-zinc-700">
      {children}
    </ol>
  );
}

export function Step({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <h4 className="font-medium">{title}</h4>
      <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        {children}
      </div>
    </li>
  );
}
