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
    <div className={cn("ui-table-shell", className)}>
      <table className="ui-table text-left text-sm">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead>
          <tr className="ui-table-head-row">
            {columns.map((column) => (
              <th key={String(column.key)} className={cn("ui-table-head-cell px-4 py-3", column.className)}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${index}-${row[columns[0].key]}`} className="ui-table-row">
              {columns.map((column) => (
                <td key={String(column.key)} className={cn("ui-table-cell px-4", column.className)}>
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
