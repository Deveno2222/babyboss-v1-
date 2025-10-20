import { File } from "../../../../shared/ui/icons";
import styles from "./Payment.module.scss";

export function Payment() {
  return (
    <div className={styles.payment}>
      <div className={styles.content}>
        <div className={styles.amount}>+ 60 000 ₸</div>

        <div className={styles.info_block}>
          <p className={styles.name}>Нуртаев Ануар</p>
          <div className={styles.info}>
            {/* rate */}
            <div className={styles.info_item}>
              <div className={styles.label}>Тариф</div>
              <div className={styles.info_text}>
                Групповой
                <br />
                Только туда{" "}
              </div>
            </div>
            {/* type payment */}
            <div className={styles.info_item}>
              <div className={styles.label}>Тип оплаты</div>
              <div className={styles.info_text}>Рассрочка</div>
            </div>
            {/* driver */}
            <div className={styles.info_item}>
              <div className={styles.label}>Водитель</div>
              <div className={styles.info_text}>Ерасыл А.А</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.line}></div>
        <div className={styles.footer_content}>
          <div className={styles.date}>
            <span className={styles.date_hard}>Дата</span>: 12.01.2025, 13:32
          </div>

          <div className={styles.bill}>
            <File className={styles.bill_icon} />
            <span className={styles.bill_label}>Чек_оплаты.pdf</span>
          </div>
        </div>
      </div>
    </div>
  );
}
