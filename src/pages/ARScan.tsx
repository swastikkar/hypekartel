import PhoneFrame from "@/components/PhoneFrame";
import { useNavigate } from "react-router-dom";

const ARScan = () => {
  const navigate = useNavigate();

  return (
    <PhoneFrame activeNav="scan">
      <div className="space-y-3 animate-fade-in">
        <h2 className="font-display text-lg tracking-wider text-foreground py-3">📷 HYPEKARTEL SCAN</h2>
        <p className="text-[10px] font-display text-muted-foreground tracking-[0.15em]">SHAZAM FOR SNEAKERS — POINT AT ANY SHOE</p>

        {/* Viewfinder */}
        <div className="relative h-[200px] bg-card border border-border rounded-xl overflow-hidden flex items-center justify-center">
          {/* Corner brackets */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary" />
          <span className="text-5xl opacity-30">👟</span>
          {/* Scan line */}
          <div className="absolute left-6 right-6 h-0.5 bg-primary/70 shadow-[0_0_8px_hsl(var(--primary))] animate-scan-line" />
          <p className="absolute bottom-6 text-[10px] font-body text-muted-foreground">Align product inside the frame</p>
        </div>

        {/* Result */}
        <div className="bg-card border border-border rounded-xl p-3 space-y-1">
          <p className="text-[13px] font-body font-bold text-foreground">🎯 Identified: Nike Dunk Low Panda</p>
          <p className="text-[11px] font-body text-soft leading-relaxed">
            Retail: ₹8,495 · Release: Feb 2021<br />
            Current Resale: ₹14,000–₹16,000<br />
            Demand: 🔥 High · Last sold: ₹14,400
          </p>
        </div>

        {/* Price Intel */}
        <div className="bg-verified/5 border border-verified/15 rounded-xl p-3 space-y-2">
          <p className="text-[11px] font-body font-semibold text-verified">📊 Real-time Price Intelligence</p>
          {[["StockX", "₹15,200"], ["GOAT", "₹14,800"], ["HypeKartel avg", "₹14,400"]].map(([s, p]) => (
            <div key={s} className="flex justify-between">
              <span className="text-[11px] font-body text-soft">{s}</span>
              <span className="text-[11px] font-body font-semibold text-foreground">{p}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="space-y-2 pb-4">
          <button className="w-full py-3 rounded-btn border border-border bg-card text-foreground text-[12px] font-body font-semibold">
            AR Try-On
          </button>
          <button className="w-full py-3 rounded-btn border border-border bg-card text-foreground text-[12px] font-body font-semibold">
            🛡️ Check if this pair is authentic
          </button>
          <button
            onClick={() => navigate("/item")}
            className="w-full py-3.5 rounded-btn bg-primary text-primary-foreground text-[13px] font-body font-bold"
          >
            🔍 Find this on HypeKartel
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default ARScan;
