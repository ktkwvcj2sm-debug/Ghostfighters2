import React, { useState } from 'react';
import { motion } from 'motion/react';
import ghostLogo from './assets/images/regenerated_image_1779219484919.png';
import danilAvatar from './assets/images/danil_avatar_1779221116406.png';
import { 
  ActiveScreen, 
  AgentProfile 
} from './types';
import Dashboard from './components/Dashboard';
import MapScreen from './components/MapScreen';
import GearCatalog from './components/GearCatalog';
import AgentProfileView from './components/AgentProfileView';
import BestiaryView from './components/BestiaryView';
import SubscriptionView from './components/SubscriptionView';
import FaqView from './components/FaqView';
import BusterChat from './components/BusterChat';
import ReqDispatch from './components/ReqDispatch';
import ReceiptView from './components/ReceiptView';
import TaxesView from './components/TaxesView';
import RadarView from './components/RadarView';
import SettingsView from './components/SettingsView';

const KORESH_JOKES = [
  "Эй, гроза простыней! Твой пылесос опять разрядился? Сюда иди!",
  "О, великий охотник! А почему у тебя руки трясутся? Углядел тень домашнего кота?",
  "GF-783-RU... Хм, твой позывной расшифровывается как 'Глупый Фантазер'?",
  "Слышь, профи, а если я тебе в кофе плюну эктоплазмой, ты тоже побежишь жаловаться в HQ?",
  "Радар показывает 87% покрытия, а КПД твоего мозга — около 3%. Совпадение?",
  "Ты так долго тупишь в этот экран, что я успел состариться... Дважды за эту загробную жизнь!",
  "Беги, глупец! Ой, то есть, лови меня, если догонишь своим неповоротливым пальцем!",
  "Кореш прибыл заценить твои шмотки. Честно? Отстой какой-то, даже полтергейсты на свалке такое не наденут.",
  "Эй! Твой счет за налоги больше, чем вся твоя добыча за год! Пиши пропало!",
  "Слышь, гроза аномалий, у тебя на плече паук... А нет, это просто кусок твоей харизмы отвалился.",
  "Глянь на датчики, там привидение! А нет, это твоё лицо в выключенном мониторе тебя напугало.",
  "Кореш здесь! Твоя плазма-пушка заряжена детским восторгом? Потому что против меня она бессильна!",
  "М-да, сурово выглядишь с этой пушкой. А сам наверняка до сих пор спишь с включенным ночником?",
  "Я пролетал мимо твоего склада... Твое 'секретное оружие' — это просто модифицированный фен для волос?",
  "Охотник на привидений? Ха-ха-ха! Ты даже муху из супа выгнать без паники не сможешь!"
];

const KORESH_PATHS = [
  {
    inX: [-20, 15, 50, 38],
    inY: [110, 80, 35, 48],
    outX: [38, 25, -10, -30],
    outY: [48, 70, 45, 20],
    inRotate: [45, 120, -45, 0],
    outRotate: [0, -30, 60, 90]
  },
  {
    inX: [120, 85, 45, 62],
    inY: [-20, 30, 75, 52],
    outX: [62, 80, 105, 130],
    outY: [52, 30, 40, 80],
    inRotate: [-90, -45, 45, 0],
    outRotate: [0, 45, -30, -90]
  },
  {
    inX: [125, 95, 70, 50],
    inY: [15, 60, 25, 40],
    outX: [50, 65, 85, 125],
    outY: [40, 15, -10, -25],
    inRotate: [120, 240, 45, 0],
    outRotate: [0, -45, -120, -240]
  }
];

