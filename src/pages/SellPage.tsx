import PhoneFrame from "@/components/PhoneFrame";
import TagChip from "@/components/TagChip";
import StripCard from "@/components/StripCard";
import { useState } from "react";

const conditions = ["DS", "VNDS", "8/10", "6/10"];
const photoLabels = ["Front", "Back", "Side L", "Side R", "Sole", "Tag", "Box", "Receipt"];

const SellPage = () => {
  const [activeCond, setActiveCond] = useState("DS");

  return (
    <PhoneFrame activeNav="sell">
      <div className="space-y-3 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between py-3">
          <h2 className="font-display text-lg tracking-wider text-foreground">NEW LISTING</h2>
          <TagChip label="AUTH-FIRST POLICY" variant="green" />
        </div>

        {/* Warning */}
        <div className="bg-primary/10 border border-primary/25 rounded-xl p-3">
          <p className="text-[11px] font-body text-primary">⚠️ Your item must pass authentication before it goes live. No anonymous sellers on HypeKartel.</p>
        </div>

        {/* Photos */}
        <p className="text-[10px] font-display text-muted-foreground tracking-[0.15em]">UPLOAD PHOTOS (8 ANGLES REQUIRED)</p>
        <div className="grid grid-cols-4 gap-2">
          {photoLabels.map((l) => (
            <div key={l} className="aspect-square rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center gap-1 hover:border-primary transition-colors cursor-pointer">
              <span className="text-lg">📸</span>
              <span className="text-[8px] font-body text-muted-foreground">{l}</span>
            </div>
          ))}
        </div>

        {/* Inputs */}
        <input className="w-full bg-card border border-border rounded-xl px-3 py-3 text-[12px] font-body text-foreground placeholder:text-muted-foreground" placeholder="Item name..." />
        <input className="w-full bg-card border border-border rounded-xl px-3 py-3 text-[12px] font-body text-foreground placeholder:text-muted-foreground" placeholder="Serial / Style number..." />

        {/* Condition */}
        <p className="text-[10px] font-display text-muted-foreground tracking-[0.15em]">CONDITION</p>
        <div className="flex gap-2">
          {conditions.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCond(c)}
              className={`flex-1 py-2 rounded-pill text-[11px] font-body font-medium border transition-colors ${
                activeCond === c ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Smart Price */}
        <StripCard
          icon="🤖"
          title="Smart Price Suggestion"
          subtitle="Based on StockX, GOAT & recent HK sales"
          action="₹22–25K"
          variant="green"
        />

        <input className="w-full bg-card border border-border rounded-xl px-3 py-3 text-[12px] font-body text-foreground placeholder:text-muted-foreground" placeholder="Your asking price: ₹ ___" />

        {/* Biometric */}
        <StripCard
          icon="🔏"
          title="Biometric Seller ID Required"
          subtitle="Face ID verification before listing goes live"
          variant="purple"
        />

        <p className="text-[10px] font-body text-verified text-center">✅ Your identity is verified — no anonymous sellers on HypeKartel</p>

        <button className="w-full py-3.5 rounded-btn bg-primary text-primary-foreground text-[13px] font-body font-bold mb-4">
          Submit for Authentication →
        </button>
      </div>
    </PhoneFrame>
  );
};

export default SellPage;
