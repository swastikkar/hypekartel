import PhoneFrame from "@/components/PhoneFrame";
import TagChip from "@/components/TagChip";
import StripCard from "@/components/StripCard";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

const conditions = ["DS", "VNDS", "8/10", "6/10"];
const photoLabels = ["Front", "Back", "Side L", "Side R", "Sole", "Tag", "Box", "Receipt"];

const SellPage = () => {
  const [activeCond, setActiveCond] = useState("DS");
  const [showBiometric, setShowBiometric] = useState(false);
  const [scanStage, setScanStage] = useState<"scanning" | "verified">("scanning");

  useEffect(() => {
    if (showBiometric) {
      setScanStage("scanning");
      const t = setTimeout(() => {
        setScanStage("verified");
        const close = setTimeout(() => {
          setShowBiometric(false);
          toast({ title: "✅ Identity Verified", description: "Face ID matched. You can now submit your listing." });
        }, 1200);
        return () => clearTimeout(close);
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [showBiometric]);

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
          onClick={() => setShowBiometric(true)}
        />

        <p className="text-[10px] font-body text-verified text-center">✅ Your identity is verified — no anonymous sellers on HypeKartel</p>

        <button className="w-full py-3.5 rounded-btn bg-primary text-primary-foreground text-[13px] font-body font-bold mb-4">
          Submit for Authentication →
        </button>
      </div>

      {/* Biometric Modal */}
      <Dialog open={showBiometric} onOpenChange={setShowBiometric}>
        <DialogContent className="bg-card border-border text-foreground max-w-[340px] rounded-xl">
          <DialogHeader>
            <DialogTitle className="font-display text-base tracking-wider">🔏 BIOMETRIC SELLER ID</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-4 space-y-4">
            <div className={`relative w-32 h-32 rounded-full border-2 flex items-center justify-center transition-colors ${scanStage === "verified" ? "border-verified" : "border-purple animate-pulse"}`}>
              <span className="text-5xl">{scanStage === "verified" ? "✅" : "👤"}</span>
              {scanStage === "scanning" && (
                <div className="absolute left-2 right-2 h-0.5 bg-purple/70 shadow-[0_0_8px_hsl(var(--purple))] animate-scan-line" />
              )}
            </div>
            <p className={`text-[12px] font-body font-semibold ${scanStage === "verified" ? "text-verified" : "text-purple"}`}>
              {scanStage === "verified" ? "Face ID Verified" : "Scanning your face..."}
            </p>
            <p className="text-[10px] font-body text-soft text-center px-4">
              {scanStage === "verified"
                ? "Your identity has been confirmed on HypeKartel."
                : "Hold still and look directly at the camera."}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </PhoneFrame>
  );
};

export default SellPage;
