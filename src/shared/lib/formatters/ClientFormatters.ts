import type { IClient } from "../../../entities/client/model/types";

export function getRateLabel(rate: IClient["rate"]): string {
  switch (rate) {
    case "INDIVIDUAL":
      return "Индивидуальный";
    case "GROUP":
      return "Групповой";
    default:
      return "";
  }
}

export function getStatusLabel(status: IClient["status"]): string {
  switch (status) {
    case "ACTIVE":
      return "Активный";
    case "NEW":
      return "Новая заявка";
    case "STOPPED":
      return "Приостановлена";
    default:
      return "";
  }
}
