import { Outlet } from "react-router-dom";
import styles from "./ClientsLayout.module.scss";
import { BreadCrumb } from "../../../shared/ui/BreadCrumb/ui/BreadCrumb";

export function ClientsLayout() {
  return (
    <div className={styles.container}>
      <BreadCrumb />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
