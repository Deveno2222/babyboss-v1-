import type React from "react";
import { Search } from "../../icons";
import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  value: string;
  onChange: (s: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Поиск по номеру, имени...",
  className,
}: SearchInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Search className={styles.icon} />
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}
