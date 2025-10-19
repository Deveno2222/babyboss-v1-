import { Link, useLocation } from "react-router-dom";
import styles from "./BreadCrumb.module.scss";
import { BreadRight } from "../../icons/bread-right";

export function BreadCrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const nameMap: Record<string, string> = {
    clients: "Клиенты",
    edit: "Редактировать",
    details: "Подробнее",
  };

  return (
    <nav className={styles.breadcrumb}>
      {pathnames.map((segment, index) => {
        const pathTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const isId = /^\d+$/.test(segment);
        const label = isId ? "Подробнее" : nameMap[segment] || segment;

        return (
          <span key={pathTo} className={styles.item}>
            {!isLast ? (
              <>
                <Link to={pathTo} className={styles.link}>
                  {label}
                </Link>
                <BreadRight className={styles.icon} />
              </>
            ) : (
              <span className={styles.current}>{label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
