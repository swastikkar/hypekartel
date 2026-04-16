import { useNavigate } from "react-router-dom";
import { Home, Camera, PlusCircle, Package, User } from "lucide-react";

const items = [
  { id: "home", label: "Home", icon: Home, path: "/home" },
  { id: "scan", label: "Scan", icon: Camera, path: "/scan" },
  { id: "sell", label: "Sell", icon: PlusCircle, path: "/sell" },
  { id: "orders", label: "Orders", icon: Package, path: "/orders" },
  { id: "profile", label: "Profile", icon: User, path: "/profile" },
];

const BottomNav = ({ active }: { active: string }) => {
  const navigate = useNavigate();

  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-xl border-t border-border flex items-center justify-around px-2">
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 py-2 px-3 transition-colors ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <item.icon size={22} />
            <span className="text-[10px] font-body font-medium">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
