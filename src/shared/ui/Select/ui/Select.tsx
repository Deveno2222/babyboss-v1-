import { useEffect, useRef, useState } from "react";
import type {
  IOption,
  ISelectOptionDriver,
  SelectProps,
} from "../models/types";
import styles from "./Select.module.scss";
import { Frame, Search } from "../../icons";

function SelectOptionDriver({ option, onClick }: ISelectOptionDriver) {
  return (
    <div className={styles.option} onClick={() => onClick(option)}>
      <div className={styles.head}>
        <img src="/images/client.jpg" alt="Водитель" className={styles.image} />
        <span className={styles.driver_title}>{option.label}</span>
      </div>
      <div className={styles.child_list}>
        {Array.from([1, 2, 3, 4]).map((i) => (
          <div key={i} className={styles.child}>
            <img
              src="/images/client.jpg"
              alt="Клиент"
              className={styles.image}
            />
            <span className={styles.client_title}>Ануар А. А.</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SelectOptionRate({ option, onClick }: ISelectOptionDriver) {
  return (
    <div className={styles.option} onClick={() => onClick(option)}>
      {option.label}
    </div>
  );
}

export function Select({
  options,
  label,
  onChange,
  placeholder,
  value,
  type = "driver",
  error,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState<string>("");
  const searchRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: IOption) => {
    onChange?.(option.value);
    setIsOpen(false);
  };

  const selectedOption = options.find((opt) => opt.value === value);
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.select_wrapper} ref={wrapperRef}>
      {label && (
        <label className={styles.label}>
          {label} {error && <span className={styles.required}>*</span>}
        </label>
      )}

      <div
        className={`${styles.select} ${error ? styles.select_error : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={`${selectedOption ? "" : styles.placeholder}`}>
          {selectedOption?.label || placeholder || "Выберите ..."}
        </span>
        <Frame
          className={`${styles.icon_frame} ${isOpen ? styles.icon_open : ""}`}
        />
      </div>

      {isOpen && (
        <div className={styles.options}>
          {type === "driver" && (
            <>
              <div
                className={styles.input_wrapper}
                onClick={() => searchRef.current?.focus()}
              >
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Поиск по имени, номеру"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={styles.search_input}
                />
                <Search
                  size={24}
                  color="#000000"
                  className={styles.search_icon}
                />
              </div>
              {filteredOptions.map((i) => (
                <SelectOptionDriver
                  key={i.value}
                  option={i}
                  onClick={handleSelect}
                />
              ))}
            </>
          )}

          {type === "rate" &&
            options.map((i) => (
              <SelectOptionRate
                key={i.value}
                option={i}
                onClick={handleSelect}
              />
            ))}
        </div>
      )}
    </div>
  );
}
