import { Route } from "../Route/Route";
import styles from "./RouteList.module.scss";

export function RouteList() {
  return (
    <div className={styles.route_list}>
      {Array.from([1, 2]).map((i) => (
        <Route key={i} />
      ))}
    </div>
  );
}