import { 
  Grid2X2, 
  Skull, 
  Home, 
  Map, 
  Pocket, 
  UserSquare2, 
  AlertOctagon, 
  Wifi, 
  FileCheck,
  Settings,
  X,
  Compass
} from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>(ActiveScreen.DASHBOARD);
  const [isPanic, setIsPanic] = useState(false);
  const [agentPoints, setAgentPoints] = useState(14500);
  const [caughtCount, setCaughtCount] = useState(42);
  const [profile, setProfile] = useState<AgentProfile>({
    callsign: 'Охотник_Спб',
    email: 'agent.spb@ghostfighters.ru',
    location: 'Санкт-Петербург, Зона 4',
    points: 14500,
    idCode: 'GF-783-RU',
    avatar: danilAvatar
  });

  const [koreshState, setKoreshState] = useState({
    isActive: false,
    stage: 'flying-in' as 'flying-in' | 'talking' | 'flying-out',
    joke: '',
    pathIndex: 0
  });

  const spawnKoresh = () => {
    setKoreshState(prev => {
      if (prev.isActive) return prev;
      const randomJoke = KORESH_JOKES[Math.floor(Math.random() * KORESH_JOKES.length)];
      const randomPath = Math.floor(Math.random() * KORESH_PATHS.length);
      return {
        isActive: true,
        stage: 'flying-in',
        joke: randomJoke,
        pathIndex: randomPath
      };
    });
  };

  const triggerKoreshManually = () => {
    setKoreshState(prev => {
      const randomJoke = KORESH_JOKES[Math.floor(Math.random() * KORESH_JOKES.length)];
      const randomPath = Math.floor(Math.random() * KORESH_PATHS.length);
      return {
        isActive: true,
        stage: prev.isActive && prev.stage === 'talking' ? 'talking' : 'flying-in',
        joke: randomJoke,
        pathIndex: randomPath
      };
    });
  };

  const dismissKoresh = () => {
    setKoreshState(prev => {
      if (!prev.isActive || prev.stage === 'flying-out') return prev;
      return { ...prev, stage: 'flying-out' };
    });
  };

  // Randomized automatic spawning of Koresh
  React.useEffect(() => {
    const triggerRandomly = () => {
      const delay = Math.random() * (45000 - 20000) + 20000; // 20 to 45 seconds
      timerId = setTimeout(() => {
        spawnKoresh();
        triggerRandomly();
      }, delay);
    };

    let timerId = setTimeout(() => {
      triggerRandomly();
    }, 15000); // Wait 15s initially

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  // Auto-dismissal of Koresh after 9 seconds of talking
  React.useEffect(() => {
    if (koreshState.isActive && koreshState.stage === 'talking') {
      const dismissTimer = setTimeout(() => {
        dismissKoresh();
      }, 9000);
      return () => clearTimeout(dismissTimer);
    }
  }, [koreshState.isActive, koreshState.stage]);

  const handlePanicToggle = () => {
    setIsPanic(current => !current);
    if (!isPanic) {
      alert("ВНИМАНИЕ: АВАРИЙНЫЙ РЕЖИМ 'ПАНИКА' АКТИВИРОВАН! СИГНАЛ SOS ПЕРЕДАН БЛИЖАЙШЕМУ ЭКИПАЖУ. РАДАР ПЕРЕВЕДЕН В РЕЖИМ ЖИВОГО СКАНА.");
      setActiveScreen(ActiveScreen.RADAR);
    } else {
      alert("Режим экстренной тревоги штатно дезактивирован.");
    }
  };

  const handleNavigate = (screen: ActiveScreen) => {
    setActiveScreen(screen);
  };

  const handleAddItemToCart = (price: number) => {
    // subtract price or add item
    alert(`Оборудование зарезервировано на сумму ${price.toLocaleString()} ₽. Подтвердите заказ на кассе оплат.`);
    setActiveScreen(ActiveScreen.RECEIPT);
  };

  const handleDeductPointsAndClear = (price: number) => {
    setAgentPoints(prev => Math.max(0, prev - price));
  };

  const handleIncrementCatches = (threatType: string) => {
    setCaughtCount(prev => prev + 1);
    alert(`Рапорт об аномалии типа "${threatType}" отправлен! Ожидайте выезда опергруппы.`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#131313] text-[#e5e2e1] overflow-x-hidden pb-20 md:pb-0">
      
      {/* Absolute Emergency Alarm Panic header highlights */}
      {isPanic && (
        <div className="bg-red-600 text-black py-1.5 px-4 font-sans text-[10px] font-extrabold text-center uppercase tracking-widest hazard-stripes select-none z-50 sticky top-0 animate-pulse">
          Экстренная паника активна • Штурмовая опергруппа выслана на ваши координаты
        </div>
      )}

      {/* Global Header / TopNavBar */}
      <header className="flex justify-between items-center w-full px-4 md:px-8 h-16 z-40 bg-surface/90 backdrop-blur-md border-b border-outline-variant/60 sticky top-0 select-none">
        <div className="flex items-center gap-3">
          <Grid2X2 
            onClick={() => setActiveScreen(ActiveScreen.SETTINGS)}
            className="w-5.5 h-5.5 text-[#32ff00] hover:scale-105 transition-transform cursor-pointer" 
          />
          <h1 
            onClick={() => setActiveScreen(ActiveScreen.DASHBOARD)}
            className="font-sans text-base md:text-xl font-black text-[#32ff00] italic uppercase tracking-tighter cursor-pointer"
          >
            ГХОСТФАЙТЕРС
          </h1>
        </div>

        {/* Desktop top bar layout selections */}
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => setActiveScreen(ActiveScreen.DASHBOARD)}
            className={`font-sans text-[11px] font-extrabold uppercase tracking-widest cursor-pointer transition-colors ${
              activeScreen === ActiveScreen.DASHBOARD ? 'text-[#32ff00]' : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Главная
          </button>
          <button 
            onClick={() => setActiveScreen(ActiveScreen.MAP)}
            className={`font-sans text-[11px] font-extrabold uppercase tracking-widest cursor-pointer transition-colors ${
              activeScreen === ActiveScreen.MAP ? 'text-[#32ff00]' : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Карта
          </button>
          <button 
            onClick={() => setActiveScreen(ActiveScreen.GEAR)}
            className={`font-sans text-[11px] font-extrabold uppercase tracking-widest cursor-pointer transition-colors ${
              activeScreen === ActiveScreen.GEAR ? 'text-[#32ff00]' : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Склад
          </button>
          <button 
            onClick={() => setActiveScreen(ActiveScreen.BESTIARY)}
            className={`font-sans text-[11px] font-extrabold uppercase tracking-widest cursor-pointer transition-colors ${
              activeScreen === ActiveScreen.BESTIARY ? 'text-[#32ff00]' : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Бестиарий
          </button>
          <button 
            onClick={() => setActiveScreen(ActiveScreen.FAQ)}
            className={`font-sans text-[11px] font-extrabold uppercase tracking-widest cursor-pointer transition-colors ${
              activeScreen === ActiveScreen.FAQ ? 'text-[#32ff00]' : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Инструкции
          </button>
          <button 
            onClick={() => setActiveScreen(ActiveScreen.PROFILE)}
            className={`font-sans text-[11px] font-extrabold uppercase tracking-widest cursor-pointer transition-colors ${
              activeScreen === ActiveScreen.PROFILE ? 'text-[#32ff00]' : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Профиль
          </button>
        </nav>

        {/* Panic red trigger button layout */}
        <div id="header-action-group" className="flex items-center gap-2">
          <button 
            id="summon-koresh-btn"
            onClick={triggerKoreshManually}
            className="font-sans text-[10px] font-extrabold uppercase tracking-widest px-3 py-2 border border-[#32ff00]/40 text-[#32ff00] rounded cursor-pointer transition-all hover:bg-[#32ff00]/10 flex items-center gap-1.5"
            title="Призвать Кореша"
          >
            <span>👻</span>
            <span className="hidden sm:inline">КОРЕШ</span>
          </button>
          
          <button 
            id="panic-panic-btn"
            onClick={handlePanicToggle}
            className={`font-sans text-[10px] font-extrabold uppercase tracking-widest px-4 py-2 border rounded cursor-pointer transition-all ${
              isPanic 
                ? 'bg-red-650 border-red-500 text-white animate-pulse' 
                : 'border-[#fe6b00]/80 text-[#fe6b00] hover:bg-[#fe6b00]/10'
            }`}
          >
            {isPanic ? 'ТРЕВОГА' : 'ПАНИКА'}
          </button>
        </div>
      </header>

      {/* Main Container screen routes switcher */}
      <main className="flex-grow max-w-7xl mx-auto w-full p-4 md:p-8 shrink-0 relative">
        {(() => {
          switch (activeScreen) {
            case ActiveScreen.DASHBOARD:
              return <Dashboard onNavigate={handleNavigate} caughtCount={caughtCount} />;
            case ActiveScreen.MAP:
              return <MapScreen onNavigate={handleNavigate} />;
            case ActiveScreen.GEAR:
              return <GearCatalog onAddItem={handleAddItemToCart} agentPoints={agentPoints} />;
            case ActiveScreen.PROFILE:
              return (
                <AgentProfileView 
                  points={agentPoints} 
                  onModifyPoints={(diff) => setAgentPoints(p => Math.max(0, p + diff))} 
                  onNavigate={handleNavigate} 
                />
              );
            case ActiveScreen.SETTINGS:
              return <SettingsView profile={profile} onUpdateProfile={setProfile} onNavigate={handleNavigate} />;
            case ActiveScreen.BESTIARY:
              return <BestiaryView />;
            case ActiveScreen.SUBSCRIPTION:
              return <SubscriptionView onUpgradePoints={() => setAgentPoints(p => p + 1000)} />;
            case ActiveScreen.FAQ:
              return <FaqView />;
            case ActiveScreen.CHAT:
              return <BusterChat onNavigate={handleNavigate} />;
            case ActiveScreen.REQ_DISPATCH:
              return <ReqDispatch onNavigate={handleNavigate} onAddCatchMessage={handleIncrementCatches} />;
            case ActiveScreen.RECEIPT:
              return (
                <ReceiptView 
                  onNavigate={handleNavigate} 
                  onClearCartAndDeduct={handleDeductPointsAndClear} 
                  points={agentPoints} 
                />
              );
            case ActiveScreen.TAXES:
              return <TaxesView onNavigate={handleNavigate} />;
            case ActiveScreen.RADAR:
              return <RadarView onNavigate={handleNavigate} />;
            default:
              return <Dashboard onNavigate={handleNavigate} caughtCount={caughtCount} />;
          }
        })()}
      </main>

      {/* Mobile only Bottom Navigation menu bar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-45 bg-[#1c1b1b]/95 backdrop-blur-lg border-t border-outline-variant/60 flex items-center justify-around py-3 px-2 rounded-t-xl select-none shadow-[0_-4px_16px_rgba(0,0,0,0.4)]">
        <button 
          onClick={() => setActiveScreen(ActiveScreen.DASHBOARD)}
          className={`flex flex-col items-center justify-center cursor-pointer ${
            activeScreen === ActiveScreen.DASHBOARD ? 'text-[#32ff00]' : 'text-on-surface-variant opacity-60'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="font-sans text-[9px] uppercase tracking-wider mt-1">Главная</span>
        </button>

        <button 
          onClick={() => setActiveScreen(ActiveScreen.MAP)}
          className={`flex flex-col items-center justify-center cursor-pointer ${
            activeScreen === ActiveScreen.MAP || activeScreen === ActiveScreen.RADAR ? 'text-[#32ff00]' : 'text-on-surface-variant opacity-60'
          }`}
        >
          <Map className="w-5 h-5" />
          <span className="font-sans text-[9px] uppercase tracking-wider mt-1">Карта</span>
        </button>

        <button 
          onClick={() => setActiveScreen(ActiveScreen.GEAR)}
          className={`flex flex-col items-center justify-center cursor-pointer ${
            activeScreen === ActiveScreen.GEAR ? 'text-[#32ff00]' : 'text-on-surface-variant opacity-60'
          }`}
        >
          <Pocket className="w-5 h-5" />
          <span className="font-sans text-[9px] uppercase tracking-wider mt-1">Склад</span>
        </button>

        <button 
          onClick={() => setActiveScreen(ActiveScreen.BESTIARY)}
          className={`flex flex-col items-center justify-center cursor-pointer ${
            activeScreen === ActiveScreen.BESTIARY ? 'text-[#32ff00]' : 'text-on-surface-variant opacity-60'
          }`}
        >
          <Skull className="w-5 h-5" />
          <span className="font-sans text-[9px] uppercase tracking-wider mt-1">Бестиарий</span>
        </button>

        <button 
          onClick={() => setActiveScreen(ActiveScreen.PROFILE)}
          className={`flex flex-col items-center justify-center cursor-pointer ${
            activeScreen === ActiveScreen.PROFILE ? 'text-[#32ff00]' : 'text-on-surface-variant opacity-60'
          }`}
        >
          <UserSquare2 className="w-5 h-5" />
          <span className="font-sans text-[9px] uppercase tracking-wider mt-1">Профиль</span>
        </button>
      </nav>

      {/* FLOATING GHOST "КОРЕШ" (KORESH) ENCOUNTER STAGE MACHINE */}
      {koreshState.isActive && (() => {
        const activePath = KORESH_PATHS[koreshState.pathIndex];
        const talkX = activePath.inX[activePath.inX.length - 1];
        const talkY = activePath.inY[activePath.inY.length - 1];

        if (koreshState.stage === 'flying-in') {
          return (
            <motion.div
              id="koresh-flight-in"
              className="fixed z-50 pointer-events-auto flex flex-col items-center justify-center select-none"
              style={{
                width: '140px',
                height: '140px',
                left: 0,
                top: 0,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{
                x: `${activePath.inX[0]}vw`,
                y: `${activePath.inY[0]}vh`,
                rotate: activePath.inRotate[0]
              }}
              animate={{
                x: activePath.inX.map(v => `${v}vw`),
                y: activePath.inY.map(v => `${v}vh`),
                rotate: activePath.inRotate
              }}
              transition={{
                duration: 2.2,
                ease: "easeOut"
              }}
              onAnimationComplete={() => {
                setKoreshState(prev => ({ ...prev, stage: 'talking' }));
              }}
            >
              <img 
                id="koresh-img-in"
                src={ghostLogo} 
                alt="Кореш" 
                className="w-20 h-20 object-contain drop-shadow-[0_0_20px_rgba(50,255,0,0.85)] filter hue-rotate-45" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          );
        }

        if (koreshState.stage === 'talking') {
          return (
            <motion.div
              id="koresh-floating-talk"
              className="fixed z-50 pointer-events-auto flex flex-col items-center justify-center"
              style={{
                width: '140px',
                height: '140px',
                left: 0,
                top: 0,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                x: `${talkX}vw`,
                y: [`${talkY}vh`, `${talkY - 3}vh`, `${talkY}vh`],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
            >
              {/* SPEECH BUBBLE */}
              <div 
                id="koresh-speech-dialog"
                className="absolute -top-[125px] left-1/2 -translate-x-1/2 w-64 bg-[#141414]/95 border-2 border-[#32ff00] rounded-xl p-3.5 shadow-[0_0_25px_rgba(50,255,0,0.55)] text-xs font-mono select-none"
              >
                <div className="flex justify-between items-center border-b border-[#32ff00]/30 pb-1.5 mb-2">
                  <span className="text-[#32ff00] font-black tracking-wider text-[10px] uppercase">👻 КОРЕШ_v2.0</span>
                  <span className="text-[8px] bg-[#32ff00]/20 text-[#32ff00] px-1.5 py-0.5 rounded font-bold uppercase animate-pulse">ТРОЛЛЬ</span>
                </div>
                <p className="text-white leading-relaxed font-sans font-semibold text-[11px] select-text">
                  "{koreshState.joke}"
                </p>
                <div className="flex justify-between items-center mt-2.5 pt-1.5 border-t border-[#32ff00]/20 text-[8px] text-[#32ff00]/60 font-black uppercase tracking-wider">
                  <span>Не поймаешь!</span>
                  <button 
                    id="koresh-dismiss-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      dismissKoresh();
                    }}
                    className="text-red-400 hover:text-red-300 font-bold cursor-pointer transition-colors"
                  >
                    ПРОГНАТЬ ×
                  </button>
                </div>
                {/* Speech tail pointed downwards */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#141414] border-r-2 border-b-2 border-[#32ff00] rotate-45"></div>
              </div>

              {/* GHOST RENDER */}
              <img 
                id="koresh-img-talk"
                src={ghostLogo} 
                alt="Кореш" 
                className="w-20 h-20 object-contain drop-shadow-[0_0_25px_rgba(50,255,0,0.9)] cursor-pointer hover:scale-110 transition-transform filter hue-rotate-45" 
                referrerPolicy="no-referrer"
                onClick={triggerKoreshManually}
                title="Нажми чтобы поменять шутку!"
              />
            </motion.div>
          );
        }

        if (koreshState.stage === 'flying-out') {
          return (
            <motion.div
              id="koresh-flight-out"
              className="fixed z-50 pointer-events-auto flex flex-col items-center justify-center select-none"
              style={{
                width: '140px',
                height: '140px',
                left: 0,
                top: 0,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{
                x: `${talkX}vw`,
                y: `${talkY}vh`,
                rotate: 0
              }}
              animate={{
                x: activePath.outX.map(v => `${v}vw`),
                y: activePath.outY.map(v => `${v}vh`),
                rotate: activePath.outRotate
              }}
              transition={{
                duration: 1.8,
                ease: "easeIn"
              }}
              onAnimationComplete={() => {
                setKoreshState({
                  isActive: false,
                  stage: 'flying-in',
                  joke: '',
                  pathIndex: 0
                });
              }}
            >
              <img 
                id="koresh-img-out"
                src={ghostLogo} 
                alt="Кореш" 
                className="w-20 h-20 object-contain drop-shadow-[0_0_25px_rgba(50,255,0,0.85)] filter hue-rotate-45" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          );
        }

        return null;
      })()}

    </div>
  );
}
