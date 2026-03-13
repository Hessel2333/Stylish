import { cn } from "@/lib/utils/cn";

type TableColumn<T> = {
  key: keyof T;
  label: string;
  className?: string;
};

type DataTableProps<T extends Record<string, string>> = {
  columns: ReadonlyArray<TableColumn<T>>;
  rows: ReadonlyArray<T>;
  caption?: string;
  className?: string;
};

export const DataTable = <T extends Record<string, string>>({ columns, rows, caption, className }: DataTableProps<T>) => {
  return (
    <div className={cn("overflow-hidden rounded-[var(--card-radius)] border border-[var(--border-default)] bg-[var(--surface)]", className)}>
      <table className="w-full border-collapse text-left text-sm">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead>
          <tr className="bg-[var(--surface-muted)] text-token-secondary">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={cn("px-4 py-3 font-[var(--table-header-weight)]", column.className)}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={`${index}-${row[columns[0].key]}`}
              className="border-t border-[var(--border-subtle)]"
              style={{
                background: index % 2 === 0 ? "transparent" : `color-mix(in hsl, var(--surface-muted) calc(var(--table-stripe-opacity) * 100%), white)`
              }}
            >
              {columns.map((column) => (
                <td key={String(column.key)} className={cn("px-4", column.className)} style={{ height: "var(--table-row-height)" }}>
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
