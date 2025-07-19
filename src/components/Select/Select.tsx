import { useState } from "react";

type SelectProps<T> = {
  options: T[];
  onChange: (selected: T) => void;
  title?: string;
  disabled?: boolean;
};
export function Select<T extends string>({
  options,
  onChange,
  title,
  disabled,
}: SelectProps<T>) {
  const [selected, setSelected] = useState<T | undefined>(options[0]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value as T);
    onChange(e.target.value as T);
  };

  return (
    <div>
      {title && <label className="block mb-1 font-medium">{title}</label>}
      <select
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selected ?? ""}
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
