import PhoneFrame from "@/components/PhoneFrame";
import BackHeader from "@/components/BackHeader";

const steps = [
  { label: "Payment in Escrow", sub: "₹24,000 secured", status: "done" },
  { label: "Seller Shipped", sub: "Tracking: DTDC-88421", status: "done" },
  { label: "Out for Delivery", sub: "Expected by 6 PM today", status: "active" },
  { label: "Delivered · GPS Verified", sub: "Auto-confirmed via GPS escrow", status: "pending" },
  { label: "Seller Paid", sub: "Funds auto-released on delivery confirmation", status: "pending" },
];

const OrderTracking = () => {
  return (
    <PhoneFrame activeNav="orders">
      <div className="space-y-3 animate-fade-in">
        <BackHeader label="Orders" backTo="/checkout" />

        <p className="text-[11px] font-body text-soft">Order #HK-88421 · Air Jordan 1 Chicago</p>

        {/* Map */}
        <div className="h-[140px] bg-gradient-to-br from-verified/10 to-verified/5 border border-verified/20 rounded-xl flex flex-col items-center justify-center">
          <span className="text-4xl">🗺️</span>
          <p className="text-[9px] font-display text-muted-foreground tracking-[0.15em] mt-2">GPS DELIVERY ROUTE · LIVE TRACKING</p>
        </div>

        {/* Progress */}
        <div className="space-y-0 pl-2 pt-2">
          {steps.map((s, i) => {
            const dotColor = s.status === "done" ? "bg-verified" : s.status === "active" ? "border-2 border-primary bg-transparent" : "bg-border";
            const textColor = s.status === "done" ? "text-verified" : s.status === "active" ? "text-primary" : "text-muted-foreground";
            const lineColor = s.status === "done" ? "bg-verified" : "bg-border";
            return (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full ${dotColor} flex items-center justify-center`}>
                    {s.status === "done" && <span className="text-[8px] text-primary-foreground">✓</span>}
                  </div>
                  {i < steps.length - 1 && <div className={`w-0.5 h-10 ${lineColor}`} />}
                </div>
                <div className="pb-6">
                  <p className={`text-[12px] font-body font-semibold ${textColor}`}>{s.label}</p>
                  <p className="text-[10px] font-body text-soft">{s.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="space-y-2 pb-4">
          <div className="w-full py-3 rounded-btn bg-verified/10 border border-verified/30 text-verified text-[13px] font-body font-semibold text-center">
            🛰️ Auto GPS Escrow Active
          </div>
          <p className="text-[10px] font-body text-soft text-center">Payment auto-releases when GPS confirms delivery at your address</p>
          <button className="w-full py-3 rounded-btn bg-danger/10 border border-danger/30 text-danger text-[13px] font-body font-semibold">
            ⚠️ Raise a Dispute
          </button>
          <p className="text-[10px] font-body text-soft text-center">48hr dispute mediation · Human reviewer assigned</p>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default OrderTracking;
