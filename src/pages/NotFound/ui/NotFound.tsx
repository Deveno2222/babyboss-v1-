import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

export function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <h1>404 — Страница не найдена</h1>
      <p>Похоже, вы попали не туда 😅</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}
