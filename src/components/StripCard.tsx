import { ChevronRight } from "lucide-react";

interface StripCardProps {
  icon: string;
  title: string;
  subtitle: string;
  action?: string;
  variant?: "default" | "green" | "purple" | "orange" | "blue";
  onClick?: () => void;
}

const variantStyles = {
  default: "bg-card border-border",
  green: "bg-verified/10 border-verified/20",
  purple: "bg-purple/10 border-purple/20",
  orange: "bg-primary/10 border-primary/20",
  blue: "bg-escrow/10 border-escrow/20",
};

const titleColors = {
  default: "text-foreground",
  green: "text-verified",
  purple: "text-purple",
  orange: "text-primary",
  blue: "text-escrow",
};

const StripCard = ({ icon, title, subtitle, action, variant = "default", onClick }: StripCardProps) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 p-3 rounded-xl border ${variantStyles[variant]} text-left transition-colors active:opacity-80`}
  >
    <span className="text-xl">{icon}</span>
    <div className="flex-1 min-w-0">
      <p className={`text-[13px] font-body font-semibold ${titleColors[variant]}`}>{title}</p>
      <p className="text-[10px] font-body text-soft leading-relaxed">{subtitle}</p>
    </div>
    {action ? (
      <span className="text-primary text-[11px] font-body font-semibold shrink-0">{action}</span>
    ) : (
      <ChevronRight size={16} className="text-muted-foreground shrink-0" />
    )}
  </button>
);

export default StripCard;
