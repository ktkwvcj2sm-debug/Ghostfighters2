import React, { useState } from 'react';
import { CheckCircle2, DollarSign, PenTool, Clipboard, RefreshCw, Star } from 'lucide-react';
import { ActiveScreen } from '../types';

interface ReceiptProps {
  onNavigate: (screen: ActiveScreen) => void;
  onClearCartAndDeduct: (price: number) => void;
  points: number;
}

export default function ReceiptView({ onNavigate, onClearCartAndDeduct, points }: ReceiptProps) {
  const [paid, setPaid] = useState(false);
  const [reviewSent, setReviewSent] = useState(false);
  const [rating, setRating] = useState(5);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const priceToPay = 4990;

  const handlePay = () => {
    if (points < priceToPay) {
      alert("Недостаточно экто-кредитов на счету! Пожалуйста, пополните счет в вашем профиле.");
      onNavigate(ActiveScreen.PROFILE);
      return;
    }

    onClearCartAndDeduct(priceToPay);
    setPaid(true);
    alert("Оплата успешно списана с вашего экто-счета! Спасибо за службу.");
  };

  const handleSendReview = () => {
    setReviewSent(true);
    setTimeout(() => {
      setShowReviewModal(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-8 animate-fade-in flex flex-col justify-center items-center relative z-10">
      
      {/* Cyber Grid & Glowing ambient vector background */}
      <div className="absolute inset-0 pointer-events-none z-[-1] opacity-10 overflow-hidden rounded-xl bg-gradient-to-b from-[#121212] through-transparent to-black">
        <div className="absolute inset-0 grid-bg"></div>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#32ff00]/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#fe6b00]/10 rounded-full blur-2xl"></div>
      </div>

      {/* Success checklist header layout 5 */}
      <div className="text-center mb-6 shrink-0 z-10 select-none">
        <CheckCircle2 className="w-16 h-16 text-[#32ff00] mx-auto mb-3.5 ecto-glow-green" />
        <h1 className="font-sans text-2xl md:text-3.5xl font-black text-[#32ff00] tracking-tighter uppercase leading-none">
          ЗАЧИСТКА ЗАВЕРШЕНА
        </h1>
        <p className="font-sans text-xs text-on-surface-variant mt-2.5">Отчет о миссии сгенерирован.</p>
      </div>

      {/* Report Card */}
      <div className="w-full bg-[#1c1b1b]/80 backdrop-blur-md rounded-xl border border-outline-variant/60 p-6 shadow-2xl relative">
        
        {/* Status chip hazard edge */}
        <div className="flex items-center gap-3.5 mb-6 select-none">
          <div className="w-1.5 h-6 bg-orange-600 hazard-stripes"></div>
          <span className="font-sans text-[10px] font-extrabold text-[#fe6b00] uppercase tracking-widest leading-none">
            Статус: Нейтрализовано
          </span>
        </div>

        {/* Summary grid list */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center border-b border-outline-variant/30 pb-3 hover:bg-white/5 transition-colors px-2 -mx-2 rounded">
            <span className="font-sans text-xs sm:text-sm text-on-surface">Класс призрака</span>
            <span className="font-sans text-base font-extrabold text-white uppercase font-mono">Класс 3</span>
          </div>

          <div className="flex justify-between items-center border-b border-outline-variant/30 pb-3 hover:bg-white/5 transition-colors px-2 -mx-2 rounded">
            <span className="font-sans text-xs sm:text-sm text-on-surface">Удалено эктоплазмы</span>
            <span className="font-sans text-base font-extrabold text-[#32ff00] font-mono uppercase">50 л</span>
          </div>

          <div className="flex justify-between items-center pt-2 px-2 -mx-2 h-14">
            <span className="font-sans text-xs sm:text-sm text-on-surface">Стоимость услуг</span>
            <span className="font-sans text-2xl font-black text-[#32ff00] ecto-glow-green">
              {priceToPay.toLocaleString()} ₽
            </span>
          </div>
        </div>

        {/* Buttons checkout action list */}
        <div className="space-y-3">
          {paid ? (
            <div className="bg-[#32ff00]/10 border border-[#32ff00]/30 rounded p-4 text-center text-xs text-[#32ff00] font-extrabold uppercase tracking-widest">
              ОПЛАЧЕНО УСПЕШНО
            </div>
          ) : (
            <button 
              onClick={handlePay}
              className="w-full bg-[#32ff00] text-black font-sans text-xs font-extrabold uppercase py-4 rounded cursor-pointer hover:shadow-[0_0_15px_rgba(50,255,0,0.4)] active:scale-95 transition-all text-center flex items-center justify-center gap-2"
            >
              <DollarSign className="w-4.5 h-4.5" />
              <span>ОПЛАТИТЬ {priceToPay.toLocaleString()} ₽</span>
            </button>
          )}

          <button 
            onClick={() => setShowReviewModal(true)}
            className="w-full bg-transparent border border-outline-variant hover:border-[#fe6b00] text-[#baccaf] hover:text-[#fe6b00] font-sans text-xs font-extrabold uppercase py-4 rounded cursor-pointer active:scale-95 transition-all text-center flex items-center justify-center gap-2"
          >
            <PenTool className="w-4.5 h-4.5" />
            <span>ОСТАВИТЬ ОТЗЫВ</span>
          </button>
        </div>
      </div>

      {/* Back button */}
      <button 
        onClick={() => onNavigate(ActiveScreen.DASHBOARD)}
        className="mt-6 text-[10px] font-extrabold tracking-widest text-on-surface-variant hover:text-white uppercase transition-colors cursor-pointer flex items-center gap-1"
      >
        <RefreshCw className="w-3.5 h-3.5" />
        <span>Вернуться на пульт HQ</span>
      </button>

      {/* Review Dialog modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-[#121212] border border-[#fe6b00]/40 p-6 rounded-xl max-w-xs w-full shadow-2xl">
            <h3 className="font-sans text-base font-black text-white uppercase mb-4 text-center">ОЦЕНКА ОПЕРАЦИИ</h3>
            
            {reviewSent ? (
              <div className="text-center py-4 text-[#32ff00] font-bold text-xs uppercase tracking-widest animate-pulse">
                Спасибо за ваш отзыв!
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      key={star}
                      onClick={() => setRating(star)}
                      className="text-[#fe6b00] hover:scale-115 transition-transform cursor-pointer"
                    >
                      <Star className={`w-6 h-6 ${star <= rating ? 'fill-[#fe6b00]' : ''}`} />
                    </button>
                  ))}
                </div>

                <textarea 
                  className="w-full bg-black border border-outline-variant/60 focus:border-[#fe6b00] rounded p-2.5 text-xs text-white resize-none" 
                  placeholder="Ваши комментарии по зачистке..."
                  rows={2}
                />

                <div className="flex gap-2 justify-end mt-2">
                  <button 
                    onClick={() => setShowReviewModal(false)}
                    className="px-3.5 py-2 rounded text-[10px] font-extrabold uppercase border border-outline-variant text-[#baccaf] hover:text-white"
                  >
                    Отмена
                  </button>
                  <button 
                    onClick={handleSendReview}
                    className="px-4 py-2 rounded text-[10px] font-extrabold uppercase bg-[#fe6b00] hover:bg-orange-600 text-black"
                  >
                    Отправить
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
