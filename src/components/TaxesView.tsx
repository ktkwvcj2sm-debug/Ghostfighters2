import React from 'react';
import { Shield, Sparkles, User, Flame, ArrowRight } from 'lucide-react';
import { ActiveScreen } from '../types';

interface TaxesProps {
  onNavigate: (screen: ActiveScreen) => void;
}

export default function TaxesView({ onNavigate }: TaxesProps) {
  
  const tariffs = [
    {
      id: 't1',
      title: 'Эконом',
      description: 'Базовое сканирование. Идеально для простых полтергейстов 1-го класса.',
      price: 1990,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUthYr_bdnuL85nnEBx1pZmWCzyETue4VoaSW2Jo_BrH84baGi42ytiVZ7tdcK6o84Cn9u0MwNSpfqQ1-dfBRUvafMlCHIXqqPCNTtIzWfuHyWfeo2Z2HLhzMHOt1FOluXFFCD7PZBfmRz_iMbheyRsBgXb7W_RjDyllZloyrMb-ennZuF3mtVM0YLLyehPRSpjnvjx8y45WwmmGIbKtyn3MbAjzWe7Nkkfp5qMID1HSJb4XeaZVJZGslPyv_ZBU14pPjH2Eeou2uM',
      features: [
        { label: 'Стажер-охотник', available: true },
        { label: 'Слабый протонный излучатель', available: true },
        { label: 'Без гарантии удержания', available: false }
      ],
      recommended: false
    },
    {
      id: 't2',
      title: 'Стандарт',
      description: 'Оптимальный протокол для сущностей до 3-го класса.',
      price: 4990,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdgCD48EPc272cY-lAk3mOupT1z0cMmKAutM57z82krRWY_YQRJJsdaoTjPfS9O77X0mQ223feEEYrfLvzekI_hjvnPkOSmqy1EvC2JPki6KEq83Rdf7M0U-8K2WfabD2KRLzXNADG2-g8lQ7BBJNXNEJYybYB_E26CDFwxvgYIqJSrZUKy4_3SmdP5BmKQNn4vm8vIITy5KJicyE4lO7g1fRYGnJP6tSED2mj5NlpatTF-mU2Jh82jF1-ItTTdK4tSiNOPdg7Dupw',
      features: [
        { label: 'Команда из 3 специалистов', available: true },
        { label: 'Полноценные протонные ранцы', available: true },
        { label: 'Базовая очистка от эктоплазмы', available: true }
      ],
      recommended: true
    },
    {
      id: 't3',
      title: 'Тотальная зачистка',
      description: 'Спецоперация для полтергейстов 4-го класса и выше.',
      price: 14990,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3MEvbmNWx7cJiUGh_k969Si9O7DfWknmXqAfy3eHZ8bjFiumSiyUYT-ZobtYj-Hj5IUflGfNLD4dokb-A-rntukCJjS3p9_Eh5W6ELTvA6PIYOJzlZO-grpIGTD7wtOOAdEzoFpjs59qVma1oRIequ3mOV0nk2xg6kKNR4u6H5T64gI1oCsx4147ML0FpyKBRcWzKEcGdAD5iumNPdlZqbznUG6IXRNOfdQufq-KSg3xpw4TxGsZW_kr0FtEU7KVrKN4WKry539_p',
      features: [
        { label: 'Элитный отряд спецназа', available: true },
        { label: 'Использование ловушек для призраков', available: true },
        { label: 'Страховка от слизи включена', available: true }
      ],
      recommended: false
    }
  ];

  const handleSelect = (price: number) => {
    onNavigate(ActiveScreen.RECEIPT); // beautiful redirection to receipt summary
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-1 animate-fade-in flex flex-col items-center gap-6 pb-6">
      
      {/* Layout 13 page header threat selections */}
      <div className="text-center mb-6 w-full max-w-3xl select-none">
        <h1 className="font-sans text-3xl md:text-5xl font-black mb-3 text-white uppercase tracking-tighter">
          ВЫБЕРИТЕ УРОВЕНЬ <span className="text-[#32ff00] ecto-glow-green">УГРОЗЫ</span>
        </h1>
        <p className="font-sans text-xs md:text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          Наши высококлассные специалисты экипированы для незамедлительной ликвидации паранормальной активности любой категории сложности. Подтвердите подходящий тактический протокол.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
        {tariffs.map((tariff) => (
          <div 
            key={tariff.id}
            className={`bg-[#121212] overflow-hidden flex flex-col relative h-[500px] md:h-[530px] rounded-xl transition-all duration-300 ${
              tariff.recommended 
                ? 'border-2 border-[#32ff00] shadow-[0_0_20px_rgba(50,255,0,0.15)] md:-mt-3 md:mb-3' 
                : 'border border-outline-variant/50 hover:border-outline-variant'
            }`}
          >
            {/* Vector Cover Art representing friendly ghosts matching logo */}
            <div className="absolute inset-0 z-0 opacity-15 select-none pointer-events-none overflow-hidden bg-gradient-to-b from-black/80 to-transparent">
              <div className="absolute inset-x-0 top-0 h-48 grid-bg opacity-30"></div>
              {tariff.id === 't1' && (
                <div className="absolute right-4 top-4 w-32 h-32 animate-bounce flex items-center justify-center">
                  <svg viewBox="0 0 100 100" fill="#32ff00" className="opacity-90">
                    <path d="M50,15 C25,15 20,40 20,60 C20,75 30,85 50,85 C70,85 80,75 80,60 C80,40 75,15 50,15 Z" />
                    <circle cx="38" cy="42" r="7" fill="white" />
                    <circle cx="38" cy="42" r="3.5" fill="black" />
                    <circle cx="62" cy="42" r="7" fill="white" />
                    <circle cx="62" cy="42" r="3.5" fill="black" />
                  </svg>
                </div>
              )}
              {tariff.id === 't2' && (
                <>
                  <div className="absolute right-4 top-4 w-28 h-28 animate-[bounce_2.5s_infinite] flex items-center justify-center">
                    <svg viewBox="0 0 100 100" fill="#32ff00" className="opacity-80">
                      <path d="M50,15 C25,15 20,40 20,60 C20,75 30,85 50,85 C70,85 80,75 80,60 C80,40 75,15 50,15 Z" />
                      <circle cx="38" cy="42" r="6" fill="white" />
                      <circle cx="38" cy="42" r="3" fill="black" />
                      <circle cx="62" cy="42" r="6" fill="white" />
                      <circle cx="62" cy="42" r="3" fill="black" />
                    </svg>
                  </div>
                  <div className="absolute left-4 top-16 w-20 h-20 animate-[bounce_3.5s_infinite] flex items-center justify-center rotate-12">
                    <svg viewBox="0 0 100 100" fill="#fe6b00" className="opacity-60">
                      <path d="M50,15 C30,15 25,35 25,55 C25,72 32,70 38,78 C44,85 50,75 56,78 C75,70 75,50 50,15 Z" />
                      <circle cx="38" cy="40" r="5" fill="white" />
                      <circle cx="38" cy="40" r="2.5" fill="black" />
                      <circle cx="62" cy="40" r="5" fill="white" />
                      <circle cx="62" cy="40" r="2.5" fill="black" />
                    </svg>
                  </div>
                </>
              )}
              {tariff.id === 't3' && (
                <>
                  <div className="absolute right-8 top-4 w-32 h-32 animate-[bounce_1.8s_infinite] flex items-center justify-center">
                    <svg viewBox="0 0 100 100" fill="#c084fc" className="opacity-90">
                      <path d="M50,15 C32,15 28,35 28,60 C28,75 35,82 50,82 C65,82 72,75 72,60 C72,35 68,15 50,15 Z" />
                      <circle cx="38" cy="42" r="6" fill="white" />
                      <circle cx="62" cy="42" r="6" fill="white" />
                    </svg>
                  </div>
                  <div className="absolute left-4 top-12 w-20 h-20 animate-[bounce_3s_infinite] flex items-center justify-center -rotate-12">
                    <svg viewBox="0 0 100 100" fill="#32ff00" className="opacity-60">
                      <path d="M50,15 C25,15 20,40 20,60 C20,75 30,85 50,85 Z" />
                    </svg>
                  </div>
                  <div className="absolute right-2 top-28 w-16 h-16 animate-[bounce_2.2s_infinite] flex items-center justify-center rotate-45">
                    <svg viewBox="0 0 100 100" fill="#fe6b00" className="opacity-50">
                      <path d="M50,15 C25,15 20,40 20,60 C70,85 70,15 50,15 Z" />
                    </svg>
                  </div>
                </>
              )}
            </div>
            
            {/* Recommended banner badge if standard layout 13 */}
            {tariff.recommended && (
              <div className="absolute top-4 left-0 bg-[#32ff00] text-black font-sans text-[9px] font-extrabold px-3 py-1 rounded-r-md hazard-stripes z-20 flex items-center gap-2 select-none">
                <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
                <span>РЕКОМЕНДОВАНО</span>
              </div>
            )}

            {/* Content list properties */}
            <div className="p-6 relative z-10 flex flex-col flex-grow bg-gradient-to-t from-background via-background/85 to-transparent justify-between h-full">
              
              <div className="mb-auto mt-6">
                <h3 className={`font-sans text-xl md:text-2xl font-black mb-1.5 uppercase ${
                  tariff.recommended ? 'text-[#32ff00] ecto-glow-green' : 'text-white'
                }`}>
                  {tariff.title}
                </h3>
                
                <p className="font-sans text-xs text-[#baccaf] h-12 leading-relaxed mb-6">
                  {tariff.description}
                </p>

                {/* Features details indicator list layout 13 */}
                <ul className="space-y-3.5 mb-8 text-xs font-semibold tracking-wide uppercase text-on-surface">
                  {tariff.features.map((feat, i) => (
                    <li 
                      key={i} 
                      className={`flex items-start gap-2.5 border-b border-outline-variant/20 pb-2 transition-all hover:text-[#32ff00] ${
                        !feat.available ? 'opacity-40 line-through' : ''
                      }`}
                    >
                      <span className={`text-[13px] font-bold ${tariff.recommended ? 'text-[#32ff00]' : 'text-on-surface'}`}>•</span>
                      <span>{feat.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing selector footer layout 13 */}
              <div className="mt-auto flex justify-between items-end border-t border-outline-variant/30 pt-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#baccaf]">Тариф выезда</span>
                  <span className={`font-sans text-xl md:text-2xl font-black ${
                    tariff.recommended ? 'text-[#32ff00]' : 'text-white'
                  }`}>
                    {tariff.price.toLocaleString()} ₽
                  </span>
                </div>
                <button 
                  onClick={() => handleSelect(tariff.price)}
                  className={`cursor-pointer font-sans text-[10px] font-extrabold uppercase px-5 py-2.5 rounded-md transition-all active:scale-95 ${
                    tariff.recommended 
                      ? 'bg-[#32ff00] text-black hover:shadow-[0_0_12px_rgba(50,255,0,0.4)]' 
                      : 'bg-transparent border border-outline-variant hover:border-[#32ff00] text-[#baccaf] hover:text-[#32ff00]'
                  }`}
                >
                  Выбрать
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
