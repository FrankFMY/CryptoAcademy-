import { Send } from "lucide-react";

const navLinks = [
  { label: "Программа", href: "#program" },
  { label: "Спикеры", href: "#speakers" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet to-cyan flex items-center justify-center">
                <span className="text-white font-bold text-xs">CA</span>
              </div>
              <span className="text-lg font-bold text-white font-heading">
                Crypto<span className="text-violet-light">Academy</span>
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Онлайн-школа по криптовалюте и трейдингу. Обучаем осознанному
              подходу к крипто-рынку.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Навигация</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-violet-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Контакты</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@cryptoacademy.ru"
                  className="text-sm text-text-muted hover:text-violet-light transition-colors"
                >
                  hello@cryptoacademy.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Send className="w-4 h-4 text-text-dim" />
                <a
                  href="#"
                  className="text-sm text-text-muted hover:text-violet-light transition-colors"
                >
                  Telegram-канал
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Документы</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-sm text-text-muted hover:text-violet-light transition-colors">
                  Оферта
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-muted hover:text-violet-light transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-dim">
            &copy; 2025 CryptoAcademy. Все права защищены.
          </p>
          <p className="text-xs text-text-dim text-center sm:text-right">
            Не является финансовой консультацией. Торговля криптовалютами
            сопряжена с рисками.
          </p>
        </div>
      </div>
    </footer>
  );
}
