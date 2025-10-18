import { Sidebar } from "../../widgets/Sidebar";
import styles from "./AppLayout.module.scss";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
