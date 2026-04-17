export const ADMIN_EMAIL = "admin@sayabantu.com";
export const ADMIN_PASSWORD = "Admin#Sayabantu2026";

const ADMIN_AUTH_KEY = "sayabantu_admin_auth";

export interface AdminSession {
  isLoggedIn: boolean;
  email: string;
}

export const getAdminSession = (): AdminSession => {
  if (typeof window === "undefined") {
    return { isLoggedIn: false, email: "" };
  }

  const raw = window.localStorage.getItem(ADMIN_AUTH_KEY);
  if (!raw) {
    return { isLoggedIn: false, email: "" };
  }

  try {
    const parsed = JSON.parse(raw) as AdminSession;
    if (parsed.isLoggedIn && parsed.email) {
      return parsed;
    }
  } catch {
    // noop
  }

  return { isLoggedIn: false, email: "" };
};

export const loginAdmin = (email: string, password: string) => {
  const isValid = email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
  if (!isValid || typeof window === "undefined") {
    return false;
  }

  const session: AdminSession = { isLoggedIn: true, email };
  window.localStorage.setItem(ADMIN_AUTH_KEY, JSON.stringify(session));
  return true;
};

export const logoutAdmin = () => {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.removeItem(ADMIN_AUTH_KEY);
};
