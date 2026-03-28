interface SectionHeaderProps {
  title: string;
  action?: string;
  onAction?: () => void;
}

const SectionHeader = ({ title, action, onAction }: SectionHeaderProps) => (
  <div className="flex items-center justify-between py-3">
    <h3 className="font-display text-muted-foreground text-sm tracking-[0.15em]">{title}</h3>
    {action && (
      <button onClick={onAction} className="text-primary text-[11px] font-body font-semibold">
        {action}
      </button>
    )}
  </div>
);

export default SectionHeader;
