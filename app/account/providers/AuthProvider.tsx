import { useCallback, useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "@account/config";
import { useFetch } from "@account/hooks";
import { AuthContext } from "@account/contexts";
import type { User } from "@account/interfaces";

async function requestCurrentUser(): Promise<User | null> {
  try {
    const response = await fetch(new URL("/users/me", BACKEND_BASE_URL), {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      return (await response.json()) as User;
    }
    return null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const signIn = async (email: string, password: string) => {
    const response = await fetch(new URL("/login", BACKEND_BASE_URL), {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw {
        status: response.status,
        message: data.message || response.statusText,
      };
    }

    const user = await requestCurrentUser();
    setCurrentUser(user);
    return { status: response.status, data };
  };

  const signUp = async (email: string, password: string, name: string) => {
    const response = await fetch(new URL("/register", BACKEND_BASE_URL), {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw {
        status: response.status,
        message: data.message || response.statusText,
      };
    }

    const user = await requestCurrentUser();
    setCurrentUser(user);
    return { status: response.status, data };
  };

  const signOut = () => {
    fetch(new URL("/logout", BACKEND_BASE_URL), {
      method: "POST",
      credentials: "include",
    }).catch(() => {});
    setCurrentUser(null);
    useFetch.clearCache();
  };

  const fetchUserData = useCallback(async () => {
    const user = await requestCurrentUser();
    setCurrentUser(user);
    return user;
  }, []);

  const isAuthenticated = useCallback(() => {
    return currentUser !== null;
  }, [currentUser]);

  const checkTokenValidity = useCallback(() => {
    return currentUser !== null;
  }, [currentUser]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await requestCurrentUser();
        setCurrentUser(user);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token: null,
        isAuthenticated,
        checkTokenValidity,
        signIn,
        signUp,
        signOut,
        loading,
        currentUser,
        fetchUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
