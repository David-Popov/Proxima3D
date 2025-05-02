import { Session } from "@supabase/supabase-js";

export type AuthContextType = {
  session: Session | null | undefined;
  signUpNewUser: (request: SignUpFormRequest) => Promise<{
    success: boolean;
    data?: any;
    error?: any;
  }>;
  signInUser: (request: SignInRequest) => Promise<{
    success: boolean;
    data?: any;
    error?: any;
  }>;
  signInWithGoogle: () => Promise<{
    success: boolean;
    data?: any;
    error?: any;
  }>;
  signOut: () => void;
};

export type SignUpRequest = {
  email: string;
  password: string;
};

export type SignInRequest = {
  email: string;
  password: string;
};

export type SignUpFormRequest = {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  lastname: string;
  country: string;
  city: string;
  phone: string;
  is_printer: boolean;
  avatartUrl: string | null;
};
