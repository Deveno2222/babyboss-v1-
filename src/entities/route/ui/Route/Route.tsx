import { MapPin } from "../../../../shared/ui/icons";
import styles from "./Route.module.scss";

export function Route() {
  return (
    <div className={styles.route}>
      <div className={styles.paths}>
        <div className={styles.path}>
          <div className={styles.title}>
            <span className={styles.title_strong}>Маршрут 1</span> (08:00)
          </div>
          <div className={styles.address_list}>
            {/* 1 */}
            <div className={styles.address}>
              <span className={styles.label}>Откуда</span>
              <span className={styles.point}>ул. Абая, дом 15</span>
            </div>
            {/* 2 */}
            <div className={styles.address}>
              <span className={styles.label}>Куда</span>
              <span className={styles.point}>Школа-лицей №134</span>
            </div>
          </div>
        </div>

        <div className={styles.path}>
          <div className={styles.title}>
            <span className={styles.title_strong}>Маршрут 2</span> (15:30)
          </div>
          <div className={styles.address_list}>
            {/* 1 */}
            <div className={styles.address}>
              <span className={styles.label}>Откуда</span>
              <span className={styles.point}>Школа-лицей №134</span>
            </div>
            {/* 2 */}
            <div className={styles.address}>
              <span className={styles.label}>Куда</span>
              <span className={styles.point}>ул. Абая, дом 15</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.map}>
        <MapPin className={styles.map_icon} />
        <span className={styles.map_title}>Посмотреть на карте</span>
      </div>
    </div>
  );
}
