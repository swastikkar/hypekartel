import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4" style={{ backgroundColor: "hsl(0 0% 0%)" }}>
      <div className="relative w-[375px] h-[812px] bg-background rounded-[40px] border-2 border-border overflow-hidden shadow-2xl flex flex-col">
        <div className="flex-1 flex flex-col items-center px-7 pt-16 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,92,0,0.1) 0%, transparent 65%)" }} />

          {/* Logo orb */}
          <div className="relative w-20 h-20 mb-5 z-10">
            <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 40% 40%, rgba(255,92,0,0.5), rgba(0,0,0,0.8))", border: "1px solid rgba(255,92,0,0.3)" }} />
            <div className="absolute top-2 right-1 w-[22px] h-[22px] rounded-full bg-primary opacity-90" />
            <div className="absolute top-3.5 right-[22px] w-3.5 h-3.5 rounded-full opacity-80" style={{ background: "#ff8c42" }} />
            <div className="absolute bottom-2.5 left-2 w-[18px] h-[18px] rounded-full border border-primary opacity-90" style={{ background: "#333" }} />
            <div className="absolute bottom-1 right-2.5 w-2.5 h-2.5 rounded-full bg-primary opacity-60" />
            <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-foreground opacity-90 flex items-center justify-center text-sm">⚡</div>
          </div>

          {/* Title */}
          <h1 className="text-[32px] tracking-[3px] text-foreground mb-1.5 z-10">HYPEKARTEL</h1>
          <p className="text-[13px] text-muted-foreground font-body mb-8 z-10">Create your HypeKartel account</p>

          {/* Form */}
          <form onSubmit={handleJoin} className="w-full z-10">
            {/* Email */}
            <label className="text-xs font-semibold text-foreground/80 mb-1.5 block">
              Email address <span className="text-primary">*</span>
            </label>
            <div className="relative mb-[18px]">
              <input
                type="email"
                placeholder="you@domain.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1a1a1a] text-foreground font-body text-[13px] rounded-xl px-4 py-3.5 pr-11 outline-none border-[1.5px] border-border focus:border-primary transition-colors placeholder:text-muted-foreground"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-base text-muted-foreground">✉️</span>
            </div>

            {/* Password */}
            <label className="text-xs font-semibold text-foreground/80 mb-1.5 block">
              Password <span className="text-primary">*</span>
            </label>
            <div className="relative mb-7">
              <input
                type="password"
                placeholder="Enter a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#1a1a1a] text-foreground font-body text-[13px] rounded-xl px-4 py-3.5 pr-11 outline-none border-[1.5px] border-border focus:border-primary transition-colors placeholder:text-muted-foreground"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-base text-muted-foreground">🔒</span>
            </div>

            {/* Join Button */}
            <button
              type="submit"
              className="w-full text-foreground font-bold text-base py-4 rounded-[14px] hover:opacity-90 transition-opacity tracking-wide mb-5"
              style={{ background: "#e0000a", boxShadow: "0 4px 24px rgba(224,0,10,0.3)" }}
            >
              Join
            </button>
          </form>

          {/* Login link */}
          <p className="text-[13px] text-muted-foreground z-10">
            Already have an account?{" "}
            <button onClick={() => navigate("/home")} className="text-foreground font-semibold">
              Log in
            </button>
          </p>

          {/* Terms */}
          <p className="absolute bottom-5 left-0 right-0 text-center text-[9px] text-muted-foreground px-7">
            By joining you agree to HypeKartel's Terms of Service & Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
