import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Star, Shield, Trophy } from 'lucide-react';
import { ActiveScreen } from '../types';
import ghostLogo from '../assets/images/regenerated_image_1779219484919.png';

interface DashboardProps {
  onNavigate: (screen: ActiveScreen) => void;
  caughtCount: number;
}

export default function Dashboard({ onNavigate, caughtCount }: DashboardProps) {
  const quotaMax = 50;
  const progressPercent = Math.min((caughtCount / quotaMax) * 100, 100);

  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto px-1 animate-fade-in">
      {/* Top Banner Alert & Logo Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* City Status Card */}
        <div className="md:col-span-8 bg-surface-container rounded-xl p-6 border border-red-900/45 relative overflow-hidden flex flex-col justify-between min-h-[250px] shadow-[0_4px_24px_rgba(0,0,0,0.55)]">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col items-start gap-4 h-full justify-between">
            <div className="flex items-center gap-2 bg-surface-container-highest px-3 py-1 rounded-md border border-outline-variant">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span className="font-sans text-[11px] font-extrabold text-red-400 tracking-wider">СТАТУС ГОРОДА</span>
            </div>

            <div className="mt-8">
              <h2 className="font-sans text-3xl md:text-5xl font-black text-red-500 mb-3 tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                КРИТИЧЕСКАЯ АКТИВНОСТЬ
              </h2>
              <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-xl leading-relaxed">
                Множественные прорывы зафиксированы в секторах 4, 7 и 12. Рекомендуется повышенная готовность. Все оперативные группы переведены на чрезвычайный режим работы.
              </p>
            </div>
          </div>
        </div>

        {/* Logo / Brand Card */}
        <div className="md:col-span-4 bg-surface-container-low rounded-xl border border-outline-variant/40 flex flex-col items-center justify-center p-6 min-h-[250px] relative overflow-hidden group hover:border-[#32ff00]/40 transition-colors duration-300">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(50,255,0,0.02)_100%)]"></div>
          <img 
            id="dashboard-ghost-logo"
            alt="GHOSTFIGHTERS Logo" 
            className="max-w-[140px] h-auto object-contain opacity-90 drop-shadow-[0_0_15px_rgba(50,255,0,0.5)] transition-transform duration-500 group-hover:scale-105 animate-spiral-bob" 
            src={ghostLogo}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 scanline-overlay pointer-events-none opacity-20"></div>
          <p className="font-sans text-[10px] font-extrabold tracking-widest text-[#baccaf] mt-4 uppercase text-center block opacity-60">
            ОФИЦИАЛЬНЫЙ ТЕРМИНАЛ HQ
          </p>
        </div>
      </section>

      {/* Flashing Call Now CTA Section */}
      <section className="w-full">
        <motion.button 
          onClick={() => onNavigate(ActiveScreen.TAXES)}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full cursor-pointer bg-gradient-to-r from-[#32ff00] to-[#2ce500] text-[#053900] font-sans text-xl md:text-3xl font-black py-7 md:py-9 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 border-2 border-primary-fixed-dim/60 shadow-[0_0_25px_rgba(50,255,0,0.35)]"
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 animate-bounce" />
            <span className="tracking-tighter">ВЫЗВАТЬ СЕЙЧАС</span>
          </div>
          <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-[#053900] opacity-40"></span>
          <span className="text-xs md:text-sm font-extrabold tracking-widest uppercase bg-[#053900]/10 px-4 py-1 rounded-full border border-[#053900]/20">
            ПРИБЫТИЕ ДО 15 МИНУТ
          </span>
        </motion.button>
      </section>

      {/* Stats Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ghosts Caught Widget */}
        <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/50 flex flex-col justify-between relative overflow-hidden shadow-lg group hover:border-[#32ff00]/20 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full blur-3xl"></div>
          
          <div>
            <div className="flex items-center gap-2.5 text-on-surface-variant font-sans text-xs font-extrabold uppercase tracking-wide">
              <Trophy className="w-4.5 h-4.5 text-[#32ff00]" />
              <span>ПРИЗРАКОВ ПОЙМАНО СЕГОДНЯ</span>
            </div>
            
            <div className="font-sans text-5xl md:text-6xl font-black text-primary-fixed-dim/90 mt-4 tracking-tighter ecto-glow-green">
              {caughtCount}
              <span className="font-sans text-sm font-normal text-on-surface-variant ml-3">/ {quotaMax} квота</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="w-full h-3 bg-[#1c1b1b] rounded-full overflow-hidden border border-outline-variant/60 relative">
              <div 
                className="h-full bg-gradient-to-r from-[#2ce500] to-[#32ff00] transition-all duration-700 relative"
                style={{ width: `${progressPercent}%` }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>
            <div className="flex justify-between text-[11px] text-on-surface-variant uppercase font-extrabold mt-2 tracking-wider">
              <span>Лимит сектора</span>
              <span className="text-[#32ff00]">{Math.floor(progressPercent)}% выполнено</span>
            </div>
          </div>
        </div>

        {/* Radar Coverage Widget */}
        <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/50 flex flex-col justify-between relative overflow-hidden shadow-lg group hover:border-orange-500/20 transition-all">
          <div>
            <div className="flex items-center gap-2.5 text-on-surface-variant font-sans text-xs font-extrabold uppercase tracking-wide">
              <Star className="w-4.5 h-4.5 text-[#fe6b00]" />
              <span>ПОКРЫТИЕ РАДАРА</span>
            </div>
            
            <div className="font-sans text-5xl md:text-6xl font-black text-on-surface mt-4 tracking-tight flex items-baseline gap-2">
              87%
              <span className="font-sans text-xs font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-900/50 uppercase tracking-widest">
                Оптимально
              </span>
            </div>
          </div>

          {/* Grid visual components */}
          <div className="grid grid-cols-4 gap-2 mt-8 h-12">
            <div className="bg-primary-container/10 border border-[#32ff00]/40 rounded-md h-full animate-[pulse_3s_infinite] relative">
              <span className="absolute top-1 left-2 text-[8px] font-mono text-[#32ff00]/60">С1</span>
            </div>
            <div className="bg-primary-container/10 border border-[#32ff00]/40 rounded-md h-full animate-[pulse_2s_infinite] relative">
              <span className="absolute top-1 left-2 text-[8px] font-mono text-[#32ff00]/60">С2</span>
            </div>
            <div className="bg-primary-container/10 border border-[#32ff00]/40 rounded-md h-full animate-[pulse_4s_infinite] relative">
              <span className="absolute top-1 left-2 text-[8px] font-mono text-[#32ff00]/60">С3</span>
            </div>
            <div className="bg-red-950/20 border border-red-500/30 rounded-md h-full relative overflow-hidden group">
              <div className="absolute inset-0 hazard-stripes opacity-30"></div>
              <span className="absolute top-1 left-2 text-[8px] font-mono text-red-400/80">ОМЕГА</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Prompt / Actions info */}
      <footer className="w-full text-center mt-4">
        <p className="font-sans text-xs uppercase tracking-widest text-on-surface-variant opacity-50">
          СИСТЕМА ЗАЩИТЫ ГХОСТФАЙТЕРС ИНДАСТРИЗ © 2026
        </p>
      </footer>
    </div>
  );
}
