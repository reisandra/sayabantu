import { FormEvent, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ADMIN_EMAIL, ADMIN_PASSWORD, getAdminSession, loginAdmin } from "@/lib/adminAuth";
import { useSiteSettings } from "@/lib/siteSettings";

const AdminLoginPage = () => {
  const settings = useSiteSettings();
  const navigate = useNavigate();
  const session = getAdminSession();
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState(ADMIN_PASSWORD);
  const [error, setError] = useState("");

  if (session.isLoggedIn) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const ok = loginAdmin(email.trim(), password);
    if (!ok) {
      setError("Email atau password admin salah.");
      return;
    }

    navigate("/admin", { replace: true });
  };

  return (
    <main className="min-h-screen bg-muted/40 flex items-center justify-center px-4">
      <section className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-sm space-y-5">
        <div>
          <p className="text-sm text-muted-foreground">{settings.brandName} Admin</p>
          <h1 className="text-2xl font-extrabold text-foreground">Login Admin</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Masuk untuk mengelola konten landing page.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-foreground">Email Admin</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              required
            />
          </label>

          <label className="space-y-1 block">
            <span className="text-sm font-semibold text-foreground">Password Admin</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              required
            />
          </label>

          {error && <p className="text-sm font-medium text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Masuk ke Admin Panel
          </button>
        </form>

        <div className="rounded-lg bg-muted p-3 text-xs text-muted-foreground space-y-1">
          <p className="font-semibold text-foreground">Kredensial default:</p>
          <p>Email: {ADMIN_EMAIL}</p>
          <p>Password: {ADMIN_PASSWORD}</p>
        </div>
      </section>
    </main>
  );
};

export default AdminLoginPage;
