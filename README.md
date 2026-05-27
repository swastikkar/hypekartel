# HypeKartel

> **The trust layer for India's sneaker & streetwear resale market.**
> Authenticate. Trade. Flex — without the fakes.

HypeKartel is a mobile-first prototype that reimagines sneaker resale around a single idea: **no anonymous sellers, no fake pairs, no opaque prices.** Every listing is verified through a 5-layer authentication stack, every seller is biometrically identified, and every buyer sees real-time, crowd-sourced fair pricing pulled from StockX, GOAT and HypeKartel's own sales history.

Built as a high-fidelity interactive prototype for competition / pitch use.

---

## ✨ Key Features

- **📷 HypeKartel Scan** — "Shazam for sneakers." Point your camera at any pair and instantly get retail price, current resale range, demand heat, and last sold price.
- **🛡️ 5-Layer Authentication** — AI vision + human experts + brand API + community review + biometric seller ID. Each item ships with a tamper-proof Auth Certificate.
- **📜 Provenance Trail** — Original receipts, box photos, and previous-owner history attached to every listing.
- **👥 Crowd Fair Price** — Live price intel from StockX, GOAT, and HK's own marketplace so buyers never overpay.
- **🔏 Biometric Seller ID** — Face ID verification before any listing goes live. Zero anonymous sellers.
- **🔒 Escrow Checkout** — Funds held until the buyer confirms authenticity on delivery.
- **🏆 Hype Score** — Reputation system (0–1000) that gates seller tiers (Bronze → Gold → Platinum).
- **👟 AR Try-On** — Visualize the pair on your foot before you buy.

---

## 🧱 Tech Stack

- **Framework:** React 18 + Vite 5 + TypeScript 5
- **Styling:** Tailwind CSS v3 with a fully tokenized design system (HSL semantic tokens)
- **UI Primitives:** shadcn/ui + Radix
- **Routing:** React Router v6
- **State / Data:** TanStack Query
- **Icons:** lucide-react
- **Tooling:** ESLint, Vitest, Playwright

---

## 📱 App Flow

```
Splash  →  Signup (Face ID + Aadhaar)  →  Home
                                           ├─→  Scan         (AR identifier)
                                           ├─→  Item Detail  →  Auth Cert  →  Checkout  →  Orders
                                           ├─→  Sell         (Biometric seller ID)
                                           └─→  Profile      (Hype Score, listings, sales)
```

| Route | Screen |
|-------|--------|
| `/` `/splash` | Splash screen |
| `/signup` | Onboarding + biometric KYC |
| `/home` | Marketplace feed |
| `/scan` | AR product scanner |
| `/item` | Product detail + provenance |
| `/auth-cert` | 5-layer authentication certificate |
| `/checkout` | Escrow checkout |
| `/orders` | Order tracking |
| `/sell` | Create a new listing |
| `/profile` | Seller profile + Hype Score |

---

## 💰 Revenue Model

1. **8% transaction commission** on every successful sale
2. **Tiered authentication fees** — ₹299 (standard) → ₹999 (premium)
3. **Buyer protection insurance** — optional add-on at checkout
4. **Escrow float interest** on held funds
5. **Premium seller subscriptions** — ₹999 / ₹2,999 tiers (lower fees, priority auth)
6. **Brand partnerships** — verified drops & limited releases

Target blended take rate: **~12%**. Target LTV:CAC: **20:1**.

---

## 🚀 Getting Started

```bash
# 1. Install deps
bun install        # or: npm install

# 2. Run dev server
bun run dev        # or: npm run dev

# 3. Open the app
# → http://localhost:8080
```

### Other scripts

```bash
bun run build       # production build
bun run preview     # preview the production build
bun run lint        # eslint
bunx vitest run     # unit tests
```

---

## 📂 Project Structure

```
src/
├── components/      # Reusable UI (PhoneFrame, StripCard, TagChip, BottomNav…)
│   └── ui/          # shadcn primitives
├── pages/           # One file per route (HomePage, SellPage, ItemDetail…)
├── hooks/           # Custom hooks (use-toast, use-mobile)
├── lib/             # utils
├── index.css        # Design tokens (HSL variables)
└── App.tsx          # Router
```

All colors, radii, and animations live as semantic tokens in `src/index.css` and `tailwind.config.ts`. Components never hardcode colors — they consume tokens like `bg-primary`, `text-verified`, `border-purple`.

---

## 🎨 Design System

- **Display font:** Bebas Neue (wide tracking, all-caps headings)
- **Body font:** DM Sans
- **Palette:** Dark surface with HypeKartel orange primary + semantic accents (`verified` green, `escrow` blue, `gold`, `purple`, `danger`)
- **Mobile-first:** Designed inside a 375×812 phone frame for pitch demos and judges' screens

---

## 🛣️ Roadmap

- [ ] Real backend (Lovable Cloud) — auth, listings, orders, payments
- [ ] Live integrations with StockX & GOAT price feeds
- [ ] On-chain provenance via NFT receipts
- [ ] In-app chat between buyer & seller
- [ ] Drops calendar + raffle entries
- [ ] iOS / Android wrapper (Capacitor)

---

## 📝 License

This project is a prototype built for demo and competition purposes. All product names, logos, and brands referenced (Nike, Air Jordan, StockX, GOAT, etc.) are property of their respective owners and used here for illustrative purposes only.

---

## 🙌 Built With

Crafted with [Lovable](https://lovable.dev). Live demo: https://hypekartel.lovable.app
