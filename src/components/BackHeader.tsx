import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackHeader = ({ label, backTo }: { label: string; backTo?: string }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-3 py-3">
      <button onClick={() => (backTo ? navigate(backTo) : navigate(-1))} className="text-foreground">
        <ArrowLeft size={20} />
      </button>
      <span className="font-display text-sm tracking-[0.15em] text-muted-foreground">{label}</span>
    </div>
  );
};

export default BackHeader;
