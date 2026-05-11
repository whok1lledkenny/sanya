import { useState } from 'react';

export default function MasterSeverLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('YOUR_GOOGLE_SCRIPT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      setFormData({
        name: '',
        phone: ''
      });

      setIsModalOpen(false);
      setIsSuccessOpen(true);
    } catch (error) {
      console.error(error);
      alert('Ошибка отправки заявки');
    }
  };

  return (
    <div className="bg-white text-[#243988] font-sans overflow-hidden">
      {/* Montserrat Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

        * {
          font-family: 'Montserrat', sans-serif;
        }

        .hero-bg {
          background-image:
            linear-gradient(rgba(36,57,136,0.9), rgba(36,57,136,0.92)),
            url('/back.png');
          background-size: cover;
          background-position: center;
        }

        .glass {
          backdrop-filter: blur(10px);
          background: rgba(255,255,255,0.08);
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur border-b border-[#99EDFE]/20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo2.png"
              alt="Мастер Север"
              className="h-10 sm:h-14 object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wide">
            <a href="#services" className="hover:text-[#00D4FF] transition-colors">
              Услуги
            </a>
            <a href="#advantages" className="hover:text-[#00D4FF] transition-colors">
              Преимущества
            </a>
            <a href="#catalog" className="hover:text-[#00D4FF] transition-colors">
              Кондиционеры
            </a>
            <a href="#contacts" className="hover:text-[#00D4FF] transition-colors">
              Контакты
            </a>
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden sm:block bg-[#00D4FF] hover:bg-[#99EDFE] text-[#243988] font-bold px-6 py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-cyan-300/40"
          >
            Оставить заявку
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-bg min-h-screen flex items-center relative pt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#243988]/95 to-[#243988]/70"></div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#00D4FF]/15 border border-[#00D4FF]/30 rounded-full px-5 py-2 text-white text-sm mb-8">
              <div className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse"></div>
              Продажа и установка кондиционеров
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-white mb-8">
              Комфортный
              <span className="block text-[#00D4FF]">климат</span>
              для вашего дома
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-10">
              Подберем, доставим и установим кондиционер под ваш бюджет.
              Работаем быстро, аккуратно и с гарантией качества.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#00D4FF] hover:bg-[#99EDFE] text-[#243988] font-bold px-8 py-5 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105"
              >
                Получить консультацию
              </button>

              <button className="glass border border-white/20 text-white font-bold px-8 py-5 rounded-2xl hover:bg-white/10 transition-all duration-300">
                Смотреть каталог
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-12 sm:mt-16 max-w-lg">
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-[#00D4FF]">7+</div>
                <div className="text-white/70 text-sm mt-2">
                  лет опыта
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-4xl font-bold text-[#00D4FF]">1200+</div>
                <div className="text-white/70 text-sm mt-2">
                  установок
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-4xl font-bold text-[#00D4FF]">24ч</div>
                <div className="text-white/70 text-sm mt-2">
                  быстрый выезд
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center">
            <div className="absolute w-96 h-96 bg-[#00D4FF]/20 blur-3xl rounded-full"></div>

            <div className="relative glass border border-white/10 rounded-[40px] p-8 w-full max-w-md shadow-2xl">
              <div className="bg-white rounded-3xl p-6 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#243988]">
                      Сплит-система
                    </h3>
                    <p className="text-[#243988]/60 mt-1">
                      Инверторная технология
                    </p>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center text-3xl">
                    ❄️
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-[#243988]/60">Площадь</span>
                    <span className="font-bold">до 35 м²</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[#243988]/60">Установка</span>
                    <span className="font-bold">от 1 дня</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[#243988]/60">Гарантия</span>
                    <span className="font-bold">3 года</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#243988] hover:bg-[#1d2f73] text-white py-4 rounded-2xl font-bold transition-colors"
                >
                  Подобрать модель
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="text-[#00D4FF] font-bold uppercase tracking-[0.2em] mb-4">
              Наши услуги
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Полный цикл работ
            </h2>

            <p className="text-[#243988]/70 text-lg max-w-2xl mx-auto leading-relaxed">
              От подбора оборудования до профессионального монтажа и обслуживания.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: '🧊',
                title: 'Продажа кондиционеров',
                text: 'Подбор техники под площадь и бюджет клиента.'
              },
              {
                icon: '🛠️',
                title: 'Монтаж',
                text: 'Профессиональная установка с гарантией качества.'
              },
              {
                icon: '🔧',
                title: 'Обслуживание',
                text: 'Чистка и техническое обслуживание систем.'
              },
              {
                icon: '⚡',
                title: 'Срочный выезд',
                text: 'Оперативный выезд мастера в течение суток.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group border border-[#99EDFE]/30 rounded-[32px] p-8 hover:bg-[#243988] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-20 h-20 rounded-3xl bg-[#00D4FF]/10 flex items-center justify-center text-4xl mb-8 group-hover:bg-white/10 transition-colors">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#243988]/70 leading-relaxed group-hover:text-white/70 transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-28 bg-[#f7fbff]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-[#00D4FF] font-bold uppercase tracking-[0.2em] mb-4">
              Почему мы
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-10">
              Работаем быстро,
              <span className="block text-[#00D4FF]">чисто и надежно</span>
            </h2>

            <div className="space-y-6">
              {[
                'Бесплатный подбор оборудования',
                'Гарантия на монтаж и оборудование',
                'Аккуратная установка без лишней пыли',
                'Только проверенные бренды и материалы'
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-[#99EDFE]/20"
                >
                  <div className="w-8 h-8 rounded-full bg-[#00D4FF] flex items-center justify-center text-white font-bold shrink-0">
                    ✓
                  </div>

                  <p className="text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#00D4FF]/20 blur-3xl rounded-full"></div>

            <div className="relative bg-[#243988] rounded-[40px] overflow-hidden shadow-2xl">
              <div
                className="h-[550px] bg-cover bg-center"
                style={{ backgroundImage: "url('/back.png')" }}
              >
                <div className="h-full w-full bg-[#243988]/70 flex items-end p-10">
                  <div className="glass rounded-3xl p-8 border border-white/10 w-full">
                    <div className="text-[#00D4FF] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                      98%
                    </div>

                    <p className="text-white text-xl leading-relaxed">
                      клиентов рекомендуют нас своим друзьям и знакомым.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <div className="text-[#00D4FF] font-bold uppercase tracking-[0.2em] mb-4">
                Каталог
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Популярные модели
              </h2>
            </div>

            
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                name: 'Mitsubishi Electric',
                area: 'до 25 м²',
                price: 'от 59 900 ₽'
              },
              {
                name: 'Haier Flexis',
                area: 'до 35 м²',
                price: 'от 47 500 ₽'
              },
              {
                name: 'Daikin Sensira',
                area: 'до 50 м²',
                price: 'от 73 900 ₽'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group border border-[#99EDFE]/20 rounded-[36px] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="bg-[#243988] h-64 relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-40 bg-cover bg-center"
                    style={{ backgroundImage: "url('/back.png')" }}
                  ></div>

                  <div className="relative h-full flex items-center justify-center text-8xl">
                    ❄️
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-[#00D4FF]/10 text-[#243988] px-4 py-2 rounded-full text-sm font-bold">
                      {item.area}
                    </span>

                    <div className="text-[#00D4FF] text-xl">
                      ★★★★★
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold mb-4 leading-tight">
                    {item.name}
                  </h3>

                  <div className="mt-10">
                    <div>
                      <div className="text-sm text-[#243988]/50 mb-1">
                        Стоимость
                      </div>

                      <div className="text-2xl font-bold text-[#243988]">
                        {item.price}
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto mx-8 lg:mx-auto bg-[#243988] rounded-[48px] overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: "url('/back.png')" }}
          ></div>

          <div className="relative p-10 md:p-20 text-center">
            <div className="text-[#00D4FF] font-bold uppercase tracking-[0.2em] mb-6">
              Бесплатная консультация
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-8 max-w-4xl mx-auto">
              Поможем подобрать идеальный кондиционер
            </h2>

            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              Оставьте заявку и получите бесплатную консультацию специалиста.
            </p>

            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Ваш номер телефона"
                className="flex-1 px-6 py-5 rounded-2xl bg-white text-[#243988] outline-none"
              />

              <button className="bg-[#00D4FF] hover:bg-[#99EDFE] text-[#243988] font-bold px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105">
                Отправить
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-[#243988] text-white py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 grid md:grid-cols-3 gap-12">
          <div>
            <img
              src="/logo2.png"
              alt="Мастер Север"
              className="h-16 object-contain brightness-0 invert mb-6"
            />

            <p className="text-white/70 leading-relaxed max-w-sm">
              Продажа, установка и обслуживание кондиционеров для квартир, домов и офисов.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Контакты
            </h3>

            <div className="space-y-4 text-white/70">
              <p>+7 (999) 123-45-67</p>
              <p>info@mastersever.ru</p>
              <p>АДРЕС МОЖНО СЮДА</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Режим работы
            </h3>

            <div className="space-y-4 text-white/70">
              <p>Пн — Сб: 09:00 — 21:00</p>
              <p>Воскресенье: выходной</p>
              <p>Выезд мастера — ежедневно</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
          <p>© 2026 Мастер Север. Все права защищены.</p>
          <p></p>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-6">
          <div className="relative bg-white rounded-[32px] p-6 sm:p-8 md:p-10 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#243988]/10 hover:bg-[#243988]/20 transition-colors text-[#243988] text-xl font-bold"
            >
              ×
            </button>

            <div className="mb-8">
              <div className="text-[#00D4FF] font-bold uppercase tracking-[0.2em] text-sm mb-4">
                Оставить заявку
              </div>

              <h2 className="text-4xl font-bold text-[#243988] leading-tight mb-4">
                Мы свяжемся с вами
              </h2>

              <p className="text-[#243988]/70 leading-relaxed">
                Оставьте имя и номер телефона, и наш специалист перезвонит вам для консультации.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-6 py-5 rounded-2xl border border-[#99EDFE]/40 outline-none focus:border-[#00D4FF] text-[#243988]"
              />

              <input
                type="tel"
                placeholder="Номер телефона"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full px-6 py-5 rounded-2xl border border-[#99EDFE]/40 outline-none focus:border-[#00D4FF] text-[#243988]"
              />

              <button
                type="submit"
                className="w-full bg-[#243988] hover:bg-[#1d2f73] text-white font-bold py-5 rounded-2xl transition-all duration-300"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      )}

      {isSuccessOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm px-6">
          <div className="relative bg-white rounded-[32px] p-8 md:p-10 max-w-md w-full shadow-2xl text-center">
            <button
              onClick={() => setIsSuccessOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#243988]/10 hover:bg-[#243988]/20 transition-colors text-[#243988] text-xl font-bold"
            >
              ×
            </button>

            <div className="w-24 h-24 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-5xl mx-auto mb-8">
              ✓
            </div>

            <div className="text-[#00D4FF] font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Заявка отправлена
            </div>

            <h2 className="text-4xl font-bold text-[#243988] leading-tight mb-6">
              Спасибо!
            </h2>

            <p className="text-[#243988]/70 leading-relaxed text-lg mb-8">
              Мы свяжемся с вами в ближайшее время для консультации.
            </p>

            <button
              onClick={() => setIsSuccessOpen(false)}
              className="bg-[#243988] hover:bg-[#1d2f73] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
