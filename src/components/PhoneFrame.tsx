import { ReactNode } from "react";
import BottomNav from "./BottomNav";

interface PhoneFrameProps {
  children: ReactNode;
  activeNav?: string;
}

const PhoneFrame = ({ children, activeNav = "home" }: PhoneFrameProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-primary-foreground">
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
        <div className="flex-1 overflow-y-auto px-4 pb-24">
          {children}
        </div>
        {/* Bottom Nav */}
        <BottomNav active={activeNav} />
      </div>
    </div>
  );
};

export default PhoneFrame;
