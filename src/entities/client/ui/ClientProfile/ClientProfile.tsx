import {
  getRateLabel,
  getStatusLabel,
} from "../../../../shared/lib/formatters/ClientFormatters";
import type { IClient } from "../../model/types";
import styles from "./ClientProfile.module.scss";

interface ClientProfileProps {
  data: IClient;
}

export function ClientProfile({ data }: ClientProfileProps) {
  const RATE = getRateLabel(data.rate);
  const STATUS = getStatusLabel(data.status);

  return (
    <div className={styles.profile}>
      <div className={styles.image_wrapper}>
        <img
          src={data.image}
          alt="Изображение профиля"
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.head}>
          {data.name}, {data.age} лет
        </div>

        <span className={styles.info_item}>
          Тариф:{" "}
          <span className={styles.info_item_content}>
            {RATE} | Туда и обратно
          </span>
        </span>
        <span className={styles.info_item}>
          Родитель:{" "}
          <span className={styles.info_item_content}>
            {data.parent}, {data.parent_number}
          </span>
        </span>
        <span className={styles.info_item}>
          Водитель:{" "}
          <span className={styles.info_item_content}>
            {data.driver} • Kia Rio, 222 NUR 02
          </span>
        </span>

        <div className={styles.status_item}>
          {STATUS} • Оплачено до 17.09.2025
        </div>
      </div>
    </div>
  );
}
