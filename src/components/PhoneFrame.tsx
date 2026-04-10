import { ReactNode } from "react";
import BottomNav from "./BottomNav";
import AnimatedBackground from "./AnimatedBackground";

interface PhoneFrameProps {
  children: ReactNode;
  activeNav?: string;
}

const PhoneFrame = ({ children, activeNav = "home" }: PhoneFrameProps) => {
  return (
    <div
      className="flex items-center justify-center min-h-screen p-4"
      style={{
        backgroundColor: 'hsl(0 0% 0%)',
        backgroundImage: [
          'radial-gradient(ellipse at 20% 50%, hsl(21 100% 50% / 0.07) 0%, transparent 50%)',
          'radial-gradient(ellipse at 80% 20%, hsl(258 90% 66% / 0.06) 0%, transparent 50%)',
          'radial-gradient(ellipse at 60% 80%, hsl(217 91% 60% / 0.06) 0%, transparent 50%)',
          'linear-gradient(60deg, rgba(255,255,255,0.045) 25%, transparent 25.5%, transparent 50%, rgba(255,255,255,0.045) 50%, rgba(255,255,255,0.045) 75%, transparent 75.5%, transparent)',
          'linear-gradient(120deg, rgba(255,255,255,0.045) 25%, transparent 25.5%, transparent 50%, rgba(255,255,255,0.045) 50%, rgba(255,255,255,0.045) 75%, transparent 75.5%, transparent)',
        ].join(', '),
        backgroundSize: '100% 100%, 100% 100%, 100% 100%, 48px 84px, 48px 84px',
      }}
    >
      <div className="relative w-[375px] h-[812px] bg-background rounded-[40px] border-2 border-border overflow-hidden shadow-2xl flex flex-col">
        {/* Dynamic Island */}
        <div className="flex justify-center pt-2">
          <div className="w-[120px] h-[34px] bg-black rounded-full" />
        </div>
        {/* Status Bar */}
        <div className="flex items-center justify-between px-6 py-1 text-[11px] font-body text-foreground">
          <span className="font-semibold">9:41</span>
          <div className="flex items-center gap-1">
            <span>●●●●</span>
            <span>WiFi</span>
            <span>🔋</span>
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 pb-24 no-scrollbar">
          {children}
        </div>
        {/* Bottom Nav */}
        <BottomNav active={activeNav} />
      </div>
    </div>
  );
};

export default PhoneFrame;
