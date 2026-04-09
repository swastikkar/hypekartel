import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen p-4" style={{ backgroundColor: "hsl(0 0% 0%)" }}>
      <div className="relative w-[375px] h-[812px] bg-background rounded-[40px] border-2 border-border overflow-hidden shadow-2xl flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-between px-8 pt-16 pb-12 relative overflow-hidden">
          {/* Background glows */}
          <div className="absolute -top-[60px] left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,92,0,0.12) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 -right-10 w-[200px] h-[200px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,92,0,0.07) 0%, transparent 70%)" }} />

          {/* Wordmark */}
          <h1 className="text-4xl tracking-[5px] text-foreground z-10">
            HYPE<span className="text-primary">KARTEL</span>
          </h1>

          {/* SVG Illustration */}
          <div className="z-10">
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="110" cy="195" rx="55" ry="8" fill="rgba(255,92,0,0.15)" />
              <rect x="72" y="120" width="76" height="58" rx="14" fill="#1a1a1a" stroke="#333" strokeWidth="1.5" />
              <rect x="50" y="105" width="36" height="50" rx="10" fill="hsl(var(--primary))" opacity="0.9" />
              <rect x="56" y="118" width="24" height="20" rx="6" fill="#cc4900" />
              <rect x="118" y="130" width="38" height="6" rx="3" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
              <rect x="148" y="118" width="22" height="36" rx="5" fill="#222" stroke="#444" strokeWidth="1.5" />
              <rect x="151" y="121" width="16" height="26" rx="3" fill="#0a0a0a" />
              <rect x="153" y="123" width="12" height="18" rx="2" fill="#1a1a1a" />
              <rect x="153" y="123" width="12" height="18" rx="2" fill="url(#phoneGlow)" opacity="0.6" />
              <circle cx="100" cy="98" r="22" fill="#f5d5b0" />
              <path d="M78 96 Q100 72 122 96" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
              <rect x="75" y="93" width="50" height="7" rx="3.5" fill="#111" stroke="#333" strokeWidth="1" />
              <rect x="73" y="96" width="18" height="5" rx="2.5" fill="#0a0a0a" />
              <rect x="112" y="68" width="50" height="28" rx="8" fill="white" opacity="0.95" />
              <polygon points="118,96 125,96 121,104" fill="white" opacity="0.95" />
              <circle cx="127" cy="82" r="3" fill="#333" />
              <circle cx="137" cy="82" r="3" fill="#333" />
              <circle cx="147" cy="82" r="3" fill="#333" />
              <rect x="76" y="170" width="32" height="12" rx="6" fill="#222" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <rect x="112" y="170" width="32" height="12" rx="6" fill="#222" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <rect x="78" y="178" width="28" height="3" rx="1.5" fill="hsl(var(--primary))" opacity="0.7" />
              <rect x="114" y="178" width="28" height="3" rx="1.5" fill="hsl(var(--primary))" opacity="0.7" />
              <defs>
                <linearGradient id="phoneGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--escrow))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Bottom section */}
          <div className="text-center z-10">
            <p className="text-xl font-bold text-foreground tracking-wide mb-2">
              Early drops. Cop faster.
            </p>
            <p className="text-[13px] text-muted-foreground leading-relaxed mb-8">
              Dark-themed resale app — verified sellers,<br />escrow protection, zero fakes.
            </p>
            <button
              onClick={() => navigate("/signup")}
              className="w-full bg-primary text-primary-foreground font-bold text-[15px] py-4 rounded-[14px] hover:opacity-90 transition-opacity tracking-wide mb-3.5"
            >
              Get Started
            </button>
            <p className="text-[13px] text-muted-foreground">
              Already have an account?{" "}
              <button onClick={() => navigate("/signup")} className="text-primary font-semibold">
                Log In
              </button>
            </p>
          </div>

          {/* Bottom bolt */}
          <span className="absolute bottom-5 right-5 text-[22px] text-primary opacity-40">⚡</span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
