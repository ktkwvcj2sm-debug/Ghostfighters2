import React, { useState, useRef, useEffect } from 'react';
import { Send, AlertTriangle, ArrowLeft, Mic, Paperclip, CheckCheck, Loader2 } from 'lucide-react';
import { Message, ActiveScreen } from '../types';

export const ThermalScanSVG = () => (
  <svg viewBox="0 0 160 100" className="w-full h-36 border border-[#32ff00]/30 rounded bg-black">
    {/* Grid scanlines */}
    <defs>
      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#32ff00" strokeWidth="0.5" opacity="0.15" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    {/* Radar center sweep circle */}
    <line x1="10" y1="50" x2="150" y2="50" stroke="#32ff00" strokeWidth="0.5" opacity="0.2" />
    <line x1="80" y1="5" x2="80" y2="95" stroke="#32ff00" strokeWidth="0.5" opacity="0.2" />
    <circle cx="80" cy="50" r="30" stroke="#32ff00" strokeWidth="0.5" fill="none" opacity="0.15" />
    {/* Thermal glow blob ghost (smiling, cute) */}
    <g filter="blur(3px)" opacity="0.85">
      {/* Outer red/yellow glow of the entity */}
      <path d="M80,30 C65,30 60,45 60,60 C60,70 68,76 80,76 C92,76 100,70 100,60 C100,45 95,30 80,30 Z" fill="#ef4444" />
      <path d="M80,35 C68,35 65,48 65,60 C65,68 71,72 80,72 C89,72 95,68 95,60 C95,48 92,35 80,35 Z" fill="#eab308" />
      <path d="M80,42 C72,42 70,52 70,60 C70,66 74,68 80,68 C86,68 90,66 90,60 C90,52 88,42 80,42 Z" fill="#22c55e" />
    </g>
    {/* Sharp thermal vector eyes and cute smiley smile */}
    <circle cx="74" cy="50" r="2.5" fill="blue" />
    <circle cx="86" cy="50" r="2.5" fill="blue" />
    <path d="M75,60 Q80,64 85,60" stroke="blue" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Calibration indicators */}
    <text x="12" y="20" fill="#32ff00" fontSize="7" fontFamily="monospace" opacity="0.7">PSI: 981μV</text>
    <text x="12" y="30" fill="#fe6b00" fontSize="7" fontFamily="monospace" opacity="0.7">TEMP: -12°C</text>
    <text x="110" y="20" fill="#ef4444" fontSize="7" fontFamily="monospace" opacity="0.7">GRID: 0x9F</text>
  </svg>
);

interface ChatProps {
  onNavigate: (screen: ActiveScreen) => void;
}

