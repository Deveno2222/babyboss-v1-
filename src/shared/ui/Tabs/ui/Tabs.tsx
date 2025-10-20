import type { ITab } from "../model/types";
import styles from "./Tabs.module.scss";

interface TabsProps {
  tabs: ITab[];
  value: ITab;
  onChange: (val: ITab) => void;
  className?: string;
}

export function Tabs({ tabs, value, onChange, className }: TabsProps) {
  const handleTab = (tab: ITab) => {
    onChange(tab);
  };

  return (
    <div className={`${styles.client_tabs} ${className}`}>
      {tabs.map((item) => (
        <span
          key={item.id}
          className={
            value.id === item.id
              ? `${styles.active_tab} ${styles.tab}`
              : `${styles.tab}`
          }
          onClick={() => handleTab(item)}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}
