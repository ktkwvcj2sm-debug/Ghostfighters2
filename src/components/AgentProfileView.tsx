import React from 'react';
import { ShieldAlert, Sparkles, CheckCircle2, Ticket, Trophy, Calendar } from 'lucide-react';
import { Capture, ActiveScreen } from '../types';
import danilAvatar from '../assets/images/danil_avatar_1779221116406.png';

interface ProfileViewProps {
  points: number;
  onModifyPoints: (diff: number) => void;
  onNavigate: (screen: ActiveScreen) => void;
}

export default function AgentProfileView({ points, onModifyPoints, onNavigate }: ProfileViewProps) {
  
  const captures: Capture[] = [
    {
      id: 'c1',
      title: 'Полтергейст 3-го уровня',
      location: 'Ул. Ленина, д. 45, кв. 12',
      date: '12 Окт 2023',
      amount: 2500,
      type: 'gain'
    },
    {
      id: 'c2',
      title: 'Эктоплазменный Слизень',
      location: 'Завод "Красный Октябрь", Подвал',
      date: '08 Окт 2023',
      amount: 1200,
      type: 'gain'
    },
    {
      id: 'c3',
      title: 'Демоническая Сущность (Срыв)',
      location: 'Старое Кладбище, Сектор В',
      date: '01 Окт 2023',
      amount: 500,
      type: 'fine'
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-1 animate-fade-in flex flex-col gap-6">
      
      {/* Bento grid avatar name & monetization widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Avatar & Name panel */}
        <div className="bg-[#121212] border border-outline-variant/60 rounded-xl p-6 md:col-span-2 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full hazard-stripes"></div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
            {/* rugged character avatar cover style */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#32ff00] bg-black/40 p-3.5 flex items-center justify-center ecto-glow-green shrink-0 relative select-none">
              <img 
                alt="Данил Калинин" 
                className="w-full h-full object-contain" 
                src={danilAvatar}
                referrerPolicy="no-referrer"
                style={{
                  paddingLeft: '-40px',
                  borderRadius: '34.67772px',
                  height: '121px',
                  width: '122px'
                }}
              />
            </div>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h2 className="font-sans text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                ДАНИЛ КАЛИНИН
              </h2>
              
              <div className="font-sans text-[10px] font-extrabold text-[#baccaf] uppercase tracking-widest bg-surface-container-high px-3 py-1 rounded border border-outline-variant/40 mt-1.5 mb-4">
                Оперативник 1-го Класса
              </div>

              {/* Badges indicators block */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2.5">
                <div className="flex items-center gap-1.5 bg-[#0e0e0e] border border-[#32ff00]/40 px-3.5 py-1.5 rounded-full text-[#32ff00] text-xs font-semibold uppercase tracking-wider ecto-glow-green">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Master Banisher</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#0e0e0e] border border-orange-500/40 px-3.5 py-1.5 rounded-full text-[#fe6b00] text-xs font-semibold uppercase tracking-wider ecto-glow-orange">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Slime Survivor</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ecto points widget balance */}
        <div className="bg-[#121212] border border-outline-variant/60 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden shadow-lg group">
          <div className="absolute -right-8 -bottom-8 opacity-5">
            <Ticket className="w-36 h-36 text-[#32ff00]" />
          </div>

          <div className="relative z-10">
            <h3 className="font-sans text-[11px] font-extrabold text-on-surface-variant uppercase tracking-widest mb-1.5">
              БАЛАНС ЭКТО-КРЕДИТОВ
            </h3>
            <div className="font-sans text-4xl sm:text-5xl font-black text-[#32ff00] ecto-glow-green tracking-tighter">
              {points.toLocaleString()} <span className="text-xl">₽</span>
            </div>
            <p className="text-xs text-on-surface-variant mt-2">Доступно для аренды и закупа спец. оборудования.</p>
          </div>

          <div className="flex gap-2.5 mt-6 z-10">
            <button 
              onClick={() => onModifyPoints(2500)}
              className="flex-1 bg-surface-container hover:bg-surface border border-outline-variant text-[11px] font-extrabold text-white uppercase py-3 rounded cursor-pointer transition-colors"
            >
              + Пополнить
            </button>
            <button 
              onClick={() => onModifyPoints(-1500)}
              className="flex-1 bg-surface-container hover:bg-surface border border-outline-variant text-[11px] font-extrabold text-[#fe6b00] uppercase py-3 rounded cursor-pointer transition-colors"
            >
              - Списать
            </button>
          </div>
        </div>
      </div>

      {/* Invite referral block link quick actions */}
      <section className="bg-surface-container border border-outline-variant/40 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 group">
        <div>
          <h4 className="font-sans text-base font-extrabold text-white uppercase">ПРОГРАММА АКТИВАЦИИ РЕЗЕРВИСТОВ</h4>
          <p className="font-sans text-xs text-on-surface-variant mt-1">Приведи друга — изгони соседа. Делитесь кодом и получайте по 500 экто-кредитов!</p>
        </div>
        <button 
          onClick={() => onNavigate(ActiveScreen.SUBSCRIPTION)}
          className="bg-transparent border border-[#fe6b00] focus:ring-1 focus:ring-[#fe6b00] text-[#fe6b00] font-sans text-xs font-extrabold uppercase px-5 py-3 rounded hover:bg-[#fe6b00]/10 cursor-pointer transition-colors whitespace-nowrap"
        >
          ПОДРОБНЕЕ О РЕФЕРАЛЕ
        </button>
      </section>

      {/* History table list captures */}
      <section className="w-full mt-2">
        <div className="flex justify-between items-end border-b border-outline-variant/50 pb-2 mb-4">
          <h3 className="font-sans text-lg font-black text-[#e5e2e1] uppercase">Последние Захваты</h3>
          <span 
            onClick={() => onNavigate(ActiveScreen.MAP)}
            className="font-sans text-[10px] font-extrabold text-on-surface-variant uppercase cursor-pointer hover:text-[#32ff00] tracking-wider transition-colors"
          >
            СМОТРЕТЬ НА КАРТЕ
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {captures.map((capture) => (
            <div 
              key={capture.id}
              className="bg-surface-container-high/40 backdrop-blur-md rounded border border-outline-variant/80 p-4.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:border-[#32ff00]/40 transition-colors duration-300 relative group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#32ff00] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 bg-[#0e0e0e] rounded flex items-center justify-center border border-outline-variant/50 ${
                  capture.type === 'gain' ? 'text-[#32ff00]' : 'text-red-500'
                }`}>
                  <ShieldAlert className="w-5.5 h-5.5" />
                </div>

                <div>
                  <h4 className="font-sans text-sm font-bold text-white uppercase group-hover:text-[#32ff00] transition-colors">
                    {capture.title}
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant mt-0.5">{capture.location}</p>
                </div>
              </div>

              <div className="text-left sm:text-right shrink-0 border-t sm:border-t-0 border-outline-variant/30 pt-2 sm:pt-0">
                <div className="font-sans text-[10px] font-extrabold text-on-surface-variant uppercase flex items-center sm:justify-end gap-1 mb-1 tracking-wider">
                  <Calendar className="w-3 h-3" />
                  <span>{capture.date}</span>
                </div>
                <div className={`font-sans text-base font-extrabold ${
                  capture.type === 'gain' ? 'text-[#32ff00]' : 'text-red-500'
                }`}>
                  {capture.type === 'gain' ? `+${capture.amount.toLocaleString()}` : `-${capture.amount.toLocaleString()}`} ₽ 
                  {capture.type === 'fine' && <span className="text-[10px] uppercase text-red-500/80 ml-1.5 font-bold">(Штраф)</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Link to settings button */}
      <div className="flex justify-center mt-3">
        <button 
          onClick={() => onNavigate(ActiveScreen.SETTINGS)}
          className="bg-transparent border border-outline-variant hover:border-white text-xs uppercase font-extrabold tracking-widest text-[#baccaf] hover:text-white px-8 py-3 rounded cursor-pointer transition-colors"
        >
          Перейти в Настройки Терминала
        </button>
      </div>

    </div>
  );
}
