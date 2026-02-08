import { Shield, Lock, FileText, Server } from "lucide-react";

export function DataSecuritySection() {
  return (
    <section className="py-16 bg-muted/40">
      <div className="container-padding">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-2">
            Data & Security
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Enterprise-grade protection by default
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mt-3">
            Automation only works when your data is safe. Every engagement is designed around
            confidentiality, least-privilege access, and clear audit trails.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary">NDA‑first collaboration</h3>
              <p className="text-xs text-muted-foreground">
                We’re happy to work under your NDA from the first deep‑dive so you can share
                real processes, numbers, and systems without risk.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Server className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary">Your infra by default</h3>
              <p className="text-xs text-muted-foreground">
                Solutions can run entirely on your cloud or on‑prem environment. No data has to
                leave your perimeter unless you explicitly choose.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Lock className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary">Role‑based access</h3>
              <p className="text-xs text-muted-foreground">
                Principle of least privilege with environment‑level roles for admins, operators,
                and business users to avoid unnecessary access.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Shield className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary">Audit‑ready logging</h3>
              <p className="text-xs text-muted-foreground">
                Critical actions are logged with who/what/when so you have a clear audit trail
                for reviews, compliance, and incident analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
