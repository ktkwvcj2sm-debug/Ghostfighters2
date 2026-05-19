import React, { useState } from 'react';
import { Badge, Shield, Bell, Key, LogOut, CheckSquare, Square, ToggleLeft, ToggleRight, User, Eye, EyeOff } from 'lucide-react';
import { AgentProfile, ActiveScreen } from '../types';

interface SettingsProps {
  profile: AgentProfile;
  onUpdateProfile: (p: AgentProfile) => void;
  onNavigate: (screen: ActiveScreen) => void;
}

export default function SettingsView({ profile, onUpdateProfile, onNavigate }: SettingsProps) {
  const [callsign, setCallsign] = useState(profile.callsign);
  const [email, setEmail] = useState(profile.email);
  const [location, setLocation] = useState(profile.location);

  // States for notifications toggling checkboxes
  const [alertEcto, setAlertEcto] = useState(true);
  const [localActivity, setLocalActivity] = useState(false);
  const [equipStatus, setEquipStatus] = useState(true);

  // States for security parameters
  const [twoFactor, setTwoFactor] = useState(true);
  const [visibility, setVisibility] = useState(true);

  const handleSave = () => {
    onUpdateProfile({
      ...profile,
      callsign,
      email,
      location
    });
    alert("Настройки тактического профиля Агента успешно сохранены в реестре!");
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-1 animate-fade-in flex flex-col gap-6">
      
      {/* Header section identification layout 4 */}
      <section className="flex items-center gap-4 border-b border-outline-variant/30 pb-5">
        <div className="w-14 h-14 rounded-full bg-surface-container-high border border-outline-variant/60 flex items-center justify-center overflow-hidden shrink-0">
          <User className="w-7 h-7 text-[#baccaf]" />
        </div>
        <div>
          <h2 className="font-sans text-xl md:text-2xl font-black text-white uppercase leading-none">Настройки Агента</h2>
          <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mt-1.5 leading-none">
            ИДЕНТИФИКАТОР: {profile.idCode}
          </p>
        </div>
      </section>

      {/* Main settings grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Profile Details Card block */}
        <section className="bg-[#121212] border border-[#1a1a1a] rounded-xl p-5 flex flex-col justify-between relative overflow-hidden group hover:border-[#32ff00]/25 transition-colors">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-surface-variant group-hover:bg-[#32ff00] transition-all"></div>
          
          <div className="mb-4">
            <div className="flex items-center gap-2 text-white mb-5 select-none pl-1">
              <Badge className="w-5 h-5 text-[#32ff00]" />
              <h3 className="font-sans text-sm font-extrabold uppercase">Профиль агента</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="font-sans text-[10px] font-extrabold text-on-surface-variant mb-1 ml-1 block uppercase tracking-wider">Позывной</label>
                <input 
                  value={callsign}
                  onChange={(e) => setCallsign(e.target.value)}
                  className="w-full bg-[#030303] border-b border-[#32ff00] text-sm text-[13px] text-white p-2 focus:outline-none focus:bg-[#1c1b1b] transition-colors rounded-t font-sans" 
                  type="text"
                />
              </div>

              <div>
                <label className="font-sans text-[10px] font-extrabold text-on-surface-variant mb-1 ml-1 block uppercase tracking-wider">Резервный терминал (Email)</label>
                <input 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#030303] border-b border-[#32ff00] text-sm text-[13px] text-white p-2 focus:outline-none focus:bg-[#1c1b1b] transition-colors rounded-t font-sans" 
                  type="email"
                />
              </div>

              <div>
                <label className="font-sans text-[10px] font-extrabold text-on-surface-variant mb-1 ml-1 block uppercase tracking-wider">Локация базирования</label>
                <input 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#030303] border-b border-[#32ff00] text-sm text-[13px] text-white p-2 focus:outline-none focus:bg-[#1c1b1b] transition-colors rounded-t font-sans" 
                  type="text"
                />
              </div>
            </div>
          </div>

          <button 
            onClick={handleSave}
            className="w-full bg-[#32ff00] text-black cursor-pointer text-xs font-semibold py-3 rounded-lg hover:shadow-[0_0_10px_rgba(50,255,0,0.35)] mt-4 uppercase tracking-widest font-sans"
          >
            Сохранить данные
          </button>
        </section>

        {/* Tactical Notifications with customized checkboxes layout 4 */}
        <section className="bg-[#121212] border border-[#1a1a1a] rounded-xl p-5 flex flex-col relative overflow-hidden group hover:border-orange-500/20 transition-colors">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-surface-variant group-hover:bg-[#fe6b00] transition-all"></div>
          
          <div className="flex items-center gap-2 text-white mb-5 select-none pl-1">
            <Bell className="w-5 h-5 text-[#fe6b00]" />
            <h3 className="font-sans text-sm font-extrabold uppercase">Оповещения</h3>
          </div>

          <div className="space-y-4">
            {/* Custom check box 1 */}
            <label className="flex items-start gap-3.5 cursor-pointer p-2 hover:bg-[#1c1b1b] rounded transition-colors group/item relative">
              <div 
                onClick={() => setAlertEcto(!alertEcto)} 
                className="mt-0.5 text-[#32ff00] cursor-pointer"
              >
                {alertEcto ? (
                  <CheckSquare className="w-5 h-5 fill-[#32ff00]/10 text-[#32ff00] border-0" />
                ) : (
                  <Square className="w-5 h-5 text-on-surface-variant" />
                )}
              </div>
              <div>
                <span className="block font-sans text-xs sm:text-sm text-white font-extrabold uppercase tracking-wide group-hover/item:text-[#32ff00] transition-colors select-none">
                  Экстренные Экто-Тревоги
                </span>
                <span className="block font-sans text-[10px] text-on-surface-variant mt-1">
                  Немедленные пуш-уведомления о появлении сущностей класса А
                </span>
              </div>
            </label>

            {/* Custom check box 2 */}
            <label className="flex items-start gap-3.5 cursor-pointer p-2 hover:bg-[#1c1b1b] rounded transition-colors group/item relative">
              <div 
                onClick={() => setLocalActivity(!localActivity)} 
                className="mt-0.5 text-[#32ff00] cursor-pointer"
              >
                {localActivity ? (
                  <CheckSquare className="w-5 h-5 fill-[#32ff00]/10 text-[#32ff00] border-0" />
                ) : (
                  <Square className="w-5 h-5 text-on-surface-variant" />
                )}
              </div>
              <div>
                <span className="block font-sans text-xs sm:text-sm text-white font-extrabold uppercase tracking-wide group-hover/item:text-[#32ff00] transition-colors select-none font-bold">
                  Локальная Активность
                </span>
                <span className="block font-sans text-[10px] text-on-surface-variant mt-1">
                  Ежедневный сводный рапорт по выбранной радио-зоне
                </span>
              </div>
            </label>

            {/* Custom check box 3 */}
            <label className="flex items-start gap-3.5 cursor-pointer p-2 hover:bg-[#1c1b1b] rounded transition-colors group/item relative">
              <div 
                onClick={() => setEquipStatus(!equipStatus)} 
                className="mt-0.5 text-[#32ff00] cursor-pointer"
              >
                {equipStatus ? (
                  <CheckSquare className="w-5 h-5 fill-[#32ff00]/10 text-[#32ff00] border-0" />
                ) : (
                  <Square className="w-5 h-5 text-on-surface-variant" />
                )}
              </div>
              <div>
                <span className="block font-sans text-xs sm:text-sm text-white font-extrabold uppercase tracking-wide group-hover/item:text-[#32ff00] transition-colors select-none">
                  Статус Оборудования
                </span>
                <span className="block font-sans text-[10px] text-on-surface-variant mt-1">
                  Предупреждения о критически низком заряде экто-ловушек
                </span>
              </div>
            </label>
          </div>
        </section>

        {/* Security & Privacy Card half width */}
        <section className="bg-[#121212] border border-[#1a1a1a] rounded-xl p-5 flex flex-col gap-5 relative overflow-hidden md:col-span-2 group hover:border-[#32ff00]/10 transition-colors">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-surface-variant group-hover:bg-[#32ff00]/40 transition-all"></div>
          
          <div className="flex items-center gap-2 text-white mb-1 pl-1">
            <Shield className="w-5 h-5 text-[#baccaf]" />
            <h3 className="font-sans text-sm font-extrabold uppercase">Безопасность и Приватность</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <button 
                onClick={() => alert("Код доступа временно заблокирован по протоколу Альфа-7. Сбросьте в штабе.")}
                className="w-full flex justify-between items-center bg-surface-container-low border border-outline-variant/60 p-4.5 rounded text-left hover:bg-surface-container hover:border-[#32ff00] transition-colors cursor-pointer group/btn"
              >
                <span className="font-sans text-xs sm:text-sm text-white font-bold group-hover/btn:text-[#32ff00] transition-all">
                  Изменить код доступа
                </span>
                <Key className="w-4 h-4 text-on-surface-variant" />
              </button>

              <button 
                onClick={() => setTwoFactor(!twoFactor)}
                className="w-full flex justify-between items-center bg-surface-container-low border border-outline-variant/60 p-4.5 rounded text-left hover:bg-surface-container hover:border-[#32ff00] transition-colors cursor-pointer group/btn"
              >
                <span className="font-sans text-xs sm:text-sm text-white font-bold group-hover/btn:text-[#32ff00] transition-all">
                  Двухфакторная авторизация
                </span>
                <span className="text-[10px] font-extrabold text-[#32ff00] bg-[#32ff00]/10 px-2.5 py-1 rounded select-none uppercase tracking-wider">
                  {twoFactor ? 'ВКЛ' : 'ВЫКЛ'}
                </span>
              </button>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => setVisibility(!visibility)}
                className="w-full flex justify-between items-center bg-surface-container-low border border-outline-variant/60 p-4.5 rounded text-left hover:bg-surface-container hover:border-[#32ff00] transition-colors cursor-pointer group/btn"
              >
                <span className="font-sans text-xs sm:text-sm text-white font-bold group-hover/btn:text-[#32ff00] transition-all">
                  Видимость локации в рапорте
                </span>
                {visibility ? (
                  <Eye className="w-4 h-4 text-[#32ff00]" />
                ) : (
                  <EyeOff className="w-4 h-4 text-on-surface-variant" />
                )}
              </button>

              <button 
                onClick={() => {
                  alert("Вывод истории сессий... Сбоев нет.");
                  onNavigate(ActiveScreen.CHAT);
                }}
                className="w-full flex justify-between items-center bg-surface-container-low border border-outline-variant/60 p-4.5 rounded text-left hover:bg-surface-container hover:border-[#32ff00] transition-colors cursor-pointer group/btn"
              >
                <span className="font-sans text-xs sm:text-sm text-white font-bold group-hover/btn:text-[#32ff00] transition-all">
                  Связаться с Агентом связи
                </span>
                <span className="text-[9px] font-mono text-on-surface-variant hover:text-[#32ff00] transition-colors font-extrabold uppercase block tracking-wider">ЧАТ →</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Log Out button section */}
      <div className="pt-4 flex justify-center">
        <button 
          onClick={() => {
            const ok = confirm("Действительно прервать сессию связи и отключиться от тактического сервера ГХОСТФАЙТЕРС?");
            if (ok) {
              setCallsign("Охотник_Спб");
              setEmail("agent.spb@ghostfighters.ru");
              setLocation("Санкт-Петербург, Зона 4");
              alert("Сессия терминала аннулирована. Перезапуск...");
              onNavigate(ActiveScreen.DASHBOARD);
            }
          }}
          className="bg-transparent border border-red-500 hover:bg-red-500 hover:text-black font-sans text-xs font-extrabold uppercase px-8 py-3.5 rounded cursor-pointer transition-all flex items-center justify-center gap-2"
        >
          <LogOut className="w-4.5 h-4.5" />
          <span>Отключиться от терминала</span>
        </button>
      </div>

    </div>
  );
}
