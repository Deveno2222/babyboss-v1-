import { Link } from "react-router-dom";
import { ArrowRight } from "../../../../shared/ui/icons";
import type { IClient } from "../../model/types";
import styles from "./Client.module.scss";
import {
  getRateLabel,
  getStatusLabel,
} from "../../../../shared/lib/formatters/ClientFormatters";

interface ClientProps {
  data: IClient;
}

export function Client({ data }: ClientProps) {
  const RATE = getRateLabel(data.rate);
  const STATUS = getStatusLabel(data.status);

  return (
    <div className={styles.client}>
      {/* Тело */}
      <div className={styles.body}>
        <div className={styles.main_info}>
          <img
            src={data.image}
            alt="Изображение профиля"
            className={styles.image}
          />
          <span className={styles.name}>
            {data.name}, <span className={styles.age}>{data.age} лет</span>
          </span>
        </div>
        <div className={styles.secondary_info}>
          <div className={styles.info_block}>
            <span className={styles.info_label}>Родитель</span>
            <span className={styles.info}>
              {data.parent}{" "}
              <span className={styles.info_secondary}>
                {data.parent_number}
              </span>
            </span>
          </div>
          <div className={styles.info_block}>
            <span className={styles.info_label}>Тариф</span>
            <span className={styles.info}>{RATE}</span>
          </div>
          <div className={styles.info_block}>
            <span className={styles.info_label}>Статус</span>
            <span
              className={`${styles.info_status} ${
                styles[`status_${data.status.toLowerCase()}`]
              }`}
            >
              {STATUS}
            </span>
          </div>
          <div className={styles.info_block}>
            <span className={styles.info_label}>Водитель</span>
            <span className={styles.info}>{data.driver}</span>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>

      {/* Футтер */}
      <div className={styles.foot}>
        <Link to={`clients/${data.id}`} className={styles.details}>
          <span className={styles.label}>Подробнее</span>
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
