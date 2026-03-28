interface TagChipProps {
  label: string;
  variant?: "green" | "orange" | "gold" | "blue" | "grey";
}

const styles = {
  green: "border-verified text-verified",
  orange: "border-primary text-primary",
  gold: "border-gold text-gold",
  blue: "border-escrow text-escrow",
  grey: "border-muted-foreground text-muted-foreground",
};

const TagChip = ({ label, variant = "green" }: TagChipProps) => (
  <span className={`inline-block text-[10px] font-body font-semibold border rounded-pill px-2 py-0.5 ${styles[variant]}`}>
    {label}
  </span>
);

export default TagChip;
