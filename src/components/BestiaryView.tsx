import React, { useState } from 'react';
import { Eye, BookOpen, AlertCircle, Sparkles, X } from 'lucide-react';
import { BestiaryEntry } from '../types';

export const LizunSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-[#32ff00] drop-shadow-[0_0_15px_rgba(50,255,0,0.65)]" fill="currentColor">
    {/* Body wiggle */}
    <path d="M50,15 C25,15 20,40 20,60 C20,75 30,85 50,85 C70,85 80,75 80,60 C80,40 75,15 50,15 Z" />
    {/* Drips of slime */}
    <path d="M22,65 Q25,85 30,80 Q35,75 38,82 Q42,88 46,81 Q50,75 54,83 Q58,88 62,80 Q66,74 72,82 Q76,86 78,65 Z" fill="#32ff00" />
    {/* Large friendly eyes */}
    <circle cx="38" cy="42" r="7" fill="white" />
    <circle cx="38" cy="42" r="3.5" fill="black" />
    <circle cx="62" cy="42" r="7" fill="white" />
    <circle cx="62" cy="42" r="3.5" fill="black" />
    <ellipse cx="36" cy="39" rx="2" ry="1" fill="white" />
    <ellipse cx="60" cy="39" rx="2" ry="1" fill="white" />
    {/* Happy smiling mouth with tongue */}
    <path d="M34,56 Q50,66 66,56" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M45,61 Q50,75 55,61 Z" fill="#ff4081" />
    {/* Rosy blush */}
    <ellipse cx="28" cy="50" rx="4" ry="2.5" fill="#ff4081" opacity="0.6" />
    <ellipse cx="72" cy="50" rx="4" ry="2.5" fill="#ff4081" opacity="0.6" />
  </svg>
);

export const PoltergeistSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-orange-450 drop-shadow-[0_0_15px_rgba(251,146,60,0.65)]" fill="currentColor">
    {/* Flowing ghostly sheet tail */}
    <path d="M50,15 C30,15 25,35 25,55 C25,72 32,70 38,78 C44,85 50,75 56,78 C62,81 68,72 75,70 C75,50 70,15 50,15 Z" />
    {/* Waving tiny arms */}
    <path d="M25,50 Q10,48 12,42 Q14,36 24,44 Z" />
    {/* Mischievous expression */}
    <circle cx="38" cy="40" r="5.5" fill="white" />
    <path d="M36,40 Q38,36 41,40 Z" fill="black" />
    <circle cx="62" cy="40" r="5.5" fill="white" />
    <path d="M60,40 Q62,36 65,40 Z" fill="black" />
    {/* Playful open mouth */}
    <ellipse cx="50" cy="54" rx="7" ry="4.5" fill="black" />
    {/* Floating objects - tea cup */}
    <g transform="translate(14, 20) rotate(-15)" stroke="#fe6b00" strokeWidth="1.5" fill="none">
      <path d="M5,10 Q2,20 18,20 Q18,10 5,10 Z" fill="#1c1b1b" />
      <path d="M18,12 C22,12 22,17 18,17" />
    </g>
    <g transform="translate(68, 15) rotate(20)" stroke="#fe6b00" strokeWidth="1.5" fill="none">
      <ellipse cx="15" cy="15" rx="8" ry="3" fill="#1c1b1b" />
    </g>
  </svg>
);

export const ShadowSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-[#c084fc] drop-shadow-[0_0_15px_rgba(192,132,252,0.65)]" fill="currentColor">
    {/* Sleek shadow body with wiggle tail */}
    <path d="M50,15 C32,15 28,35 28,60 C28,75 35,82 50,82 C65,82 72,75 72,60 C72,35 68,15 50,15 Z" opacity="0.85" />
    {/* Dark shades (sunglasses) */}
    <g fill="#1a1a1a" stroke="#c084fc" strokeWidth="1.5">
      <path d="M28,38 L46,38 L44,45 L32,45 Z" />
      <path d="M54,38 L72,38 L68,45 L56,45 Z" />
      <line x1="46" y1="39" x2="54" y2="39" strokeWidth="2" />
    </g>
    {/* Cool subtle grin */}
    <path d="M44,55 Q50,60 56,55" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Retro sparkles */}
    <path d="M20,20 L22,23 L25,20 L22,17 Z" fill="#c084fc" />
    <path d="M80,25 L81.5,27 L83,25 L81.5,23 Z" fill="#32ff00" />
  </svg>
);

