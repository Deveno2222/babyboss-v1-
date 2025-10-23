import React from "react";
import styles from "./Input.module.scss";
import { Calendar } from "../../icons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  required?: boolean;
  label?: string;
  labelTop?: string;
  error?: string;
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      label,
      labelTop,
      error,
      className,
      type = "text",
      ...props
    },
    ref
  ) => {
    const showPlaceholder = type === "date" ? !props.value : true;

    return (
      <div className={`${styles.wrap} ${className}`}>
        {labelTop && (
          <label className={styles.label}>
            {labelTop} {error && <span className={styles.required}>*</span>}
          </label>
        )}
        <div className={styles.input_wrapper}>
          {label && <label className={styles.input_label}>{label}</label>}
          <input
            ref={ref}
            {...props}
            className={`${styles.input} ${error ? styles.input_error : ""}`}
            placeholder={showPlaceholder ? placeholder : ""}
            type={type}
          />
          {type === "date" && <Calendar className={styles.calendar_icon} />}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
