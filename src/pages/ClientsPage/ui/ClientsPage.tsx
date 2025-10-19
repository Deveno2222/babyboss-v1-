import { useEffect, useState } from "react";
import { Tabs } from "../../../shared/ui/Tabs/ui/Tabs";
import styles from "./ClientsPage.module.scss";
import type { ITab } from "../../../shared/ui/Tabs/model/types";
import { SearchInput } from "../../../shared/ui/SearchInput/ui/SearchInput";
import { ClientList } from "../../../entities/client/ui/ClientList/ClientList";
import { clientsMock } from "../../../entities/client/model/mock.data";
import { AddClient } from "../../../features/add-client/ui/AddClient";

const tabs: ITab[] = [
  { id: 1, label: "Все", value: "ALL" },
  {
    id: 2,
    label: "Активные",
    value: "ACTIVE",
  },
  {
    id: 3,
    label: "Новые заявки",
    value: "NEW",
  },
  {
    id: 4,
    label: "Приостановлены",
    value: "STOPPED",
  },
];

export function ClientsPage() {
  const [activeTab, setActiveTab] = useState<ITab>(tabs[0]);
  const [search, setSearch] = useState<string>("");

  const filteredData = clientsMock.filter((item) => {
    const matchesTab =
      activeTab.value === "ALL" || item.status === activeTab.value;

    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.parent_number.includes(search);

    return matchesTab && matchesSearch;
  });

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        {/* title + add_client */}
        <div className={styles.head_top}>
          <h2 className={styles.title}>Клиенты</h2>
          <AddClient />
        </div>
        {/* tabs + search */}
        <div className={styles.head_bot}>
          <Tabs value={activeTab} onChange={setActiveTab} tabs={tabs} />
          <SearchInput value={search} onChange={setSearch} />
        </div>
      </div>

      <ClientList data={filteredData} />
    </div>
  );
}
