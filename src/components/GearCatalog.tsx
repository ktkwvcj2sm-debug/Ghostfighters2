import React, { useState } from 'react';
import { Star, ShoppingCart, Filter, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

export const ProtonPackSVG = () => (
  <svg viewBox="0 0 120 120" className="w-full h-full text-[#32ff00] drop-shadow-[0_0_12px_rgba(50,255,0,0.45)]" fill="none" stroke="currentColor" strokeWidth="2.5">
    {/* Backpack base frame */}
    <rect x="35" y="25" width="50" height="70" rx="6" fill="#131313" />
    <rect x="42" y="32" width="36" height="25" rx="3" fill="#1a1a1a" />
    {/* Proton core booster circle */}
    <circle cx="60" cy="74" r="14" fill="#0e0e0e" />
    <circle cx="60" cy="74" r="8" fill="#32ff00" className="animate-pulse" opacity="0.8" />
    {/* Wire tubes */}
    <path d="M50,45 Q30,55 45,74" stroke="#fe6b00" strokeWidth="2" strokeLinecap="round" />
    <path d="M68,45 Q88,60 75,74" stroke="#32ff00" strokeWidth="2" strokeLinecap="round" />
    {/* Screws/status led */}
    <circle cx="48" cy="38" r="1.5" fill="#fe6b00" />
    <circle cx="54" cy="38" r="1.5" fill="#32ff00" />
    <circle cx="60" cy="38" r="1.5" fill="#32ff00" />
  </svg>
);

export const GhostTrapSVG = () => (
  <svg viewBox="0 0 120 120" className="w-full h-full text-yellow-500 drop-shadow-[0_0_12px_rgba(234,179,8,0.4)]" fill="none" stroke="currentColor" strokeWidth="2.5">
    {/* Metal Cartridge base */}
    <rect x="30" y="45" width="60" height="40" rx="3" fill="#131313" />
    {/* Hazard lines block */}
    <g fill="currentColor" stroke="none">
      <path d="M35,45 L45,45 L35,55 Z" />
      <path d="M47,45 L57,45 L42,60 L32,60 Z" />
      <path d="M59,45 L69,45 L50,64 L40,64 Z" />
      <path d="M71,45 L81,45 L58,68 L48,68 Z" />
    </g>
    {/* Cute open trapdoor flaps */}
    <path d="M30,45 L20,20" strokeLinecap="round" />
    <path d="M90,45 L100,20" strokeLinecap="round" />
    {/* Glowing green portal trap beam inside */}
    <ellipse cx="60" cy="45" rx="20" ry="4" fill="#32ff00" opacity="0.7" stroke="none" />
    {/* Control cable wire and button */}
    <path d="M78,85 Q85,100 100,95" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="96" y="91" width="8" height="8" rx="1.5" fill="#ef4444" stroke="none" />
  </svg>
);

export const PKEMeterSVG = () => (
  <svg viewBox="0 0 120 120" className="w-full h-full text-[#32ff00] drop-shadow-[0_0_12px_rgba(50,255,0,0.45)]" fill="none" stroke="currentColor" strokeWidth="2.5">
    {/* Handheld grip device */}
    <rect x="42" y="55" width="36" height="50" rx="4" fill="#131313" />
    <rect x="48" y="75" width="24" height="24" rx="2" fill="#1a1a1a" />
    {/* Display Screen grid */}
    <rect x="46" y="28" width="28" height="22" rx="3" fill="#0c1a0c" stroke="#32ff00" strokeWidth="1.5" />
    {/* Radar sweep inside screen */}
    <path d="M48,45 Q60,32 72,45" stroke="#32ff00" strokeWidth="1" strokeDasharray="2,2" />
    <circle cx="60" cy="42" r="3" fill="#32ff00" className="animate-pulse" />
    {/* Scanning wings (antennas) sticking out left and right */}
    <path d="M42,55 L22,35 L12,40" strokeLinecap="round" strokeWidth="2" />
    <path d="M78,55 L98,35 L108,40" strokeLinecap="round" strokeWidth="2" />
    {/* Sensory blinking LEDs on wings */}
    <circle cx="12" cy="40" r="2.5" fill="#ef4444" stroke="none" />
    <circle cx="108" cy="40" r="2.5" fill="#ef4444" stroke="none" />
  </svg>
);

interface GearProps {
  onAddItem: (price: number) => void;
  agentPoints: number;
}

export default function GearCatalog({ onAddItem, agentPoints }: GearProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showNotification, setShowNotification] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: 'p1',
      name: 'Протонный ранец Mark 4',
      description: 'Улучшенная система охлаждения ядра. Риск спонтанного распада снижен на 12%. Обязателен для класса V.',
      price: 99900,
      rating: 4.8,
      image: '',
      tag: 'Новинка',
      category: 'weapons'
    },
    {
      id: 'p2',
      name: 'Ловушка для призраков',
      description: 'Стандартный контейнер удержания. Оснащен педальным приводом, электромагнитными защелками и индикатором заполнения.',
      price: 15000,
      rating: 5.0,
      image: '',
      category: 'traps'
    },
    {
      id: 'p3',
      name: 'PKE Meter',
      description: 'Детектор психокинетической энергии. Компактная базовая модель для первичной тактической разведки паранормального периметра.',
      price: 5000,
      rating: 4.2,
      image: '',
      category: 'scanners'
    }
  ];

  const handleBuy = (product: Product) => {
    onAddItem(product.price);
    setShowNotification(`Предмет "${product.name}" успешно зарезервирован!`);
    setTimeout(() => {
      setShowNotification(null);
    }, 3000);
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full max-w-5xl mx-auto px-1 animate-fade-in flex flex-col gap-6">
      
      {/* HUD Heading section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant/30 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-1.5 h-4 hazard-stripes"></div>
            <span className="font-sans text-[10px] font-extrabold text-[#fe6b00] uppercase tracking-wider">
              Официальный поставщик корпорации
            </span>
          </div>
          <h1 className="font-sans text-3xl md:text-5xl font-black text-on-background uppercase tracking-tighter ecto-glow-green">
            СКЛАД СНАРЯЖЕНИЯ
          </h1>
        </div>

        {/* Filters and points indicator */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-surface-container py-1.5 px-3.5 rounded border border-outline-variant/60 font-sans text-xs uppercase tracking-wider flex items-center gap-2 text-on-surface-variant">
            <ShieldCheck className="w-4 h-4 text-[#32ff00]" />
            <span>Баланс: <strong className="text-white">{agentPoints.toLocaleString()} ₽</strong></span>
          </div>

          <div className="flex bg-surface-container rounded p-1 border border-outline-variant/50">
            {['all', 'weapons', 'traps', 'scanners'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 font-sans text-[10px] font-extrabold uppercase rounded-sm transition-all cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-[#32ff00] text-black' 
                    : 'text-on-surface-variant hover:text-white'
                }`}
              >
                {cat === 'all' ? 'Все' : cat === 'weapons' ? 'Оружие' : cat === 'traps' ? 'Ловушки' : 'Детекторы'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating purchase notifications */}
      {showNotification && (
        <div className="fixed top-20 right-4 z-50 bg-[#0e0e0e] border-l-4 border-[#32ff00] p-4 rounded-r shadow-2xl animate-fade-in flex items-center gap-3 max-w-sm">
          <CheckCircle2 className="w-5 h-5 text-[#32ff00] shrink-0" />
          <p className="font-sans text-xs text-white uppercase tracking-wider">{showNotification}</p>
        </div>
      )}

      {/* Equipment Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <div 
            key={p.id}
            className="bg-[#121212] border border-outline-variant rounded-xl overflow-hidden relative group flex flex-col hover:border-[#32ff00]/40 transition-colors duration-300"
          >
            {/* Header image cover replaced with cute styled vector canvas */}
            <div className="h-48 relative bg-gradient-to-b from-[#181818] to-[#0a0a0a] flex items-center justify-center p-6 select-none shrink-0">
              <div className="w-32 h-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 transform relative z-10">
                {p.id === 'p1' && <ProtonPackSVG />}
                {p.id === 'p2' && <GhostTrapSVG />}
                {p.id === 'p3' && <PKEMeterSVG />}
              </div>
              
              {/* Product badge tag if any */}
              {p.tag && (
                <div className="absolute top-3 left-3 z-20 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-outline-variant font-sans text-[10px] font-extrabold text-[#32ff00] uppercase tracking-widest">
                  {p.tag}
                </div>
              )}
            </div>

            {/* Content body */}
            <div className="p-5 flex-grow flex flex-col justify-between relative bg-surface-container-low/50">
              <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[1px] pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="font-sans text-lg font-black text-[#e5e2e1] uppercase mb-1.5">{p.name}</h3>
                <p className="font-sans text-xs text-on-surface-variant mb-4.5 leading-relaxed">
                  {p.description}
                </p>

                {/* Rating display */}
                <div className="flex items-center gap-1 mb-6 text-[#fe6b00]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(p.rating) ? 'fill-[#fe6b00]' : 'text-outline-variant'
                      }`} 
                    />
                  ))}
                  <span className="text-on-surface-variant font-sans text-[10px] font-extrabold ml-1.5">{p.rating}</span>
                </div>
              </div>

              {/* Pricing & Add to Cart button */}
              <div className="flex justify-between items-end relative z-10 border-t border-outline-variant/30 pt-4 mt-auto">
                <button
                  onClick={() => handleBuy(p)}
                  className="bg-[#32ff00] text-black cursor-pointer font-sans text-[11px] font-extrabold uppercase px-4 py-2.5 rounded hover:bg-[#32ff00] hover:shadow-[0_0_15px_rgba(50,255,0,0.5)] transition-all flex items-center gap-2"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>В КОРЗИНУ</span>
                </button>
                <div className="font-sans text-xl md:text-2xl font-black text-[#32ff00] ecto-glow-green">
                  {p.price.toLocaleString()} ₽
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
