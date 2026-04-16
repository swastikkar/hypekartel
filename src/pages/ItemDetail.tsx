import PhoneFrame from "@/components/PhoneFrame";
import BackHeader from "@/components/BackHeader";
import TagChip from "@/components/TagChip";
import StripCard from "@/components/StripCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ItemDetail = () => {
  const navigate = useNavigate();
  const [showProvenance, setShowProvenance] = useState(false);

  return (
    <PhoneFrame activeNav="home">
      <div className="space-y-3 animate-fade-in">
        <BackHeader label="Trending Now" backTo="/home" />

        {/* Hero Image */}
        <div className="relative h-[220px] bg-gradient-to-br from-secondary to-card rounded-xl flex items-center justify-center">
          <span className="text-7xl">👟</span>
          <button className="absolute bottom-3 right-3 bg-card/80 backdrop-blur border border-border text-[10px] font-body px-2 py-1 rounded-pill text-foreground">
            👟 AR Try-On
          </button>
        </div>

        <TagChip label="DS · DEADSTOCK" variant="green" />

        <h2 className="font-display text-xl text-foreground tracking-wider leading-tight">
          AIR JORDAN 1 RETRO HIGH OG CHICAGO
        </h2>
        <p className="text-[11px] font-body text-soft">Size US 10 · 555088-170</p>

        {/* Price Row */}
        <div className="flex items-center justify-between">
          <span className="font-display text-primary text-4xl">₹24,000</span>
          <div className="bg-verified/10 border border-verified/30 rounded-lg px-3 py-2 text-center">
            <p className="text-[9px] font-body text-verified">👥 Crowd Fair Price</p>
            <p className="text-[13px] font-body font-bold text-verified">₹22K – ₹26K</p>
          </div>
        </div>

        {/* Price Intel */}
        <div className="grid grid-cols-3 gap-2">
          {[["StockX", "₹25.2K"], ["GOAT", "₹24.8K"], ["Last Sold", "₹23.5K"]].map(([src, p]) => (
            <div key={src} className="bg-card border border-border rounded-lg p-2 text-center">
              <p className="text-[9px] font-body text-muted-foreground">{src}</p>
              <p className="text-[12px] font-body font-semibold text-foreground">{p}</p>
            </div>
          ))}
        </div>

        {/* Auth Strip */}
        <StripCard
          icon="🛡️"
          title="HypeKartel Verified"
          subtitle="AI · Expert · Brand API · Community · Biometric"
          variant="green"
          onClick={() => navigate("/auth-cert")}
        />

        {/* Provenance */}
        <StripCard
          icon="📜"
          title="Provenance Documented"
          subtitle="Original receipt · Box photos · 1 previous owner"
          action="View →"
          variant="default"
          onClick={() => setShowProvenance(true)}
        />

        {/* Seller Card */}
        <div className="bg-card border border-border rounded-xl p-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-sm font-display text-primary-foreground">R</div>
          <div className="flex-1">
            <p className="text-[13px] font-body font-semibold text-foreground">Ravi_Kicks</p>
            <p className="text-[10px] font-body text-soft">⭐ 4.8 · 124 sales · Hype Score 870</p>
          </div>
          <TagChip label="🥇 GOLD" variant="gold" />
        </div>

        {/* Sellers Compete */}
        <div className="bg-card border border-border rounded-xl p-3">
          <p className="text-[11px] font-body text-foreground">🏆 2 other sellers listing same item — <span className="text-primary font-semibold">Compare →</span></p>
        </div>

        {/* Peer Review */}
        <p className="text-[11px] font-body text-soft">⭐⭐⭐⭐⭐ Legit pair, exactly as described — <span className="text-muted-foreground">@kicks_boi</span></p>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-border pb-2">
          {["Details", "​", "Price History"].map((t, i) => (
            <span key={t} className={`text-[12px] font-body font-medium pb-1 ${i === 0 ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}>{t}</span>
          ))}
        </div>
        <p className="text-[11px] font-body text-soft leading-relaxed">
          The Air Jordan 1 Retro High OG "Chicago" features the iconic red, white, and black colorway that started it all. Original 1985 colorway reissued with premium leather and Nike Air branding on the tongue.
        </p>

        {/* Bottom CTA */}
        <div className="flex gap-3 pt-2 pb-4">
          <button className="flex-1 py-3 rounded-btn border border-foreground text-foreground text-[13px] font-body font-semibold">
            Make Offer
          </button>
          <button
            onClick={() => navigate("/auth-cert")}
            className="flex-[2] py-3 rounded-btn bg-primary text-primary-foreground text-[13px] font-body font-semibold"
          >
            🔒 Buy Now — Escrow
          </button>
        </div>
      </div>

      {/* Provenance Modal */}
      <Dialog open={showProvenance} onOpenChange={setShowProvenance}>
        <DialogContent className="bg-card border-border text-foreground max-w-[340px] rounded-xl">
          <DialogHeader>
            <DialogTitle className="font-display text-base tracking-wider">📜 PROVENANCE</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            {[
              { icon: "🧾", label: "Original Receipt", detail: "Nike.com — 12 Jan 2025" },
              { icon: "📦", label: "Box Condition", detail: "Intact, all tags attached" },
              { icon: "📸", label: "Photos Verified", detail: "8 photos · AI cross-checked" },
              { icon: "👤", label: "Previous Owners", detail: "1 — @vedant_k " },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-secondary/50 border border-border rounded-lg p-3">
                <span className="text-lg">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-body font-semibold text-foreground">{item.label}</p>
                  <p className="text-[10px] font-body text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </PhoneFrame>
  );
};

export default ItemDetail;
