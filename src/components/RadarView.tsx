import React, { useState, useEffect } from 'react';
import { Timer, Compass, ShieldAlert, ArrowRight } from 'lucide-react';
import { ActiveScreen } from '../types';

interface RadarProps {
  onNavigate: (screen: ActiveScreen) => void;
}

export default function RadarView({ onNavigate }: RadarProps) {
  const [pkValue, setPkValue] = useState(8.4);
  const [minutesLeft, setMinutesLeft] = useState(4);
  const [secondsLeft, setSecondsLeft] = useState(59);

  // Randomize the PK value slightly to make the HUD feel alive
  useEffect(() => {
    const timer = setInterval(() => {
      setPkValue(v => {
        const diff = (Math.random() - 0.5) * 0.8;
        return parseFloat((8.4 + diff).toFixed(1));
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Countdown timer simulation
  useEffect(() => {
    const countdown = setInterval(() => {
      setSecondsLeft(sec => {
        if (sec > 0) return sec - 1;
        setMinutesLeft(min => {
          if (min > 0) {
            return min - 1;
          }
          clearInterval(countdown);
          return 0;
        });
        return 59;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 animate-fade-in flex flex-col items-center justify-center relative">
      
      {/* Absolute background coordinate references */}
      <div className="absolute top-4 left-4 font-mono text-[9px] text-[#32ff00]/40 uppercase select-none leading-relaxed">
        Sys: Active Tracking <br /> Mode: Co-Op scan
      </div>

      {/* Active search tag status chip layout 7 */}
      <div className="bg-surface-container border border-outline-variant/60 rounded overflow-hidden shadow-2xl relative mb-6 select-none shrink-0">
        {/* Left red strip */}
        <div className="w-2 h-full absolute left-0 top-0 hazard-stripes"></div>
        <div className="pl-5 pr-4 py-1.5 flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#32ff00] ecto-glow-green animate-pulse"></span>
          <span className="font-sans text-[10px] font-extrabold uppercase tracking-widest text-[#e5e2e1]">
            АКТИВНЫЙ ПОИСК
          </span>
        </div>
      </div>

      {/* The circular Radar widget! */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border border-[#32ff00]/25 shadow-[inset_0_0_50px_rgba(50,255,0,0.06)] flex items-center justify-center my-6 relative select-none shrink-0 z-10 glass-panel">
        
        {/* Concentric helper rings inside */}
        <div className="absolute w-[75%] h-[75%] rounded-full border border-[#32ff00]/10" />
        <div className="absolute w-[50%] h-[50%] rounded-full border border-[#32ff00]/15" />
        <div className="absolute w-[25%] h-[25%] rounded-full border border-[#32ff00]/20" />

        {/* Crosshair grid lines */}
        <div className="absolute w-full h-[1px] bg-[#32ff00]/20" />
        <div className="absolute h-full w-[1px] bg-[#32ff00]/20" />

        {/* Center operational headquarters node */}
        <div className="absolute w-2.5 h-2.5 rounded-full bg-[#32ff00] ecto-glow-green z-20"></div>

        {/* Rotating sweep */}
        <div className="absolute w-full h-full rounded-full radar-sweep pointer-events-none mix-blend-screen opacity-70"></div>

        {/* Dynamic target blip 1 (Bright) */}
        <div className="absolute top-[28%] left-[64%] w-3 h-3 z-20">
          <div className="w-full h-full bg-[#32ff00] rounded-full ecto-glow-green"></div>
          <div className="absolute -inset-2 rounded-full border border-[#32ff00]/60 animate-ping"></div>
        </div>

        {/* Dynamic target blip 2 (Fainter) */}
        <div className="absolute bottom-[32%] left-[28%] w-2 h-2 z-20 opacity-60">
          <div className="w-full h-full bg-[#32ff00] rounded-full ecto-glow-green"></div>
          <div className="absolute -inset-2 rounded-full border border-[#32ff00]/30 animate-ping animate-delay-1000"></div>
        </div>

        {/* Geographic coordinate texts */}
        <div className="absolute top-6 right-6 font-mono text-[9px] text-[#32ff00]/60 tracking-tighter text-right">
          N 55°45'20" <br /> E 37°37'03"
        </div>

        <div className="absolute bottom-6 left-6 font-mono text-[9px] text-[#32ff00]/60 tracking-tighter">
          FREQ: 144.02 MHz <br /> PK: <span className="font-extrabold text-[#32ff00]">{pkValue}</span>
        </div>
      </div>

      {/* Text scanning details & ETA box */}
      <div className="text-center w-full max-w-sm px-4 flex flex-col gap-4 relative z-20">
        <h2 className="font-sans text-sm md:text-base font-extrabold text-[#32ff00] uppercase tracking-wide animate-pulse">
          Сканирование психокинетической энергии...
        </h2>

        {/* ETA informational message */}
        <div className="bg-surface-container/70 border border-outline-variant/60 rounded-xl p-4 shadow-xl">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Timer className="w-4 h-4 text-[#fe6b00]" />
            <p className="font-sans text-xs md:text-sm text-[#e5e2e1] font-black uppercase tracking-wider">
              Группа прибудет через {minutesLeft}:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
            </p>
          </div>
          <p className="font-sans text-[9px] font-extrabold text-on-surface-variant uppercase tracking-widest mt-2 block">
            Держитесь подальше от эктоплазмы
          </p>
        </div>

        {/* Link to trigger receipt view simulation */}
        <button
          onClick={() => onNavigate(ActiveScreen.RECEIPT)}
          className="mt-2 bg-transparent hover:bg-white/5 border border-outline-variant hover:border-[#32ff00]/50 text-[10px] font-extrabold uppercase tracking-widest text-[#baccaf] hover:text-[#32ff00] py-3 rounded-lg flex items-center justify-center gap-1 cursor-pointer transition-all"
        >
          <span>Завершить и выписать счет</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
