import { Link, useParams } from "react-router-dom";
import styles from "./ClientsDetailsPage.module.scss";
import { clientsMock } from "../../../entities/client/model/mock.data";
import { ClientProfile } from "../../../entities/client/ui/ClientProfile/ClientProfile";
import { ArrowRight } from "../../../shared/ui/icons";
import { EditClient } from "../../../features/edit-client/ui/EditClient";
import type { ITab } from "../../../shared/ui/Tabs/model/types";
import { Tabs } from "../../../shared/ui/Tabs/ui/Tabs";
import { useState } from "react";
import { RouteList } from "../../../entities/route/ui/RouteList/RouteList";
import { PaymentList } from "../../../entities/payment/ui/PaymentList/PaymentList";

const tabs: ITab[] = [
  {
    id: 1,
    label: "Маршруты",
    value: "routes",
  },
  {
    id: 2,
    label: "Оплаты",
    value: "payments",
  },
];

export function ClientsDetailsPage() {
  const [activeTab, setActiveTab] = useState<ITab>(tabs[0]);
  const { id } = useParams();

  const user = clientsMock.find((item) => item.id === Number(id));

  if (!user) return null;

  return (
    <div className={styles.details}>
      <div className={styles.head}>
        <Link to={"/"} className={styles.title}>
          <ArrowRight className={styles.icon} color="#2D2D2D" size={40} />
          <span className={styles.title_text}>{user.name}</span>
        </Link>
        <EditClient id={String(id)} />
      </div>
      <ClientProfile data={user} />
      <div>
        <Tabs
          value={activeTab}
          onChange={setActiveTab}
          tabs={tabs}
          className={styles.tabs}
        />
      </div>

      {activeTab.value === "routes" && <RouteList />}
      {activeTab.value === "payments" && <PaymentList />}
    </div>
  );
}