export default function BusterChat({ onNavigate }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      senderName: 'Агент Петров',
      senderInitials: 'ПТ',
      isAgent: true,
      content: 'Прибыл на объект "Хрущёвка-7". Показания EMF зашкаливают до пиковых значений. В подвале обнаружен сильный эктоплазматический след.',
      timestamp: '03:15 AM'
    },
    {
      id: 'm2',
      senderName: 'Агент Петров',
      senderInitials: 'ПТ',
      isAgent: true,
      content: 'Прикрепляю термальный сканирующий снимок утечки эктоплазмы. Давление в контуре растет.',
      timestamp: '03:16 AM',
      attachment: {
        type: 'scan',
        label: 'СКАН 01',
        url: ''
      }
    },
    {
      id: 'm3',
      senderName: 'Агент Петров',
      senderInitials: 'ПТ',
      isAgent: true,
      content: 'Уровень угрозы 4. Требуется срочное тактическое подтверждение диспетчера на использование экспериментального протокола очистки "ИОН-БЕТА".',
      timestamp: '03:17 AM'
    },
    {
      id: 'm4',
      senderName: 'Диспетчер HQ (Вы)',
      senderInitials: 'HQ',
      isAgent: false,
      content: 'Принято, Петров. Код авторизации 77-Альфа. Разрешаю протокол "ИОН-БЕТА". Подготовьте ловушку, будет сильный выброс энергии.',
      timestamp: '03:18 AM'
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      senderName: 'Диспетчер HQ (Вы)',
      senderInitials: 'HQ',
      isAgent: false,
      content: inputText,
      timestamp: '03:19 AM' // hardcoded or real time snippet
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulated back-and-forth communication of Petrov
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "Вас понял, диспетчер. Протокол 'ИОН-БЕТА' запущен в контур. Нагнетаю плотность протонной струи. Сущность реагирует агрессивно!",
        "Ловушка установлена. Фиксирую всасывание экто-массы. Стены вибрируют, но мы справляемся. На связи.",
        "Психокинетическая активность снижается. Кажется, мы загнали объект в камеру сдерживания. Заполняю контейнер-3.",
        "Зачистка завершена успешно! Готовлю миссию к расчету оплаты. Эктоплазма дезинфицирована растворителем. Возвращаюсь на базу."
      ];
      
      const randomResponse = responses[Math.min(messages.length - 4, responses.length - 1)];

      const replies: Message = {
        id: `p-${Date.now()}`,
        senderName: 'Агент Петров',
        senderInitials: 'ПТ',
        isAgent: true,
        content: randomResponse,
        timestamp: '03:20 AM'
      };

      setMessages(prev => [...prev, replies]);
    }, 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto h-[calc(100vh-160px)] md:h-[calc(100vh-100px)] overflow-hidden rounded-xl border border-outline-variant/60 bg-[#0e0e0e] flex flex-col shadow-2xl animate-fade-in relative">
      
      {/* Absolute Ambient Background */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary-container/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Chat header agent info */}
      <header className="flex items-center justify-between px-4.5 h-16 bg-surface-container-high/95 backdrop-blur-md border-b border-outline-variant/60 relative z-10 shrink-0 select-none">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigate(ActiveScreen.SETTINGS)}
            className="text-on-surface-variant hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/5 active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="relative w-10 h-10 rounded border border-outline-variant bg-[#1c1b1b] flex items-center justify-center font-extrabold text-[#32ff00]">
            ПТ
          </div>

          <div className="flex flex-col">
            <h1 className="font-sans text-[11px] font-extrabold uppercase tracking-widest text-white leading-none">
              АГЕНТ ПЕТРОВ
            </h1>
            <div className="flex items-center gap-1.5 mt-1 leading-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#32ff00] animate-pulse"></span>
              <span className="font-sans text-[8px] font-extrabold uppercase tracking-widest text-[#32ff00]">
                АКТИВЕН НА ОБЪЕКТЕ
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => {
              alert("Сирена активирована! Местонахождение Петрова передано штурмовой группе.");
              onNavigate(ActiveScreen.RADAR);
            }}
            className="text-red-500 hover:text-white p-2 hover:bg-red-950/20 rounded-full transition-colors cursor-pointer"
          >
            <AlertTriangle className="w-5 h-5 animate-pulse" />
          </button>
        </div>
      </header>

      {/* Messages Feed body */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 no-scrollbar relative z-10 bg-[#0A0A0A] flex flex-col">
        
        {/* Connection established alert */}
        <div className="text-center my-2 select-none">
          <span className="font-sans text-[10px] text-on-surface-variant uppercase tracking-widest bg-surface-container-low border border-outline-variant/30 px-3.5 py-1.5 rounded-full">
            ОПЕРАЦИЯ 404 - ШИФРОВАННЫЙ КАНАЛ УСТАНОВЛЕН
          </span>
        </div>

        {messages.map((m) => (
          <div 
            key={m.id}
            className={`flex items-end gap-2.5 max-w-[85%] md:max-w-md ${
              m.isAgent ? 'self-start' : 'self-end flex-row-reverse'
            }`}
          >
            {/* Initials profile placeholder */}
            <div className={`w-7 h-7 rounded border font-mono text-[9px] font-bold flex items-center justify-center shrink-0 mb-1 select-none ${
              m.isAgent 
                ? 'bg-surface-container border-outline-variant text-[#baccaf]' 
                : 'bg-primary-container/20 border-[#32ff00]/40 text-[#32ff00]'
            }`}>
              {m.senderInitials}
            </div>

            {/* Content body parameters */}
            <div className="flex flex-col gap-1 w-full">
              <div className={`relative px-4 py-3 rounded-xl shadow-md text-xs sm:text-sm ${
                m.isAgent 
                  ? 'bg-surface-container border border-outline-variant/60 rounded-bl-none text-on-surface' 
                  : 'bg-[#121212] border-r border-[#32ff00]/40 rounded-br-none text-white'
              }`}>
                {/* Thin warning color bar for Agent alert */}
                {m.isAgent && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 hazard-stripes opacity-40"></div>
                )}
                <p className="leading-relaxed whitespace-pre-line">{m.content}</p>

                {/* Optional attachment logic */}
                {m.attachment && (
                  <div className="mt-3 bg-black/95 p-1.5 rounded-lg border border-outline-variant/60 overflow-hidden">
                    <ThermalScanSVG />
                    <div className="flex items-center gap-1.5 mt-2 px-1 text-[10px] text-[#32ff00] font-sans font-extrabold tracking-widest uppercase select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#32ff00] animate-pulse"></span>
                      {m.attachment.label}
                    </div>
                  </div>
                )}
              </div>

              {/* Timestamp metadata */}
              <span className={`font-mono text-[9px] opacity-60 px-1 mt-0.5 flex items-center gap-1 ${
                m.isAgent ? 'text-on-surface-variant self-start' : 'text-[#32ff00]'
              }`}>
                {!m.isAgent && <CheckCheck className="w-3.5 h-3.5 text-[#32ff00]" />}
                <span>{m.timestamp}</span>
              </span>
            </div>
          </div>
        ))}

        {/* Dynamic typing indicator */}
        {isTyping && (
          <div className="flex items-end gap-2.5 max-w-[85%] md:max-w-md self-start">
            <div className="w-7 h-7 rounded bg-surface-container border border-outline-variant text-[#baccaf] font-mono text-[9px] font-bold flex items-center justify-center shrink-0 mb-1 select-none">
              ПТ
            </div>
            <div className="bg-surface-container rounded-xl rounded-bl-none px-4 py-3 border border-outline-variant flex items-center gap-1.5 h-[38px]">
              <Loader2 className="w-3.5 h-3.5 text-[#32ff00] animate-spin" />
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#baccaf] animate-pulse">Петров пишет...</span>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </main>

      {/* Input controls footer */}
      <footer className="bg-surface-container border-t border-outline-variant/70 p-3 shrink-0 relative z-10">
        <div className="flex items-center gap-2.5 max-w-md mx-auto">
          {/* Attach files icons */}
          <button 
            onClick={() => alert("Интерфейс вложений заблокирован в аварийной зоне.")}
            className="shrink-0 h-10 w-10 flex items-center justify-center rounded border border-outline-variant/60 text-[#baccaf] hover:text-white cursor-pointer active:scale-95 bg-[#1c1b1b]"
          >
            <Paperclip className="w-4 h-4" />
          </button>

          {/* Form write fields text */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex-1 flex items-center relative"
          >
            <input 
              name="directive"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full bg-[#131313] text-on-surface font-sans text-xs border border-outline-variant/60 focus:border-[#32ff00] focus:ring-1 focus:ring-[#32ff00] rounded px-3.5 pr-9 py-2.5 transition-colors placeholder:text-outline" 
              placeholder="ВВЕДИТЕ ДИРЕКТИВУ..."
              type="text"
            />
            <button 
              type="button" 
              onClick={() => {
                alert("Распознавание речи: Активировано. Говорите...");
                setInputText("Разрешаю дезинфекцию эктоплазмы");
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-[#32ff00]"
            >
              <Mic className="w-4 h-4" />
            </button>
          </form>

          {/* Send submission button */}
          <button 
            onClick={handleSendMessage}
            className="shrink-0 h-10 w-10 flex items-center justify-center rounded bg-[#32ff00] text-black hover:bg-[#32ff00]/90 transition-all cursor-pointer active:scale-95"
          >
            <Send className="w-4.5 h-4.5" />
          </button>
        </div>
      </footer>

    </div>
  );
}
