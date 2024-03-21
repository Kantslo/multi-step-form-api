type PlanType = "arcade" | "advanced" | "pro";
type BillingType = "monthly" | "yearly";
type AddonType = "online service" | "larger storage" | "customizable profile";

export type FormType = {
  name: string;
  email: string;
  phone: number;
  plan: PlanType;
  billing: BillingType;
  addons: AddonType;
  id: string;
};
