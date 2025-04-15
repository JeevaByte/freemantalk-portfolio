
import { useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

// Define a type for the is_admin RPC function parameters
type IsAdminParams = {
  user_id: string;
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          const { data } = await supabase.rpc<boolean>('is_admin', {
            user_id: session.user.id
          } as IsAdminParams);
          setIsAdmin(!!data);
        } else {
          setIsAdmin(false);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        supabase.rpc<boolean>('is_admin', {
          user_id: session.user.id
        } as IsAdminParams).then(({ data }) => {
          setIsAdmin(!!data);
        });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return { user, session, isAdmin };
};
