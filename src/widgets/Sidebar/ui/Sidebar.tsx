import { NavLink } from "react-router-dom";
import { navItems } from "../model/navItems";
import styles from "./Sidebar.module.scss";
import logo from "/logo.png";
import { Logout } from "../../../shared/ui/icons/logout";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.logo_container}>
            <img src={logo} alt="Логотип Babyboss" className={styles.logo} width={148} height={151}/>
          </div>

          <nav className={styles.nav}>
            {navItems.map(({ id, label, path, icon: Icon }) => (
              <NavLink
                key={id}
                to={path}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {Icon && <Icon size={24} className={styles.icon} />}
                <span className={styles.label}>{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className={styles.logout}>
          <Logout className={styles.logout_icon} />
          <span className={styles.logout_label}>Выйти</span>
        </div>
      </div>
    </aside>
  );
}
