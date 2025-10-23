import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Input } from "../../../../shared/ui/Input/ui/Input";
import styles from "./EditClientForm.module.scss";
import { Select } from "../../../../shared/ui/Select/ui/Select";
import { options, rateOptions } from "../../model/mock.data";
import { Plus } from "../../../../shared/ui/icons";
import { Pencil } from "../../../../shared/ui/icons/pencil";
import { Button } from "../../../../shared/ui/Button";
import {
  editClientSchema,
  type EditClientSchema,
} from "../../model/validation";
import { zodResolver } from "@hookform/resolvers/zod";

export function EditClientForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditClientSchema>({
    resolver: zodResolver(editClientSchema),
    defaultValues: {
      name: "",
      phone: "",
      driver: "",
      rate: "",
      routes: [{ from: "", time: "", to: "" }],
      date: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "routes",
  });

  const onSubmit = (data: EditClientSchema) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.preventDefault();
      }}
    >
      <Input
        placeholder="Введите имя ребенка"
        {...register("name")}
        labelTop="Имя ребёнка"
        error={errors.name?.message}
      />
      <Input
        placeholder="Введите номер родителя"
        {...register("phone")}
        labelTop="Телефон родителя"
        error={errors.phone?.message}
      />

      <Controller
        name="driver"
        control={control}
        render={({ field }) => (
          <Select
            options={options}
            value={field.value}
            onChange={field.onChange}
            placeholder="Выберите водителя"
            label="Выберите водителя"
            type="driver"
            error={errors.driver?.message}
          />
        )}
      />

      <Controller
        name="rate"
        control={control}
        render={({ field }) => (
          <Select
            options={rateOptions}
            value={field.value}
            onChange={field.onChange}
            placeholder="Выберите тариф"
            label="Тариф"
            type="rate"
            error={errors.rate?.message}
          />
        )}
      />

      {fields.map((item, index) => (
        <div key={item.id} className={styles.routes}>
          <div className={styles.from}>
            <Input
              placeholder="Введите аддрес"
              labelTop={`Маршрут ${index + 1}`}
              label="Откуда"
              {...register(`routes.${index}.from`)}
              className={styles.from_input}
              error={errors.routes?.[index]?.from?.message}
            />
            <Input
              placeholder="00:00"
              label="Время"
              {...register(`routes.${index}.time`)}
              className={styles.time}
              type="time"
              error={errors.routes?.[index]?.time?.message}
            />
            {index > 0 && (
              <button
                className={styles.remove_route}
                onClick={() => remove(index)}
              >
                Удалить маршрут
              </button>
            )}
          </div>
          <Input
            placeholder="Введите аддрес"
            label="Куда"
            {...register(`routes.${index}.to`)}
            error={errors.routes?.[index]?.to?.message}
          />
        </div>
      ))}
      <Input
        placeholder="Впишите дату"
        labelTop="Оплачено до"
        {...register("date")}
        type="date"
        error={errors.date?.message}
      />

      <button
        type="button"
        className={styles.add_route}
        onClick={() => append({ from: "", time: "", to: "" })}
      >
        <Plus size={24} color="#4A5564" />
        <span>Добавить маршрут</span>
      </button>

      <Button icon={<Pencil />} className={styles.btn_save} type="submit">
        Сохранить изменения
      </Button>
    </form>
  );
}
