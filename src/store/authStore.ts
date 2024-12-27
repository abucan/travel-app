import { create } from "zustand";
import { supabase } from "@/src/lib/supabase";
import { Session, User } from "@supabase/supabase-js";

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  userEmail: string | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  verifyOTP: (otp: string) => Promise<void>;
  resendOTP: () => Promise<void>;
  isEmailVerified: boolean;
  checkEmailVerification: () => Promise<boolean>;
  resetPassword: (email: string) => Promise<void>;
  initializeAuth: () => Promise<(() => void) | void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  session: null,
  loading: true,
  userEmail: null,
  isEmailVerified: false,
  signUp: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    set({ user: data.user, session: data.session, userEmail: email });
  },
  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    set({ user: data.user, session: data.session });
  },
  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null, session: null, userEmail: null });
  },
  verifyOTP: async (otp: string) => {
    const state = get();
    if (!state.userEmail) {
      throw new Error("No user email found");
    }

    const { data, error } = await supabase.auth.verifyOtp({
      email: state.userEmail,
      token: otp,
      type: "email",
    });
    if (error) throw error;
    set({ user: data.user, session: data.session });
  },
  resendOTP: async () => {
    const state = get();
    if (!state.userEmail) {
      throw new Error("No user email found");
    }

    const { error } = await supabase.auth.resend({
      type: "signup",
      email: state.userEmail,
    });
    if (error) throw error;
  },
  // TODO: fix a link at some point
  resetPassword: async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/reset-password",
    });
    if (error) throw error;

    set({ userEmail: email });
  },
  checkEmailVerification: async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) throw error;

    // Check confirmed_at instead of email_verified metadata
    const isVerified = user?.confirmed_at !== null;
    set({ isEmailVerified: isVerified });
    return isVerified;
  },
  initializeAuth: async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    if (error) throw error;

    if (session) {
      const { user } = session;
      set({
        user,
        session,
        isEmailVerified: user.confirmed_at !== null,
        userEmail: user.email,
      });
    }

    // Set up auth state change listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session) {
        const { user } = session;
        set({
          user,
          session,
          isEmailVerified: user.confirmed_at !== null,
          userEmail: user.email,
        });
      } else {
        set({
          user: null,
          session: null,
          isEmailVerified: false,
          userEmail: null,
        });
      }
    });

    set({ loading: false });

    return () => subscription.unsubscribe();
  },
}));
