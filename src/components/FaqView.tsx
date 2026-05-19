import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, AlertCircle, ShieldAlert } from 'lucide-react';

export default function FaqView() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      title: 'Что делать при виде призрака?',
      badge: 'Протокол альфа',
      severity: 'Высокая угроза',
      content: 'При визуальном контакте с сущностью I-III класса сохраняйте полную неподвижность. Резкие движения провоцируют агрессию эктоплазматических нестабильных структур.',
      points: [
        'Не пытайтесь вступить в речевой контакт с объектом.',
        'Медленно отступайте к ближайшему хорошо освещенному пространству/выходу, не отрывая зрительного контакта.',
        'При активации полтергейст-активности незамедлительно нажмите кнопку «ПАНИКА» в шапке тактического терминала.'
      ]
    },
    {
      title: 'Опасна ли слизь?',
      badge: 'Биохазард',
      severity: null,
      content: 'Эктоплазматический осадок (известный как «слизь») является токсичным побочным продуктом материализации призрака в пространстве. Он вызывает быструю коррозию металлов, органики и чувствительной электроники.',
      points: [
        'При попадании на открытую кожу промойте пораженное веко/кожу обильной водой с растворителем.',
        'Дожидайтесь бригады устранения дезинфекции.',
        'Не пытайтесь хранить образцы в негерметичной кухонной таре.'
      ]
    },
    {
      title: 'Как оплатить услуги?',
      badge: 'Бухгалтерия',
      severity: null,
      content: 'Оплата производится строго по завершению миссии и генерации акта нейтрализации. Никакой предоплаты для типовых вызовов первого порядка!',
      points: [
        'Мы принимаем крипто-рубли, безналичный расчет для юр.лиц, а также заблокированные ликвидные активы.',
        'Предусмотрены скидки 15% в случае сохранения целостности несущих стен и балок строения.'
      ]
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 animate-fade-in flex flex-col gap-6">
      
      {/* Alert Header Instructions Survival */}
      <div className="mb-2 border-l-4 border-[#32ff00] pl-4 relative p-4 bg-[#32ff00]/5 rounded-r-xl">
        <div className="absolute inset-0 bg-[#32ff00]/5 blur-xl -z-10 rounded-r-xl"></div>
        <h1 className="font-sans text-2xl md:text-4xl font-extrabold text-[#32ff00] uppercase mb-1.5 drop-shadow-[0_0_8px_rgba(50,255,0,0.3)]">
          Инструкция по выживанию
        </h1>
        <p className="font-sans text-xs md:text-sm text-on-surface-variant max-w-2xl leading-relaxed">
          Критически важная информация для клиентов в зоне активного паранормального заражения. Ознакомьтесь с протоколом безопасности до прибытия боевой группы.
        </p>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-3.5">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              className="bg-surface-container border border-outline-variant/60 rounded-xl overflow-hidden shadow-lg transition-all"
            >
              {/* Button Trigger Header click */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-4.5 focus:outline-none hover:bg-surface-container-high transition-colors text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-[#131313] border border-outline-variant/40 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-[#32ff00]" />
                  </div>
                  <h3 className="font-sans text-sm md:text-base font-extrabold text-white uppercase tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-on-surface-variant" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-on-surface-variant" />
                  )}
                </div>
              </button>

              {/* Collapsible Content */}
              {isOpen && (
                <div className="bg-surface-container-low/50 border-t border-outline-variant/30 p-5">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className="bg-[#32ff00]/10 border border-[#32ff00]/30 text-[#32ff00] font-mono text-[9px] px-2 py-0.5 rounded uppercase tracking-wider">
                      {item.badge}
                    </span>
                    {item.severity && (
                      <span className="bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-[9px] px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{item.severity}</span>
                      </span>
                    )}
                  </div>

                  <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed mb-4">
                    {item.content}
                  </p>

                  <ul className="list-disc list-inside font-sans text-xs text-on-surface-variant/90 space-y-2 pl-1-5 border-l border-outline-variant/40 ml-1">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Emergency Bottom Box warning alert instruction */}
      <section className="bg-red-950/20 border border-red-900/60 p-5 rounded-lg flex items-start gap-4 mt-4">
        <ShieldAlert className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-sans text-xs font-black text-red-500 uppercase tracking-wider mb-1">
            АКТИВАЦИЯ ТРЕВОЖНОГО РЕЖИМА ПАНИКА
          </h4>
          <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
            При пробое герметизации барьеров или непосредственной физической агрессии призраков немедленно активируйте аварийный маяк ПАНИКА в верхнем меню. Система отправит ближайшие координаты HQ в реальном времени.
          </p>
        </div>
      </section>

    </div>
  );
}
