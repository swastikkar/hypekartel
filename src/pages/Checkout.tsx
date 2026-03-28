import PhoneFrame from "@/components/PhoneFrame";
import BackHeader from "@/components/BackHeader";
import TagChip from "@/components/TagChip";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const payMethods = ["UPI", "Card", "Wallet", "Net"];

const Checkout = () => {
  const navigate = useNavigate();
  const [payMethod, setPayMethod] = useState("UPI");
  const [insurance, setInsurance] = useState(true);

  return (
    <PhoneFrame activeNav="home">
      <div className="space-y-3 animate-fade-in">
        <BackHeader label="SECURE CHECKOUT" backTo="/auth-cert" />

        {/* Order Summary */}
        <div className="bg-card border border-border rounded-xl p-3 flex items-center gap-3">
          <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary to-card flex items-center justify-center text-2xl shrink-0">👟</div>
          <div className="flex-1 min-w-0 space-y-1">
            <p className="text-[12px] font-body font-semibold text-foreground leading-tight">Air Jordan 1 Retro High OG Chicago</p>
            <div className="flex gap-1.5">
              <TagChip label="DS" variant="green" />
              <TagChip label="✓ Auth Verified" variant="green" />
            </div>
            <p className="font-display text-primary text-lg">₹24,000</p>
          </div>
        </div>

        {/* Escrow Hero */}
        <div className="bg-gradient-to-br from-escrow/15 to-escrow/5 border border-escrow/25 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">🔒</span>
            <span className="text-[13px] font-body font-bold text-escrow">Smart Escrow Active</span>
          </div>
          <p className="text-[11px] font-body text-soft leading-relaxed">
            ₹24,000 held safely — GPS auto-release on delivery. Seller gets paid only after you confirm receipt.
          </p>
          <div className="bg-escrow/10 rounded-lg p-2">
            <p className="text-[10px] font-body text-escrow">⏳ No payment releases until both buyer & seller confirm</p>
          </div>
        </div>

        {/* Address */}
        <div>
          <p className="text-[10px] font-display text-muted-foreground tracking-[0.15em] mb-2">DELIVERY ADDRESS</p>
          <div className="bg-card border border-border rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <p className="text-[11px] font-body text-foreground">42, Bandra West, Mumbai 400050</p>
            </div>
            <span className="text-primary text-[11px] font-body font-semibold">Edit</span>
          </div>
        </div>

        {/* Payment */}
        <div>
          <p className="text-[10px] font-display text-muted-foreground tracking-[0.15em] mb-2">PAYMENT METHOD</p>
          <div className="flex gap-2">
            {payMethods.map((m) => (
              <button
                key={m}
                onClick={() => setPayMethod(m)}
                className={`flex-1 py-2 rounded-pill text-[11px] font-body font-medium border transition-colors ${
                  payMethod === m ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Insurance Toggle */}
        <div className="bg-card border border-border rounded-xl p-3 flex items-center justify-between">
          <div>
            <p className="text-[12px] font-body font-semibold text-foreground">🛡️ Full Buyer Insurance</p>
            <p className="text-[10px] font-body text-soft">Loss, damage & fraud · ₹99</p>
          </div>
          <button
            onClick={() => setInsurance(!insurance)}
            className={`w-10 h-6 rounded-full transition-colors ${insurance ? "bg-primary" : "bg-border"} relative`}
          >
            <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-foreground transition-transform ${insurance ? "left-[18px]" : "left-0.5"}`} />
          </button>
        </div>

        <p className="text-[10px] font-body text-verified">✅ Verified Payment Protection — funds 100% secured</p>

        {/* Fee Breakdown */}
        <div className="bg-card border border-border rounded-xl divide-y divide-border">
          {[
            ["Item Price", "₹24,000"],
            ["Platform Fee 3%", "₹720"],
            ["Buyer Insurance", insurance ? "₹99" : "—"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between px-3 py-2.5">
              <span className="text-[11px] font-body text-soft">{k}</span>
              <span className="text-[11px] font-body text-foreground">{v}</span>
            </div>
          ))}
          <div className="flex justify-between px-3 py-2.5">
            <span className="text-[12px] font-body font-bold text-foreground">Total</span>
            <span className="font-display text-primary text-lg">{insurance ? "₹24,819" : "₹24,720"}</span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate("/orders")}
          className="w-full py-3.5 rounded-btn bg-primary text-primary-foreground text-[13px] font-body font-bold"
        >
          💳 Pay & Activate Escrow
        </button>
        <p className="text-[10px] font-body text-soft text-center pb-4">Seller paid only after you confirm receipt</p>
      </div>
    </PhoneFrame>
  );
};

export default Checkout;
