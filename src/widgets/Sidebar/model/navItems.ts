import type { ComponentType } from "react";
import { Client, Driver, Wallet } from "../../../shared/ui/icons";
import type { IconProps } from "../../../shared/ui/icons/client";

interface INav {
  id: number;
  label: string;
  path: string;
  icon: ComponentType<IconProps> | undefined;
}

export const navItems: INav[] = [
  { id: 1, label: "Клиенты", path: "/", icon: Client },
  { id: 2, label: "Водители", path: "/drivers", icon: Driver },
  { id: 3, label: "Оплаты", path: "/payment", icon: Wallet },
];
