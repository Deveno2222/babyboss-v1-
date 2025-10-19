export interface IClient {
  id: number;
  name: string;
  image: string;
  age: number;
  rate: "INDIVIDUAL" | "GROUP";
  parent: string;
  parent_number: string;
  status: "ACTIVE" | "NEW" | "STOPPED";
  driver: string;
}
