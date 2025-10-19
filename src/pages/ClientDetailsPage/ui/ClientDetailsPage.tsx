import { useParams } from "react-router-dom";
import styles from "./ClientsDetailsPage.module.scss";

export function ClientsDetailsPage() {
  const { id } = useParams();

  return (
    <div className={styles.details}>
      <h2>Детали клиента</h2>
      <p>ID клиента: {id}</p>
    </div>
  );
}
