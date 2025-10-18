import { useNavigate } from "react-router-dom";
import styles from "./AddButton.module.scss";
import { Plus } from "../../icons";

interface AddButtonProps {
  label: string;
  href: string;
  className?: string;
}

export function AddButton({ label, href, className }: AddButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
  };

  return (
    <button
      className={`${className || ""} ${styles.btn}`}
      onClick={handleClick}
    >
      <Plus className={styles.icon} />
      {label}
    </button>
  );
}
