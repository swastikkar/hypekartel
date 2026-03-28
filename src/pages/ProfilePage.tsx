import PhoneFrame from "@/components/PhoneFrame";
import TagChip from "@/components/TagChip";
import SectionHeader from "@/components/SectionHeader";

const badges = [
  { label: "✅ Verified Collector", earned: true },
  { label: "🥇 Gold Seller", earned: true },
  { label: "⚡ Early Drop Access", earned: true },
  { label: "🏆 Milestone ×50", earned: true },
  { label: "🔵 Platinum (locked)", earned: false },
];

const leaderboard = [
  { rank: "🥇", name: "CDC_Mumbai", sales: 12, rating: "5.0", you: false },
  { rank: "🥈", name: "KickFlip_Delhi", sales: 9, rating: "4.9", you: false },
  { rank: "🥉", name: "You (Agastya) 👈", sales: 7, rating: "4.9", you: true },
];

const ProfilePage = () => {
  return (
    <PhoneFrame activeNav="profile">
      <div className="space-y-3 animate-fade-in">
        {/* Profile Hero */}
        <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/25 rounded-xl p-5 text-center space-y-2">
          <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-2xl font-display text-primary-foreground relative">
            A
            <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-verified flex items-center justify-center text-[8px] text-primary-foreground">✓</div>
          </div>
          <h2 className="font-display text-xl text-foreground tracking-wider">AGASTYA PATIL</h2>
          <p className="text-[10px] font-body text-primary">🛂 HYPE PASSPORT · #HK-88421</p>
          <div className="flex items-center justify-center gap-1">
            <span className="text-[10px] font-display text-muted-foreground tracking-wider">HYPE SCORE</span>
            <span className="font-display text-primary text-2xl">940</span>
            <span className="text-[10px] font-body text-muted-foreground">/ 1000</span>
          </div>
          <TagChip label="🥇 GOLD SELLER" variant="gold" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {[["47", "Transactions"], ["4.9⭐", "Rating"], ["1,240", "Rep Points"]].map(([n, l]) => (
            <div key={l} className="bg-card border border-border rounded-xl p-3 text-center">
              <p className="font-display text-primary text-lg">{n}</p>
              <p className="text-[9px] font-display text-muted-foreground tracking-wider">{l}</p>
            </div>
          ))}
        </div>

        {/* Platinum Progress */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[11px] font-body text-foreground">Progress to Platinum</span>
            <span className="text-[11px] font-body text-primary font-semibold">3 sales away</span>
          </div>
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <div className="h-full w-[94%] bg-gradient-to-r from-primary to-primary/70 rounded-full" />
          </div>
        </div>

        {/* Badges */}
        <SectionHeader title="BADGES EARNED" />
        <div className="flex flex-wrap gap-2">
          {badges.map((b) => (
            <TagChip key={b.label} label={b.label} variant={b.earned ? "gold" : "grey"} />
          ))}
        </div>

        {/* Leaderboard */}
        <SectionHeader title="THIS WEEK'S TOP SELLERS" />
        <div className="space-y-2">
          {leaderboard.map((l) => (
            <div
              key={l.name}
              className={`flex items-center justify-between p-3 rounded-xl border ${
                l.you ? "bg-primary/10 border-primary/30" : "bg-card border-border"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{l.rank}</span>
                <span className="text-[12px] font-body font-semibold text-foreground">{l.name}</span>
              </div>
              <span className="text-[10px] font-body text-soft">{l.sales} sales · ⭐{l.rating}</span>
            </div>
          ))}
        </div>

        {/* Communities */}
        <SectionHeader title="MY COMMUNITIES" />
        <div className="bg-card border border-border rounded-xl divide-y divide-border mb-4">
          {[
            { icon: "💬", name: "Mumbai Sneakerheads", platform: "Discord", members: "4,200" },
            { icon: "📱", name: "HypeKartel India", platform: "Telegram", members: "3,200" },
          ].map((c) => (
            <div key={c.name} className="flex items-center justify-between p-3">
              <div className="flex items-center gap-2">
                <span>{c.icon}</span>
                <div>
                  <p className="text-[12px] font-body font-semibold text-foreground">{c.name}</p>
                  <p className="text-[10px] font-body text-soft">{c.platform} · {c.members} members</p>
                </div>
              </div>
              <span className="text-primary text-[11px] font-body font-semibold">Joined</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
};

export default ProfilePage;
