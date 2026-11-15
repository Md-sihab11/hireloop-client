export type BillingCycle = "monthly" | "yearly";

export type PricingPlan = {
  id: string;
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  period: string;
  featuresHeading: string;
  features: string[];
  popular: boolean;
  buttonText: string;
  buttonVariant: string;
};

