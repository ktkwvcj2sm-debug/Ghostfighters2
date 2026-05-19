import React, { useState } from 'react';
import { MapPin, Navigation, Compass, AlertCircle, FileText } from 'lucide-react';
import { ActiveScreen } from '../types';

interface DispatchProps {
  onNavigate: (screen: ActiveScreen) => void;
  onAddCatchMessage: (desc: string) => void;
}

export default function ReqDispatch({ onNavigate, onAddCatchMessage }: DispatchProps) {
  const [address, setAddress] = useState('');
  const [threatType, setThreatType] = useState('');
  const [details, setDetails] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) {
      setErrorMsg('Укажите локацию аномалии!');
      return;
    }
    if (!threatType) {
      setErrorMsg('Выберите тип угрозы!');
      return;
    }

    onAddCatchMessage(threatType); // adds to the catch counter/history
    onNavigate(ActiveScreen.RADAR); // switches to radar tracker!
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-8 animate-fade-in flex flex-col gap-6">
      
      {/* Layout 15: Warning call protocol header */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container border-l-2 border-red-500 w-max select-none rounded-r">
          <AlertCircle className="w-4 h-4 text-red-500 animate-pulse" />
          <span className="font-sans text-[10px] font-extrabold text-red-500 uppercase tracking-widest leading-none">
            Протокол вызова
          </span>
        </div>
        <h1 className="font-sans text-2xl md:text-3.5xl font-black text-[#32ff00] uppercase tracking-tighter">
          ЗАПРОС ВМЕШАТЕЛЬСТВА
        </h1>
        <p className="font-sans text-xs text-on-surface-variant max-w-sm">
          Заполните данные формы для немедленной тактической диспетчеризации боевой группы.
        </p>
      </div>

      {/* Actual tactical Form */}
      <form 
        onSubmit={handleSubmit}
        className="bg-[#121212] border border-outline-variant/50 p-6 rounded-xl flex flex-col gap-6.5 shadow-2xl relative"
      >
        <div className="absolute top-0 right-0 w-24 h-3 hazard-stripes opacity-30 rounded-tr-xl pointer-events-none"></div>

        {errorMsg && (
          <div className="bg-red-950/20 border border-red-900/60 p-3 rounded-lg text-xs text-red-400 font-bold uppercase tracking-wider">
            {errorMsg}
          </div>
        )}

        {/* Address input */}
        <div className="flex flex-col gap-2">
          <label className="font-sans text-[10px] font-extrabold text-on-surface-variant uppercase flex items-center gap-2 tracking-wider">
            <MapPin className="w-4 h-4 text-[#32ff00]" />
            <span>Локация аномалии</span>
          </label>
          <input 
            className="w-full bg-[#030303] text-on-surface font-sans text-sm border-0 border-b-2 border-outline-variant focus:border-[#32ff00] focus:ring-0 px-3 py-2.5 transition-colors placeholder:text-surface-variant" 
            placeholder="Улица, дом, квартира/офис" 
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setErrorMsg('');
            }}
            type="text"
          />
        </div>

        {/* Select Ghost dropdown options */}
        <div className="flex flex-col gap-2">
          <label className="font-sans text-[10px] font-extrabold text-on-surface-variant uppercase flex items-center gap-2 tracking-wider">
            <Navigation className="w-4 h-4 text-[#32ff00]" />
            <span>Классификация угрозы</span>
          </label>
          <div className="relative">
            <select 
              className="w-full bg-[#030303] text-on-surface font-sans text-sm border-0 border-b-2 border-outline-variant focus:border-[#32ff00] focus:ring-0 px-3 py-2.5 appearance-none cursor-pointer transition-all"
              value={threatType}
              onChange={(e) => {
                setThreatType(e.target.value);
                setErrorMsg('');
              }}
            >
              <option value="" disabled>Выберите предварительный тип</option>
              <option value="Слаймер">Слаймер (Остаточная слизь)</option>
              <option value="Полтергейст">Полтергейст (Кинетическая активность)</option>
              <option value="Теневая сущность">Теневая сущность (Класс 3)</option>
              <option value="Блуждающий пар">Блуждающий пар 5-го класса (Критический)</option>
            </select>
          </div>
        </div>

        {/* Details Textarea */}
        <div className="flex flex-col gap-2">
          <label className="font-sans text-[10px] font-extrabold text-on-surface-variant uppercase flex items-center gap-2 tracking-wider">
            <FileText className="w-4 h-4 text-[#32ff00]" />
            <span>Симптоматика и детали</span>
          </label>
          <textarea 
            className="w-full bg-[#030303] text-on-surface font-sans text-xs sm:text-sm border-0 border-b-2 border-outline-variant focus:border-[#32ff00] focus:ring-0 px-3 py-2.5 resize-none transition-colors placeholder:text-surface-variant" 
            placeholder="Движущаяся мебель, запах серы, резкие перепады температуры, плавающие огни..." 
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={3}
          />
        </div>

        {/* Submit coordinate parameters */}
        <button 
          type="submit"
          className="mt-4 w-full bg-[#32ff00] text-black cursor-pointer font-sans text-[11px] font-extrabold uppercase py-4 px-6 rounded flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(50,255,0,0.5)] active:scale-95 transition-all text-center"
        >
          <Compass className="w-5 h-5 animate-[spin_4s_linear_infinite]" />
          <span>ПОДТВЕРДИТЬ КООРДИНАТЫ</span>
        </button>
      </form>

    </div>
  );
}