export default function BestiaryView() {
  const [selectedEntry, setSelectedEntry] = useState<BestiaryEntry | null>(null);

  const entries: BestiaryEntry[] = [
    {
      id: 'b1',
      name: 'Лизун',
      threatLevel: '4/10',
      threatValue: 4,
      classBadge: 'КЛАСС 5',
      icon: 'restaurant',
      subtitle: 'Чрезмерное потребление биоматерии',
      description: 'Свободно плавающий концентрированный сгусток эктоплазмы. Проявляет крайнюю степень прожорливости. Оставляет вязкие зеленые следы. Прямой физической угрозы не представляет, но наносит серьезный материальный ущерб укупоренным пищевым запасам и полимерам.',
      image: ''
    },
    {
      id: 'b2',
      name: 'Полтергейст',
      threatLevel: '8/10',
      threatValue: 8,
      classBadge: 'КИНЕТИК',
      icon: 'chair',
      subtitle: 'Телекинетическая агрессия',
      description: 'Шумный дух, характеризующийся невидимым присутствием и мощными телекинетическими выбросами. Способен перемещать тяжелую мебель, метать столовые приборы и вызывать локальные сейсмические аномалии. Высокий риск травм.',
      image: ''
    },
    {
      id: 'b3',
      name: 'Тень',
      threatLevel: '6/10',
      threatValue: 6,
      classBadge: 'СТЕЛС',
      icon: 'lightbulb',
      subtitle: 'Активность при низком освещении',
      description: 'Гуманоидный силуэт, состоящий из плотной антиматерии класса «Мрак». Избегает прямых источников света. Питается чувством страха и понижает температуру в помещении на 10-15 градусов Цельсия. Чрезвычайно скрытен.',
      image: ''
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-1 animate-fade-in flex flex-col gap-6">
      
      {/* Page Header info threat databases */}
      <div className="flex flex-col gap-2 border-b border-outline-variant/30 pb-4 relative">
        <div className="absolute top-0 left-0 w-1.5 h-full hazard-stripes"></div>
        <div className="pl-4">
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-4 h-4 text-[#fe6b00]" />
            <span className="font-sans text-[10px] font-extrabold uppercase text-[#baccaf] tracking-widest">
              БАЗА ДАННЫХ УГРОЗ
            </span>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-black text-white uppercase drop-shadow-[0_0_8px_rgba(238,255,225,0.2)]">
            БЕСТИАРИЙ
          </h2>
          <p className="font-sans text-xs md:text-sm text-on-surface-variant mt-1.5 max-w-2xl">
            Сводка известных паранормальных сущностей, их поведенческие паттерны, уязвимости и уровень опасности для гражданского населения.
          </p>
        </div>
      </div>

      {/* Bestiary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {entries.map((entry) => (
          <article 
            key={entry.id}
            className="bg-[#121212] border border-outline-variant/40 rounded-xl overflow-hidden flex flex-col relative group transition-all duration-300 hover:border-[#32ff00]/45 hover:shadow-[0_0_15px_rgba(50,255,0,0.15)]"
          >
            {/* Decorative layout outline glowing strips on hover */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#32ff00]/0 group-hover:bg-[#32ff00] transition-all duration-500 z-10" />

            {/* Entity cover visual cover - replaced with vector art */}
            <div className="h-48 relative overflow-hidden bg-gradient-to-b from-[#181818] to-[#0f0f0f] flex items-center justify-center shrink-0 select-none p-6">
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10"></div>
              
              <div className="w-28 h-28 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 relative z-20">
                {entry.id === 'b1' && <LizunSVG />}
                {entry.id === 'b2' && <PoltergeistSVG />}
                {entry.id === 'b3' && <ShadowSVG />}
              </div>
              
              {/* Danger Level Badge indicator */}
              <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-black/80 backdrop-blur-sm border border-outline-variant rounded-full px-3 py-1 scale-90">
                <AlertCircle className="w-3.5 h-3.5 text-[#fe6b00]" />
                <span className="font-sans text-[9px] font-extrabold text-[#fe6b00] uppercase tracking-wider">
                  УГРОЗА: {entry.threatLevel}
                </span>
              </div>

              {/* Class Chip badge overlay */}
              <div className="absolute bottom-3 left-3 z-20 flex items-center bg-[#0e0e0e]/90 border border-outline-variant rounded-md overflow-hidden h-7">
                <div className="w-1.5 h-full hazard-stripes-green absolute left-0" />
                <span className="font-sans text-[10px] font-extrabold text-[#32ff00] pl-3.5 pr-2.5 py-0.5 tracking-widest uppercase">
                  {entry.classBadge}
                </span>
              </div>
            </div>

            {/* Card Content parameters and button action */}
            <div className="p-5 flex flex-col flex-grow relative z-20 -mt-2 rounded-t-xl bg-surface-container-low/60 glass-panel">
              <h3 className="font-sans text-xl font-black text-white uppercase tracking-tight mb-1.5">
                {entry.name}
              </h3>
              
              <div className="flex items-center gap-1.5 mb-4 text-[#baccaf] text-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#32ff00]" />
                <span className="font-sans tracking-wide text-xs">{entry.subtitle}</span>
              </div>

              <p className="font-sans text-xs text-on-surface-variant mb-6 flex-grow line-clamp-3 leading-relaxed">
                {entry.description}
              </p>

              <button 
                onClick={() => setSelectedEntry(entry)}
                className="w-full bg-[#1c1b1b] border border-outline-variant hover:border-[#32ff00] hover:text-[#32ff00] text-white font-sans text-[10px] font-extrabold uppercase py-3 px-4 rounded transition-colors flex justify-center items-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Подробнее</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Details Modular HUD Drawer Popup */}
      {selectedEntry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0e0e0e]/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#121212] border border-[#32ff00]/40 max-w-lg w-full rounded-xl overflow-hidden shadow-2xl relative flex flex-col animate-scale-up">
            <button 
              onClick={() => setSelectedEntry(null)}
              className="absolute top-4 right-4 z-40 bg-black/85 text-on-surface-variant hover:text-white p-1.5 rounded-full border border-outline-variant cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Detail Art Banner */}
            <div className="h-48 relative overflow-hidden bg-gradient-to-b from-[#181818] to-[#0f0f0f] flex items-center justify-center shrink-0 p-6">
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent z-10" />
              
              <div className="w-32 h-32 flex items-center justify-center relative z-20">
                {selectedEntry.id === 'b1' && <LizunSVG />}
                {selectedEntry.id === 'b2' && <PoltergeistSVG />}
                {selectedEntry.id === 'b3' && <ShadowSVG />}
              </div>

              <div className="absolute bottom-3 left-4 z-20 bg-[#0e0e0e]/90 border border-outline-variant/60 rounded px-2.5 py-1 text-[11px] font-extrabold text-[#32ff00] tracking-wider uppercase">
                {selectedEntry.classBadge}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-sans text-2xl font-black text-white uppercase mb-1">{selectedEntry.name}</h3>
              <p className="font-sans text-xs text-[#32ff00] uppercase font-bold tracking-widest mb-4">{selectedEntry.subtitle}</p>
              
              <div className="space-y-4 border-t border-outline-variant/30 pt-4">
                <div>
                  <h4 className="font-sans text-[10px] font-extrabold text-on-surface-variant uppercase tracking-widest mb-1">
                    Тактический Анализ Поведения
                  </h4>
                  <p className="font-sans text-xs text-[#baccaf] leading-relaxed">
                    {selectedEntry.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-[#1c1b1b] border border-outline-variant/40 rounded p-3 text-xs">
                  <div>
                    <span className="block text-on-surface-variant text-[10px] uppercase font-extrabold tracking-wider">Уровень Пси-Опасности</span>
                    <strong className="text-[#fe6b00]">{selectedEntry.threatLevel}</strong>
                  </div>
                  <div>
                    <span className="block text-on-surface-variant text-[10px] uppercase font-extrabold tracking-wider">Рекомендуемый Провод</span>
                    <strong className="text-[#32ff00]">Протонный Захват IV</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-surface-container-low border-t border-outline-variant/30 flex justify-end">
              <button 
                onClick={() => setSelectedEntry(null)}
                className="bg-[#32ff00] text-black text-[11px] font-extrabold uppercase px-5 py-2 rounded cursor-pointer hover:shadow-[0_0_10px_rgba(50,255,0,0.4)]"
              >
                Закрыть Рапорт
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
