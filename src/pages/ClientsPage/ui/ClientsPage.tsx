import { useEffect, useState } from "react";
import { AddButton } from "../../../shared/ui/AddButton";
import { Tabs } from "../../../shared/ui/Tabs/ui/Tabs";
import styles from "./ClientsPage.module.scss";
import type { ITab } from "../../../shared/ui/Tabs/model/types";
import { SearchInput } from "../../../shared/ui/SearchInput/ui/SearchInput";

const tabs: ITab[] = [
  { id: 1, label: "Все", value: "all" },
  {
    id: 2,
    label: "Активные",
    value: "active",
  },
  {
    id: 3,
    label: "Новые заявки",
    value: "new",
  },
  {
    id: 4,
    label: "Приостановлены",
    value: "stopped",
  },
];

export function ClientsPage() {
  const [activeTab, setActiveTab] = useState<ITab>(tabs[0]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        {/* title + add_client */}
        <div className={styles.head_top}>
          <h2 className={styles.title}>Клиенты</h2>
          <AddButton href="/" label="Добавить клиента" />
        </div>
        {/* tabs + search */}
        <div className={styles.head_bot}>
          <Tabs value={activeTab} onChange={setActiveTab} tabs={tabs} />
          <SearchInput value={search} onChange={setSearch} />
        </div>
      </div>
    </div>
  );
}
