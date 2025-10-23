import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "../../../shared/ui/icons";
import styles from "./ClientEditPage.module.scss";
import { EditClientForm } from "../../../features/edit-client/ui/EditClientForm/EditClientForm";

export function ClientEditPage() {
  const { id } = useParams();

  return (
    <div className={styles.client_edit}>
      <div className={styles.head}>
        <ArrowRight className={styles.arrow_icon} color="#2D2D2D" />
        <Link to={`/clients/${id}`} className={styles.back_link_title}>
          Редактировать клиента
        </Link>
      </div>

      <div className={styles.content}>
        <EditClientForm />
      </div>
    </div>
  );
}
