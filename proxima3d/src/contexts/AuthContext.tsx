import { Session } from "@supabase/supabase-js";
import {
  PropsWithChildren,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import { supabase } from "../supabase/supabaseClient";
import {
  AuthContextType,
  SignInRequest,
  SignUpFormRequest,
  SignUpRequest,
} from "../types/AuthType";
import { CreateProfile } from "../types/Profile";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context == undefined) {
    throw new Error("useAuth must be within an AuthContextProvider");
  }

  return context;
};

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session | null | undefined>();

  //SIGN-UP
  const signUpNewUser = async (request: SignUpFormRequest) => {
    let signUpRequest: SignUpRequest = {
      email: request.email,
      password: request.password,
    };

    const { data, error } = await supabase.auth.signUp(signUpRequest);

    const insertProfileResult = await insertProfile(
      request,
      data.user?.id.toString()!
    );

    if (error) {
      console.error("There was a problem signing up: ", error);
      return { success: true, error }; //CHANGE TO FALSE LATER. I SET IT TO FALSE BECAUSE HAVE SMTP PROBLEM WHICH STOPS THE PROCESS
    }

    if (!insertProfileResult.success) {
      return { success: false, error: insertProfileResult.error };
    }

    return { success: true, data };
  };

  //CREATE PROFILE CONNECTED TO USER
  const insertProfile = async (request: SignUpFormRequest, userId: string) => {
    let profile: CreateProfile = {
      country: request.country,
      name: request.name,
      lastname: request.lastname,
      city: request.city,
      avatar_url: request.avatartUrl == null ? "" : request.avatartUrl,
      is_printer: request.is_printer,
      phone: request.phone != null ? request.phone : "",
      user_id: userId,
    };

    console.log("profile: ", profile);

    const { data, error } = await supabase
      .from("profiles")
      .insert(profile)
      .single();

    if (error) {
      console.error(
        "There was a problem creating profile connected to user: ",
        error
      );
      return { success: false, error };
    }

    return { success: true, data };
  };

  //SIGN-IN
  const signInUser = async (request: SignInRequest) => {
    if (!request) {
      return { success: false, data: null };
    }
    const { data, error } = await supabase.auth.signInWithPassword(request);

    if (error) {
      console.error("There was a problem signing in: ", error);
      return { success: false, error };
    }

    console.log("SignIn success: ", data);
    return { success: true, data };
  };

  //SIGN-IN WITH GOOGLE
  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.error("There was a problem with google sign-in: ", error);
      return { success: false, error };
    }

    return { success: true, data };
  };

  //SIGN-OUT
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("There was an error during signOut: ", error);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ session, signUpNewUser, signInUser, signInWithGoogle, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
