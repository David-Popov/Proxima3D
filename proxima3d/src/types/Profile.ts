export type Profile = {
  id: string | undefined;
  user_id: string;
  updated_at: string;
  created_at: string;
  name: string | null;
  lastname: string | null;
  country: string | null;
  city: string | null;
  phone: string | null;
  avatar_url: string | null;
  is_printer: boolean;
};

export type CreateProfile = {
  user_id: string;
  name: string | null;
  lastname: string | null;
  country: string | null;
  city: string | null;
  phone: string | null;
  avatar_url: string | null;
  is_printer: boolean;
};
