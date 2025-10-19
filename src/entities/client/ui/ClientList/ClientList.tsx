import type { IClient } from "../../model/types";
import { Client } from "../Client/Client";
import styles from "./ClientList.module.scss";

interface ClientListProps {
  data: IClient[];
}

export function ClientList({ data }: ClientListProps) {
  if (data.length === 0 || data === null) {
    return <div className={styles.not_found}>Список клиентов пуст</div>;
  }
  return (
    <div className={styles.client_list}>
      {data.map((i) => (
        <Client key={i.id} data={i} />
      ))}
    </div>
  );
}
