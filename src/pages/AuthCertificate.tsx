import PhoneFrame from "@/components/PhoneFrame";
import BackHeader from "@/components/BackHeader";
import { useNavigate } from "react-router-dom";

const checks = [
  { icon: "🤖", title: "AI Fake Detection", sub: "Pattern analysis · 2M data points", score: "98.7%" },
  { icon: "👨‍💼", title: "Expert Authenticator", sub: "Ravi K. — Certified since 2018", score: "✓" },
  { icon: "🏷️", title: "Brand API — Nike DB", sub: "Serial confirmed in brand database", score: "✓" },
  { icon: "👥", title: "Community Review", sub: "12 verified collectors voted", score: "12/12" },
  { icon: "🔏", title: "Biometric Seller ID", sub: "Face ID confirmed", score: "✓" },
];

const AuthCertificate = () => {
  const navigate = useNavigate();

  return (
    <PhoneFrame activeNav="home">
      <div className="space-y-3 animate-fade-in">
        <BackHeader label="Item Detail" backTo="/item" />

        {/* Hero */}
        <div className="bg-gradient-to-br from-verified/20 to-verified/5 border border-verified/30 rounded-xl p-6 text-center">
          <span className="text-5xl block mb-2">🛡️</span>
          <h2 className="font-display text-lg text-foreground tracking-wider">AUTHENTICATION CERTIFICATE</h2>
          <p className="text-[10px] font-body text-verified mt-1">CERT ID: HK-AUTH-88421</p>
        </div>

        {/* Metadata */}
        <div className="bg-card border border-border rounded-xl divide-y divide-border">
          {[["Item", "Air Jordan 1 Chicago"], ["Verified On", "28 Mar 2026"], ["Result", "✓ AUTHENTIC"]].map(([k, v]) => (
            <div key={k} className="flex justify-between px-3 py-2.5">
              <span className="text-[11px] font-body text-muted-foreground">{k}</span>
              <span className={`text-[11px] font-body font-semibold ${v === "✓ AUTHENTIC" ? "text-verified" : "text-foreground"}`}>{v}</span>
            </div>
          ))}
        </div>

        {/* Verification Methods */}
        <h3 className="font-display text-sm text-muted-foreground tracking-[0.15em] pt-1">VERIFICATION METHODS</h3>
        <div className="space-y-2">
          {checks.map((c) => (
            <div key={c.title} className="flex items-center gap-3 bg-verified/5 border border-verified/15 rounded-xl p-3">
              <div className="w-8 h-8 rounded-lg bg-verified/10 border border-verified/20 flex items-center justify-center text-base">{c.icon}</div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-body font-semibold text-foreground">{c.title}</p>
                <p className="text-[10px] font-body text-soft">{c.sub}</p>
              </div>
              <span className="text-[12px] font-body font-bold text-verified shrink-0">{c.score}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="space-y-2 pt-2 pb-4">
          <button className="w-full py-3 rounded-btn border border-border bg-card text-foreground text-[12px] font-body font-semibold">
            ⛓️ View Blockchain Record
          </button>
          <button className="w-full py-3 rounded-btn border border-border bg-card text-foreground text-[12px] font-body font-semibold">
            🔗 View NFT Ownership Certificate
          </button>
          <button
            onClick={() => navigate("/checkout")}
            className="w-full py-3.5 rounded-btn bg-primary text-primary-foreground text-[13px] font-body font-bold"
          >
            🔒 Proceed to Escrow Checkout
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default AuthCertificate;
