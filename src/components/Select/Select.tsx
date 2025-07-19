import { useState } from "react";

type SelectProps<T> = {
  options: T[];
  onChange: (selected: T) => void;
  title?: string;
  disabled?: boolean;
  selected?: T;
};
export function Select<T extends string>({
  options,
  onChange,
  title,
  disabled,
  selected: initialSelected,
}: SelectProps<T>) {
  const [selected, setSelected] = useState<T | undefined>(initialSelected);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value as T);
    onChange(e.target.value as T);
  };

  return (
    <div>
      {title && <label className="block mb-1 font-medium">{title}</label>}
      <select
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selected ?? initialSelected ?? ""}
        onChange={handleChange}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option} value={option} className="text-gray-700">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
