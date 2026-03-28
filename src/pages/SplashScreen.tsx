import { useNavigate } from "react-router-dom";
import { Zap } from "lucide-react";
import onboardingHero from "@/assets/onboarding-hero.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4"
      style={{
        backgroundColor: "hsl(0 0% 0%)",
        backgroundImage: [
          "radial-gradient(ellipse at 20% 50%, hsl(21 100% 50% / 0.07) 0%, transparent 50%)",
          "radial-gradient(ellipse at 80% 20%, hsl(258 90% 66% / 0.06) 0%, transparent 50%)",
          "linear-gradient(60deg, rgba(255,255,255,0.045) 25%, transparent 25.5%, transparent 50%, rgba(255,255,255,0.045) 50%, rgba(255,255,255,0.045) 75%, transparent 75.5%, transparent)",
          "linear-gradient(120deg, rgba(255,255,255,0.045) 25%, transparent 25.5%, transparent 50%, rgba(255,255,255,0.045) 50%, rgba(255,255,255,0.045) 75%, transparent 75.5%, transparent)",
        ].join(", "),
        backgroundSize: "100% 100%, 100% 100%, 48px 84px, 48px 84px",
      }}
    >
      <div
        className="relative w-[375px] h-[812px] bg-background rounded-[40px] border-2 border-border overflow-hidden shadow-2xl flex flex-col cursor-pointer"
        onClick={() => navigate("/signup")}
      >
        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-between px-8 pt-16 pb-10">
          {/* Top: Brand name */}
          <h1 className="text-5xl text-primary tracking-widest">HypeKartel</h1>

          {/* Center: Hero illustration */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={onboardingHero}
              alt="Streetwear enthusiast"
              width={300}
              height={300}
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* Bottom: Tagline */}
          <div className="text-center space-y-2 mb-8">
            <p className="text-foreground font-display text-2xl tracking-wider">
              Early drops. Cop faster.
            </p>
            <p className="text-muted-foreground font-body text-sm mb-6">
              Dark-themed resale app — verified sellers,
              <br />
              escrow payments, AR authentication.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/signup");
              }}
              className="bg-primary text-primary-foreground font-display text-xl tracking-widest px-10 py-3 rounded-pill hover:opacity-90 transition-opacity"
            >
              Join the Movement
            </button>
          </div>

          {/* Lightning icon */}
          <Zap className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
