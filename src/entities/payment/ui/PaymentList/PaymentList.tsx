import { Payment } from "../Payment/Payment";
import styles from "./PaymentList.module.scss";

export function PaymentList() {
  return (
    <div className={styles.payment_list}>
      {Array.from([1, 2, 3]).map((i) => (
        <Payment key={i} />
      ))}
    </div>
  );
}
