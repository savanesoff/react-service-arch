import { useCallback, useState } from "react";

export type SelectOption<T = unknown> = {
  value: T;
  label: string;
  selected?: boolean;
};

type SelectProps<T extends SelectOption> = {
  options: T[];
  onChange: (selected: T) => void;
  title?: string;
  disabled?: boolean;
};

export function Select<T extends SelectOption>({
  options,
  onChange,
  title,
  disabled,
}: SelectProps<T>) {
  // Use index as key for mapping, or you can use a unique id if available
  const initialIndex = options.findIndex((option) => option.selected) || 0;
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const idx = Number(e.target.value);
      setSelectedIndex(idx);
      onChange(options[idx]);
    },
    [onChange, options]
  );

  return (
    <div>
      {title && <label className="block mb-1 font-medium">{title}</label>}
      <select
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedIndex}
        disabled={disabled}
        onChange={handleChange}
      >
        {options.map((option, idx) => (
          <option key={idx} value={idx} className="text-gray-700">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
