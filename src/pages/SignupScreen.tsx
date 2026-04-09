import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import signupLogo from "@/assets/signup-logo.webp";

const SignupScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

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
      <div className="relative w-[375px] h-[812px] bg-background rounded-[40px] border-2 border-border overflow-hidden shadow-2xl flex flex-col">
        <div className="flex-1 flex flex-col items-center px-8 pt-16">
          {/* Logo */}
          <img
            src={signupLogo}
            alt="HypeKartel logo"
            width={120}
            height={120}
            className="mb-6 object-fill"
          />

          {/* Title */}
          <h1 className="text-4xl text-foreground tracking-widest mb-2">
            HypeKartel
          </h1>
          <p className="text-muted-foreground font-body text-sm mb-10">
            Create your HypeKartel account
          </p>

          {/* Form */}
          <form onSubmit={handleJoin} className="w-full space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-body font-semibold text-foreground">
                Email address <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="you@domain.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-secondary text-foreground font-body text-sm rounded-btn px-4 py-3.5 pr-10 outline-none border border-border focus:border-primary transition-colors placeholder:text-muted-foreground"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-body font-semibold text-foreground">
                Password <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-secondary text-foreground font-body text-sm rounded-btn px-4 py-3.5 pr-10 outline-none border border-border focus:border-primary transition-colors placeholder:text-muted-foreground"
                />
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* Join Button */}
            <button
              type="submit"
              className="w-full bg-destructive text-destructive-foreground font-display text-xl tracking-widest py-3.5 rounded-pill hover:opacity-90 transition-opacity mt-4"
            >
              Join
            </button>
          </form>

          {/* Login link */}
          <p className="text-muted-foreground font-body text-sm mt-8">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/splash")}
              className="text-foreground font-semibold underline underline-offset-2"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
