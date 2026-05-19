import React, { useState } from 'react';
import { Search, Sliders, Navigation, Radio, MapPin } from 'lucide-react';
import { ActiveScreen } from '../types';

interface MapProps {
  onNavigate: (screen: ActiveScreen) => void;
}

export default function MapScreen({ onNavigate }: MapProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const hotspots = [
    {
      id: 'h1',
      title: 'Большая Пироговская, 13',
      description: 'Центральный штаб. Уровень ПСИ-излучений стабильный. Эктоплазма: 0%',
      top: '35%',
      left: '48%',
      type: 'hq', // green
      details: 'Центральный штаб операций. Готовность 100%.'
    },
    {
      id: 'h2',
      title: 'Проспект Мира, 45',
      description: 'Аномалия III уровня. Полтергейст зафиксирован датчиками.',
      top: '55%',
      left: '32%',
      type: 'critical', // red/orange
      details: 'Множественные шумы, левитация предметов.'
    },
    {
      id: 'h3',
      title: 'Ул. Ленина, д. 102',
      description: 'Теневые силуэты в подвальном помещении.',
      top: '25%',
      left: '22%',
      type: 'trace', // green/yellow
      details: 'Стабильные заморозки до -15°C в тени.'
    },
    {
      id: 'h4',
      title: 'Красная Площадь, Сектор 3',
      description: 'Остаточная слизь на памятной брусчатке.',
      top: '45%',
      left: '70%',
      type: 'active', // orange
      details: 'Трансцендентные биомассы.'
    }
  ];

  const filteredHotspots = hotspots.filter(h => 
    h.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    h.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full relative h-[calc(100vh-160px)] md:h-[calc(100vh-100px)] overflow-hidden rounded-xl border border-outline-variant/60 bg-[#0e0e0e] flex flex-col max-w-6xl mx-auto shadow-2xl animate-fade-in scanline-overlay">
      
      {/* Search HUD bar (absolute top) */}
      <div className="absolute top-4 left-4 right-4 z-20 max-w-sm mx-auto pointer-events-auto">
        <div className="bg-surface-container/90 backdrop-blur-md border-b-2 border-[#32ff00] rounded-lg px-4 py-2.5 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-5 h-5 text-on-surface-variant" />
            <input 
              className="bg-transparent border-0 text-on-background focus:outline-none focus:ring-0 w-full placeholder-on-surface-variant font-sans text-sm p-0" 
              placeholder="Поиск аномалий, адресов..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
            />
          </div>
          <button className="text-[#32ff00] hover:text-white transition-colors cursor-pointer pl-3">
            <Sliders className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Actual simulated map grid & graphics */}
      <div className="flex-1 w-full h-full relative overflow-hidden select-none">
        
        {/* Futuristic Map Overlay Vector Canvas */}
        <div className="absolute inset-0 pointer-events-none opacity-20 scale-105">
          <svg viewBox="0 0 800 500" className="w-full h-full text-[#32ff00]" stroke="currentColor" strokeWidth="1" fill="none">
            {/* Sector concentric sonar coordinate rings */}
            <circle cx="400" cy="250" r="120" strokeDasharray="3,6" opacity="0.3" />
            <circle cx="400" cy="250" r="240" strokeDasharray="3,6" opacity="0.2" />
            <circle cx="400" cy="250" r="360" strokeDasharray="3,6" opacity="0.1" />
            
            {/* Sleek cyber river curves */}
            <path d="M-50,180 Q150,160 300,280 T650,220 T850,260" stroke="#00d2ff" strokeWidth="16" opacity="0.15" strokeLinecap="round" />
            <path d="M-50,180 Q150,160 300,280 T650,220 T850,260" stroke="#004c80" strokeWidth="4" opacity="0.3" strokeLinecap="round" />
            
            {/* Grid street networks vector paths */}
            <g opacity="0.12">
              <line x1="50" y1="-50" x2="150" y2="550" strokeWidth="1.5" />
              <line x1="150" y1="-50" x2="250" y2="550" strokeWidth="1.5" />
              <line x1="300" y1="-50" x2="400" y2="550" strokeWidth="1.5" />
              <line x1="480" y1="-50" x2="520" y2="550" strokeWidth="2" />
              <line x1="650" y1="-50" x2="700" y2="550" strokeWidth="1.5" />

              <line x1="-50" y1="80" x2="850" y2="100" strokeWidth="1.5" />
              <line x1="-50" y1="200" x2="850" y2="180" strokeWidth="1.5" />
              <line x1="-50" y1="320" x2="850" y2="350" strokeWidth="2" />
              <line x1="-50" y1="440" x2="850" y2="420" strokeWidth="1.5" />
              
              {/* Radial sector sweeps */}
              <line x1="400" y1="250" x2="0" y2="0" strokeDasharray="1,5" />
              <line x1="400" y1="250" x2="800" y2="0" strokeDasharray="1,5" />
              <line x1="400" y1="250" x2="0" y2="500" strokeDasharray="1,5" />
              <line x1="400" y1="250" x2="800" y2="500" strokeDasharray="1,5" />
            </g>
          </svg>
        </div>

        {/* Tactical vector grids */}
        <div className="absolute inset-0 pointer-events-none grid-bg opacity-30"></div>

        {/* Hotspots Render */}
        {filteredHotspots.map((spot) => (
          <div 
            key={spot.id}
            onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
            className="absolute cursor-pointer group transition-transform hover:scale-110 z-10"
            style={{ top: spot.top, left: spot.left }}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center relative transition-all duration-300 ${
              spot.type === 'hq' ? 'bg-[#32ff00]/15 border border-[#32ff00]/50' :
              spot.type === 'critical' ? 'bg-red-500/20 border border-red-500/80 animate-pulse' :
              spot.type === 'active' ? 'bg-orange-500/25 border border-orange-500 animate-[pulse_2s_infinite]' :
              'bg-[#eeffe1]/10 border border-[#baccaf]/50'
            }`}>
              
              {/* Inner dots */}
              <div className={`w-3.5 h-3.5 rounded-full ${
                spot.type === 'hq' ? 'bg-[#32ff00]' :
                spot.type === 'critical' ? 'bg-red-500' :
                spot.type === 'active' ? 'bg-[#fe6b00]' :
                'bg-yellow-300'
              } relative`}>
                <div className={`absolute -inset-2 rounded-full border animate-ping opacity-65 ${
                  spot.type === 'hq' ? 'border-[#32ff00]' :
                  spot.type === 'critical' ? 'border-red-500' :
                  spot.type === 'active' ? 'border-[#fe6b00]' :
                  'border-yellow-300'
                }`}></div>
              </div>

              {/* Tag / Tooltip HUD */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface/90 border border-outline-variant/60 rounded px-2.5 py-1 text-[11px] uppercase tracking-wider font-extrabold text-white hidden group-hover:block drop-shadow-lg z-30">
                {spot.title}
              </div>
            </div>
          </div>
        ))}

        {/* Bottom Banner Legend panel overlay (pointer events none outside container) */}
        <div className="absolute bottom-4 left-4 right-4 pointer-events-none flex flex-col md:flex-row md:items-end md:justify-between gap-4 z-10">
          
          {/* Active Hotspot Mini card */}
          {activeHotspot ? (
            <div className="pointer-events-auto bg-surface-container/95 border border-[#32ff00]/40 rounded-xl p-4.5 max-w-xs shadow-2xl animate-fade-in">
              {(() => {
                const s = hotspots.find(h => h.id === activeHotspot);
                if (!s) return null;
                return (
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      <Radio className="w-4 h-4 text-[#32ff00] animate-pulse" />
                      <span className="font-sans text-[10px] font-extrabold text-on-surface-variant uppercase tracking-widest">
                        ДАННЫЕ АНОМАЛИИ
                      </span>
                    </div>
                    <h3 className="font-sans text-sm font-extrabold text-white uppercase">{s.title}</h3>
                    <p className="font-sans text-xs text-on-surface-variant mt-1">{s.description}</p>
                    <div className="mt-3 text-[10px] uppercase font-bold text-[#32ff00] bg-[#32ff00]/10 px-2.5 py-1 rounded inline-block">
                      {s.details}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : (
            /* Standard Legend Card */
            <div className="pointer-events-auto bg-surface-container/70 backdrop-blur-[20px] border border-outline-variant/50 rounded-xl p-4 w-48 shadow-xl">
              <h3 className="font-sans text-[11px] font-extrabold text-on-surface-variant uppercase mb-3 border-b border-outline-variant/50 pb-1.5 flex items-center gap-2 tracking-wider">
                <Navigation className="w-3.5 h-3.5 text-[#32ff00]" />
                УРОВНИ УГРОЗЫ
              </h3>
              <ul className="space-y-2.5 font-sans text-xs tracking-wide">
                <li className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                  <span className="text-on-background">Критический</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded bg-[#fe6b00] shadow-[0_0_8px_rgba(254,107,0,0.6)]"></div>
                  <span className="text-on-background">Активный</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded bg-yellow-300 shadow-[0_0_8px_rgba(253,224,71,0.6)]"></div>
                  <span className="text-on-background">След</span>
                </li>
              </ul>
            </div>
          )}

          {/* Sighting Reporting FAB Button */}
          <button 
            onClick={() => onNavigate(ActiveScreen.REQ_DISPATCH)}
            className="pointer-events-auto cursor-pointer bg-gradient-to-r from-[#32ff00] to-[#2ce500] text-black font-sans text-[11px] font-extrabold uppercase rounded-lg px-6 py-4.5 flex items-center gap-2.5 shadow-[0_0_20px_rgba(50,255,0,0.25)] hover:bg-primary-fixed hover:scale-105 active:scale-95 transition-all"
          >
            <MapPin className="w-4 h-4" />
            <span>Сообщить о явлении</span>
          </button>
        </div>
      </div>
    </div>
  );
}
