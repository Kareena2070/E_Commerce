export interface User {
  name: string;
  email: string;
  role: "customer" | "admin" | "owner";
  password : string
}
