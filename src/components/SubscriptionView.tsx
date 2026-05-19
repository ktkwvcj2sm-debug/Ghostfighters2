import React, { useState } from 'react';
import { Bolt, Key, Check, Copy, Share2, Shield, Gem, Users, CreditCard } from 'lucide-react';

interface SubscriptionProps {
  onUpgradePoints: () => void;
}

export default function SubscriptionView({ onUpgradePoints }: SubscriptionProps) {
  const [activeTab, setActiveTab] = useState<'ghost_plus' | 'referral'>('ghost_plus');
  const [isCopied, setIsCopied] = useState(false);
  const [invitedCount, setInvitedCount] = useState(0);
  const [subscribing, setSubscribing] = useState(false);

  const referralCode = "ECTO-77X-RU";

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleSubscribe = () => {
    setSubscribing(true);
    setTimeout(() => {
      setSubscribing(false);
      onUpgradePoints(); // will mock-add some points or activate bonus credits
      alert("Подписка GHOST+ успешно активирована! Вам начислено 1 000 экто-кредитов на счет.");
    }, 1500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-1 animate-fade-in flex flex-col gap-6">
      
      {/* Tab Navigation header */}
      <div className="flex border-b border-outline-variant/30 pb-1">
        <button
          onClick={() => setActiveTab('ghost_plus')}
          className={`flex-1 sm:flex-initial px-6 py-3 font-sans text-xs font-extrabold uppercase tracking-widest border-b-2 transition-all cursor-pointer ${
            activeTab === 'ghost_plus'
              ? 'border-[#32ff00] text-[#32ff00]'
              : 'border-transparent text-on-surface-variant hover:text-white'
          }`}
        >
          Подписка Ghost+
        </button>
        <button
          onClick={() => setActiveTab('referral')}
          className={`flex-1 sm:flex-initial px-6 py-3 font-sans text-xs font-extrabold uppercase tracking-widest border-b-2 transition-all cursor-pointer ${
            activeTab === 'referral'
              ? 'border-[#32ff00] text-[#32ff00]'
              : 'border-transparent text-on-surface-variant hover:text-white'
          }`}
        >
          Приведи друга (CO-OP)
        </button>
      </div>

      {activeTab === 'ghost_plus' ? (
        /* Layout 6: Ghost+ subscription page */
        <div className="flex flex-col gap-6">
          {/* Hero Banner upgraded system */}
          <section className="relative w-full rounded-xl overflow-hidden border border-outline-variant/60 bg-surface-container shadow-md">
            {/* Cyber Grid Background replacing old raster image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#121212] via-[#1c1b1b] to-black">
              {/* Radar sweep lines & digital matrix patterns */}
              <div className="absolute inset-0 grid-bg opacity-20"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#32ff00]/10 via-transparent to-transparent opacity-60"></div>
              {/* Floating cute vector ghosts on the sides */}
              <div className="absolute right-10 top-6 w-16 h-16 opacity-30 animate-bounce">
                <svg viewBox="0 0 100 100" fill="#32ff00">
                  <path d="M50,15 C35,15 30,30 30,50 C30,65 38,72 50,72 C62,72 70,65 70,50 C70,30 65,15 50,15 Z" />
                  <circle cx="42" cy="40" r="4" fill="black" />
                  <circle cx="58" cy="40" r="4" fill="black" />
                </svg>
              </div>
              <div className="absolute left-10 bottom-6 w-12 h-12 opacity-20 rotate-12">
                <svg viewBox="0 0 100 100" fill="#fe6b00">
                  <path d="M50,15 C35,15 30,30 30,50 C30,65 38,72 50,72 C62,72 70,65 70,50 C70,30 65,15 50,15 Z" />
                  <circle cx="42" cy="40" r="4" fill="black" />
                  <circle cx="58" cy="40" r="4" fill="black" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 scanline-overlay opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/60 to-transparent"></div>
            
            <div className="relative z-10 p-6 md:p-12 flex flex-col items-center text-center space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-surface/90 backdrop-blur-sm border border-[#32ff00] px-3.5 py-1 rounded font-sans text-[10px] font-extrabold text-[#32ff00] uppercase tracking-widest leading-none">
                <Bolt className="w-3.5 h-3.5 text-[#32ff00]" />
                <span>Апгрейд системы</span>
              </div>
              
              <h1 className="font-sans text-5xl md:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-md">
                Ghost<span className="text-[#32ff00]">+</span>
              </h1>
              
              <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-md mx-auto leading-relaxed">
                Разблокируйте ультимативное тактическое преимущество. Экстремальные протоколы зачистки для ветеранов паранормального подавления.
              </p>
            </div>
          </section>

          {/* Features Bento Grid */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Priority Sighting strip */}
            <div className="md:col-span-8 bg-surface-container rounded-xl border border-outline-variant/60 relative overflow-hidden group hover:border-[#32ff00]/40 transition-colors">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-hazard-stripes opacity-70"></div>
              <div className="p-6 pl-8 h-full flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="p-2.5 bg-orange-600/10 border border-orange-500/40 rounded-full text-[#fe6b00]">
                    <Shield className="w-4.5 h-4.5" />
                  </span>
                  <h3 className="font-sans text-base font-black text-white uppercase tracking-wider">Приоритетный вызов</h3>
                </div>
                <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  Ваш сигнал бедствия обходит стандартную очередь. Мгновенная реакция дежурной штурмовой опергруппы. Время - деньги, особенно когда вещи начинают левитировать сами по себе вопреки гравитации.
                </p>
              </div>
            </div>

            {/* Free Slime cleanup item */}
            <div className="md:col-span-4 bg-surface-container-low rounded-xl border border-[#32ff00]/20 relative overflow-hidden group hover:border-[#32ff00]/40 transition-colors">
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-[#32ff00]/5 rounded-full blur-2xl group-hover:bg-[#32ff00]/10 transition-all"></div>
              <div className="p-6 h-full flex flex-col justify-between relative z-10">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-[#32ff00]/10 border border-[#32ff00]/30 rounded flex items-center justify-center text-[#32ff00] mb-3">
                    <Bolt className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans text-base font-black text-[#32ff00] uppercase">Бесплатная химчистка</h3>
                </div>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  Эктоплазма въедается намертво? Владельцам подписки не нужно оплачивать дезинфекцию органических и паранормальных следов после операции.
                </p>
              </div>
            </div>

            {/* Access to gears */}
            <div className="md:col-span-12 bg-surface-container rounded-xl border border-outline-variant/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1c1b1b] rounded border border-outline-variant flex items-center justify-center text-[#32ff00] shrink-0">
                  <Gem className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans text-base font-black text-white uppercase mb-0.5">Доступ к эксклюзивному оборудованию</h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    От экспериментальных ядерных ловушек до прототипов протонных излучателей. Используйте технологии завтрашнего дня уже сегодня.
                  </p>
                </div>
              </div>
              <div className="font-sans text-[9px] font-extrabold text-[#baccaf] uppercase tracking-widest border border-outline-variant/80 px-3 py-1 rounded select-none shrink-0 bg-surface/50">
                Уровень доступа: Альфа
              </div>
            </div>
          </section>

          {/* Pricing CTA Box card */}
          <section className="bg-surface-container-high border border-outline-variant rounded-xl p-6 md:p-8 relative overflow-hidden">
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-sans text-[11px] font-extrabold text-on-surface-variant uppercase tracking-wider mb-1">
                  СТОИМОСТЬ ЛИЦЕНЗИИ
                </h4>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-sans text-4xl font-extrabold text-white tracking-widest">990₽</span>
                  <span className="font-sans text-xs text-on-surface-variant">/ мес</span>
                </div>
              </div>

              <button 
                onClick={handleSubscribe}
                disabled={subscribing}
                className="w-full sm:w-auto bg-[#32ff00] text-black font-sans text-xs font-extrabold uppercase tracking-widest px-8 py-4 rounded cursor-pointer hover:shadow-[0_0_15px_rgba(50,255,0,0.4)] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                <Bolt className="w-4 h-4" />
                <span>{subscribing ? 'Активируем...' : 'ОФОРМИТЬ ПОДПИСКУ'}</span>
              </button>
            </div>
          </section>
        </div>
      ) : (
        /* Layout 3: Referral "Invite a friend" Step list page */
        <div className="flex flex-col gap-6">
          {/* Top description grid co-op mode */}
          <section className="relative w-full rounded-xl overflow-hidden border border-outline-variant/60 bg-[#121212] p-6 lg:p-10 flex flex-col justify-between min-h-[220px]">
            <div className="absolute top-4 left-4 bg-surface/90 border border-outline-variant px-3 py-1 rounded text-[#32ff00] font-sans text-[10px] font-extrabold uppercase tracking-widest">
              CO-OP MODE
            </div>

            <div className="mt-8 max-w-2xl">
              <h2 className="font-sans text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">
                Приведи друга — <br/>
                <span className="text-[#32ff00]">изгони соседа вместе</span>
              </h2>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Паранормальная активность растет во всех спальных районах. Нам нужны новые смелые борцы. Поделись своим уникальным кодом допуска и получи <strong className="text-[#fe6b00]">500 экто-кредитов</strong> на модернизацию снаряжения при первой же их зачистке.
              </p>
            </div>
          </section>

          {/* Three steps layout step 1, 2, 3 horizontal/vert bento */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-surface-container p-5 rounded-lg border border-outline-variant/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#32ff00]"></div>
              <span className="font-sans font-extrabold text-[10px] text-[#32ff00] block mb-2 uppercase tracking-widest">ШАГ 1</span>
              <h4 className="font-sans text-sm font-black text-white uppercase mb-1">СКОПИРУЙ КОД</h4>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">Получите уникальную ссылку оператора снизу.</p>
            </div>

            <div className="bg-surface-container p-5 rounded-lg border border-outline-variant/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#32ff00] opacity-60"></div>
              <span className="font-sans font-extrabold text-[10px] text-on-surface-variant block mb-2 uppercase tracking-widest">ШАГ 2</span>
              <h4 className="font-sans text-sm font-black text-white uppercase mb-1">ДРУГ АКТИВИРУЕТ</h4>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">Рекрут вписывает код при первом входе в терминал.</p>
            </div>

            <div className="bg-surface-container p-5 rounded-lg border border-[#fe6b00]/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#fe6b00]"></div>
              <span className="font-sans font-extrabold text-[10px] text-[#fe6b00] block mb-2 uppercase tracking-widest">ШАГ 3</span>
              <h4 className="font-sans text-sm font-black text-white uppercase mb-1">КРЕДИТЫ НА СЧЕТ</h4>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">Оба бойца получают по 500 ₽ на закупки снаряжения.</p>
            </div>
          </section>

          {/* Action Code card copy bottom status */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Input Promo copy area */}
            <div className="md:col-span-8 bg-surface-container border border-outline-variant/60 rounded-xl p-6 flex flex-col justify-center">
              <h4 className="font-sans text-xs font-extrabold text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
                <Key className="w-4 h-4 text-[#32ff00]" />
                ТВОЙ КОД ДОПУСКА
              </h4>

              <div className="flex items-stretch h-12 w-full">
                <div className="flex-1 bg-[#131313] border-b border-[#32ff00]/60 flex items-center justify-center px-4 rounded-l-md border border-r-0 border-outline-variant/50">
                  <span className="font-mono text-base md:text-lg font-bold text-[#32ff00] tracking-[0.2em]">{referralCode}</span>
                </div>
                <button 
                  onClick={handleCopyCode}
                  className="bg-[#32ff00] text-black hover:bg-[#32ff00]/90 font-sans text-xs font-extrabold uppercase px-6 rounded-r-md flex items-center justify-center gap-1.5 cursor-pointer transition-colors shrink-0"
                >
                  {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{isCopied ? 'ГОТОВО' : 'КОПИЯ'}</span>
                </button>
              </div>

              {/* Quick messengers share links */}
              <div className="mt-6">
                <label className="font-sans text-[10px] uppercase tracking-widest text-[#baccaf] block mb-2.5 text-center opacity-70">
                  Быстрая передача в штаб связи
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => {
                      alert("Отправка в Telegram рекрутера...");
                      setInvitedCount(i => i + 1);
                    }}
                    className="cursor-pointer font-sans text-[10px] font-extrabold uppercase py-3 border border-outline-variant rounded bg-[#131313] text-white flex items-center justify-center gap-1.5 hover:border-[#32ff00]"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Telegram</span>
                  </button>
                  <button 
                    onClick={() => {
                      alert("Отправка в WhatsApp рекрутера...");
                      setInvitedCount(i => i + 1);
                    }}
                    className="cursor-pointer font-sans text-[10px] font-extrabold uppercase py-3 border border-outline-variant rounded bg-[#131313] text-white flex items-center justify-center gap-1.5 hover:border-[#32ff00]"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Invited counts status */}
            <div className="md:col-span-4 bg-surface-container-low border border-outline-variant/40 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h4 className="font-sans text-[10px] font-extrabold text-on-surface-variant uppercase tracking-wider">Привлечено агентов</h4>
                <div className="font-sans text-4xl font-extrabold text-white mt-1">{invitedCount}</div>
              </div>
              <div className="border-t border-outline-variant/30 pt-4 mt-4">
                <h4 className="font-sans text-[10px] font-extrabold text-on-surface-variant uppercase tracking-wider">Заработано бонусов</h4>
                <div className="font-sans text-4xl font-extrabold text-[#fe6b00]">{(invitedCount * 500).toLocaleString()} ₽</div>
              </div>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}
