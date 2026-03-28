import { useNavigate } from "react-router-dom";

interface ListingCardProps {
  id?: number;
  name: string;
  price: string;
  tier: string;
  condition: string;
  emoji?: string;
}

const ListingCard = ({ name, price, tier, condition, emoji = "👟" }: ListingCardProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/item")}
      className="bg-card rounded-xl border border-border overflow-hidden text-left w-full transition-transform active:scale-[0.97]"
    >
      <div className="relative h-[120px] bg-gradient-to-br from-secondary to-card flex items-center justify-center">
        <span className="text-5xl">{emoji}</span>
        <span className="absolute top-2 right-2 text-[9px] font-body font-semibold text-verified border border-verified rounded px-1.5 py-0.5">
          ✓ AUTH
        </span>
      </div>
      <div className="p-3 space-y-1">
        <p className="text-[12px] font-body font-semibold text-foreground leading-tight line-clamp-2">{name}</p>
        <p className="font-display text-primary text-lg tracking-wider">{price}</p>
        <div className="flex items-center gap-1.5 text-[10px] font-body text-soft">
          <span className="w-1.5 h-1.5 rounded-full bg-verified inline-block" />
          <span>{tier}</span>
          <span>·</span>
          <span>{condition}</span>
        </div>
      </div>
    </button>
  );
};

export default ListingCard;
