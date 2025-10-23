import { z } from "zod";

export const editClientSchema = z.object({
  name: z.string().min(1, "Введите имя ребенка"),
  phone: z.string().min(1, "Введите номер ребенка"),
  driver: z.string().min(1, "Выберите водителя"),
  rate: z.string().min(1, "Выберите тариф"),
  date: z.string().min(1, "Выберите дату"),
  routes: z.array(
    z.object({
      from: z.string().min(1, "Введите адрес отправления"),
      time: z.string().min(1, "Введите время"),
      to: z.string().min(1, "Введите адрес назначения"),
    })
  ),
});

export type EditClientSchema = z.infer<typeof editClientSchema>;
