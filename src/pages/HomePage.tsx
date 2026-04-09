import PhoneFrame from "@/components/PhoneFrame";
import ListingCard from "@/components/ListingCard";
import SectionHeader from "@/components/SectionHeader";

import { Bell, User } from "lucide-react";
import { useState, useEffect } from "react";

const categories = ["All", "Sneakers", "Streetwear", "Watches", "Tickets", "📍 Near Me"];

const listings = [
  { name: "Air Jordan 1 Retro High OG Chicago", price: "₹24,000", tier: "Gold Seller", condition: "DS", emoji: "👟" },
  { name: "Nike Dunk Low Panda", price: "₹14,400", tier: "Verified", condition: "VNDS", emoji: "👟" },
  { name: "Yeezy 350 V2 Zebra", price: "₹18,500", tier: "Gold Seller", condition: "DS", emoji: "👟" },
  { name: "New Balance 550 White Green", price: "₹12,200", tier: "Verified", condition: "8/10", emoji: "👟" },
];

const HomePage = () => {
  const [activeCat, setActiveCat] = useState("All");

  return (
    <PhoneFrame activeNav="home">
      <div className="space-y-3 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between py-2">
          <h1 className="font-display text-xl tracking-[0.2em] text-foreground">HYPEKARTEL</h1>
          <div className="flex items-center gap-3">
            <Bell size={20} className="text-muted-foreground" />
            <User size={20} className="text-muted-foreground" />
          </div>
        </div>


        {/* Early Drop */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-3 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-body font-semibold text-primary">⚡ EARLY DROP — Gold Members Only</p>
            <p className="text-[11px] font-body text-foreground mt-0.5">Jordan 4 Military Black · 50 pairs</p>
          </div>
          <span className="font-display text-primary text-2xl">23:41</span>
        </div>

        {/* Search */}
        <div className="bg-card border border-border rounded-full px-4 py-3 flex items-center gap-2">
          <span className="text-muted-foreground text-sm">🔍</span>
          <span className="text-[12px] font-body text-muted-foreground">Search or scan a sneaker...</span>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`shrink-0 text-[11px] font-body font-medium px-3 py-1.5 rounded-pill border transition-colors ${
                activeCat === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>


        {/* Trending Grid */}
        <SectionHeader title="TRENDING NOW" action="See All →" />
        <div className="grid grid-cols-2 gap-3">
          {listings.map((item, i) => (
            <ListingCard key={i} {...item} />
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
};

export default HomePage;
