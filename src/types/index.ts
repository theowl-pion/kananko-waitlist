export interface WaitlistFormData {
  name: string;
  email: string;
  route: string;
  company_name?: string;
  is_incorporated: boolean;
}

export type Language = "en" | "fr";

export interface Translations {
  waitlistTitle: string;
  networkTitle: string;
  tagline: string;
  whyJoin: string;
  benefits: {
    earnMoney: {
      title: string;
      description: string;
    };
    control: {
      title: string;
      description: string;
    };
    verified: {
      title: string;
      description: string;
    };
    flexible: {
      title: string;
      description: string;
    };
    global: {
      title: string;
      description: string;
    };
    fast: {
      title: string;
      description: string;
    };
  };
  form: {
    title: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    routePlaceholder: string;
    companyPlaceholder: string;
    incorporatedQuestion: string;
    submitButton: string;
    submitting: string;
    success: {
      title: string;
      message1: string;
      message2: string;
      anotherResponse: string;
    };
    error: string;
  };
}
