export interface IOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: IOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  type?: "driver" | "rate" | "client" | "payment";
  error?: string;
}

export interface ISelectOptionDriver {
  option: IOption;
  onClick: (i: IOption) => void;
}
