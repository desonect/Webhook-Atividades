import { BookOpen, Heart, Palette, Download, Star, Check, Sparkles, Shield, Clock } from 'lucide-react';
import heroImg from '../assets/sitefotos/colorindoologo.png';
import imagem2 from '../assets/sitefotos/doiscolorindo.png';
import colorida1 from '../assets/sitefotos/colorida1.jpg';
import colorida2 from '../assets/sitefotos/colorida2.png';
import colorida3 from '../assets/sitefotos/colorida3.png';
import colorida4 from '../assets/sitefotos/colorida4.png';
import colorida5 from '../assets/sitefotos/colorida5.png';
import colorido6 from '../assets/sitefotos/colorido6.png';
import colorido7 from '../assets/sitefotos/colorido7.png';
import colorido8 from '../assets/sitefotos/colorido8.png';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Animated Color Strip Top */}
      <div className="h-3 overflow-hidden relative">
        <div className="absolute inset-0 animate-slide">
          <div className="flex h-full" style={{ width: '400%' }}>
            {[...Array(8)].flatMap(() => [
              '#FFE5E0', '#D4EDF7', '#A8E0F5', '#F0D4E8',
              '#C8E8DC', '#FFF9D6', '#F0D4E8', '#FFE5E0',
              '#D4EDF7', '#A8E0F5', '#F0D4E8', '#C8E8DC'
            ]).map((color, i) => (
              <div
                key={i}
                className="h-full w-24 flex-shrink-0"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24 overflow-hidden">
        {/* Background Image for Mobile */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src={heroImg}
            alt="Criança colorindo atividades bíblicas"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/65 to-white/90"></div>
        </div>

        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-50 to-purple-50 px-5 py-2 rounded-full border border-pink-200">
              <Sparkles className="w-5 h-5 text-pink-500" />
              <span className="text-sm font-semibold text-pink-700">Material Digital Completo</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
              Atividades do Céu
            </h1>

            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
              +100 atividades bíblicas para colorir e se divertir — com brinde especial Bobbie Goods!
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed">
              Um material completo com atividades inspiradas nas mais lindas passagens da Bíblia, com desenhos criados para divertir, ensinar e desenvolver a fé das crianças. E ainda: ganhe de presente um pacote exclusivo de desenhos Bobbie Goods!
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Aqui, colorir é orar com as mãos. <br />A <strong className="text-orange-600 font-bold">Atividades do Céu</strong> desperta a fé e a criatividade das crianças.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-medium">Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-medium">Alta Resolução</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-medium">Bônus Inclusos</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="https://www.ggcheckout.com/checkout/v2/vE4qLqJz887Ej3cGVetH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl lg:text-2xl font-black px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 uppercase tracking-tight"
              >
                <Sparkles className="w-6 h-6" />
                Quero Garantir Agora
              </a>
              <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                Pagamento 100% Seguro • Acesso Imediato
              </p>
            </div>
          </div>

          {/* Right Image - Desktop Only */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl animate-float">
              <img
                src={heroImg}
                alt="Criança colorindo atividades bíblicas"
                className="w-full h-auto"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl opacity-20 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-44 h-44 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Animated Color Strip Bottom */}
      <div className="h-3 overflow-hidden relative">
        <div className="absolute inset-0 animate-slide">
          <div className="flex h-full" style={{ width: '400%' }}>
            {[...Array(8)].flatMap(() => [
              '#FFE5E0', '#D4EDF7', '#A8E0F5', '#F0D4E8',
              '#C8E8DC', '#FFF9D6', '#F0D4E8', '#FFE5E0',
              '#D4EDF7', '#A8E0F5', '#F0D4E8', '#C8E8DC'
            ]).map((color, i) => (
              <div
                key={i}
                className="h-full w-24 flex-shrink-0"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Diversão com fé
            </h2>
            <p className="text-xl text-gray-600">
              Conheça alguns dos encantadores desenhos para colorir que fazem parte do seu material
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { img: colorida1, position: 'center' },
              { img: colorida2, position: 'top' },
              { img: colorida3, position: 'top' },
              { img: colorida4, position: 'top' },
              { img: colorida5, position: 'bottom' },
              { img: colorido6, position: 'top' },
              { img: colorido7, position: 'top' },
              { img: colorido8, position: 'top' },
            ].map((item, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <img
                  src={item.img}
                  alt={`Exemplo de atividade ${i + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] ease-in-out"
                  style={{ objectPosition: item.position }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Alert Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white text-2xl font-black px-8 py-3 rounded-full shadow-lg mb-8 animate-pulse">
              🎁 BÔNUS ESPECIAL GRÁTIS
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <h3 className="text-3xl font-black text-gray-900">
                  🎁 Bônus Especial
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Você receberá imediatamente um material com atividades bíblicas e desenhos para colorir, tudo pronto para usar com as crianças. <br />Como <strong className="text-pink-600">presente exclusivo</strong>, você ganha o pacote Bobbie Goods, com ilustrações extras e super fofas para ampliar a diversão e a criatividade! 
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Mais de 100 páginas para imprimir e colorir</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Desenhos e lições que inspiram valores bíblicos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Perfeito para casa, igreja ou escola dominical</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Pacote Bobbie Goods incluso como presente especial</p>
                  </div>

                </div>

                <div className="pt-4">
                  <a
                    href="https://www.ggcheckout.com/checkout/v2/vE4qLqJz887Ej3cGVetH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <Sparkles className="w-5 h-5" />
                    Garantir Meu Bônus Agora
                  </a>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <img
                  src={imagem2}
                  alt="Bônus especial"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section id="oferta" className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-300 to-pink-400 rounded-full blur-3xl opacity-20 -z-10"></div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white text-lg font-bold px-6 py-2 rounded-full mb-6 animate-pulse">
              ⚡ OFERTA POR TEMPO LIMITADO
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Transforme o Tempo do Seu Filho
            </h2>

            <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Menos telas, mais edificação espiritual!
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-4">
              <p className="text-lg font-bold">
                🎁 INCLUSO: +100 PÁGINAS + BÔNUS BOBBIE GOODS
              </p>
            </div>

            <div className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <p className="text-gray-600 text-lg mb-2">De:</p>
                <p className="text-3xl text-gray-400 line-through mb-4">R$ 26,00</p>

                <div className="mb-6">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Por apenas:</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-black text-gray-900">R$</span>
                    <span className="text-7xl lg:text-8xl font-black bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">10</span>
                    <span className="text-4xl font-black text-gray-900">,99</span>
                  </div>
                </div>

                <div className="inline-block bg-green-100 text-green-700 px-6 py-2 rounded-full font-bold text-lg mb-8">
                  Economia de R$ 15,01(58% OFF)  
                </div>
              </div>

              <div className="max-w-md mx-auto space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Acesso imediato após o pagamento</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Material em alta resolução</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Acesso vitalício sem mensalidades</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">Bônus exclusivos inclusos</span>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://www.ggcheckout.com/checkout/v2/vE4qLqJz887Ej3cGVetH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl lg:text-3xl font-black px-12 py-5 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 mb-6 uppercase tracking-tight"
                >
                  Comprar com Desconto Agora
                </a>

                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="font-medium">Pagamento 100% Seguro</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">Acesso Imediato</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Como Funciona?
            </h2>
            <p className="text-xl text-gray-600">
              Simples, rápido e totalmente digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: <Download className="w-12 h-12" />,
                number: '1',
                title: 'E-mail e WhatsApp',
                text: 'Após a compra, você recebe imediatamente o acesso completo ao material digital em sua caixa de entrada e no seu WhatsApp.'
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                number: '2',
                title: 'Baixe as Atividades',
                text: 'Arquivos em PDF em alta resolução, com 100+ páginas de atividades coloríveis de passagens bíblicas prontas para imprimir e se divertir.'
              },
              {
                icon: <Check className="w-12 h-12" />,
                number: '3',
                title: 'Imprima Quando Quiser',
                text: 'Acesso vitalício! Imprima quantas vezes quiser, não precisa fazer tudo de uma vez. Sempre disponível para você.'
              },
              {
                icon: <Palette className="w-12 h-12" />,
                number: '4',
                title: 'Hora de Colorir!',
                text: 'Aproveite momentos especiais com seu pequeno, colorindo e aprendendo sobre as histórias bíblicas juntos.'
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-xl font-black text-purple-600">
                    {step.number}
                  </div>

                  <div className="text-white mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-white/90 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-6">
            Pronto para Transformar o Tempo do Seu Filho?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Junte-se a centenas de famílias que já escolheram qualidade e edificação espiritual
          </p>
          <a
            href="https://www.ggcheckout.com/checkout/v2/vE4qLqJz887Ej3cGVetH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 text-xl font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
          >
            Garantir Minha Oferta Especial
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Por Que Escolher as Atividades do Céu?
            </h2>
            <p className="text-xl text-gray-600 italic max-w-2xl mx-auto">
              "O temor do Senhor é o princípio da sabedoria" (Provérbios 9:10)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: <Heart className="w-14 h-14" />,
                gradient: 'from-pink-500 to-rose-500',
                title: 'Menos Telas, Mais Bíblia',
                text: 'Proporcione momentos longe das telas com atividades envolventes e edificantes. Cada ilustração promove criatividade, atenção e fé de forma saudável e prazerosa.'
              },
              {
                icon: <BookOpen className="w-14 h-14" />,
                gradient: 'from-blue-500 to-cyan-500',
                title: 'Ideal para Qualquer Ambiente',
                text: 'Perfeito para momentos em família, escolas cristãs, EBDs e ministérios infantis. Conteúdo 100% bíblico, seguro e apropriado para todas as idades.'
              },
              {
                icon: <Palette className="w-14 h-14" />,
                gradient: 'from-purple-500 to-indigo-500',
                title: 'Edificante e Terapêutico',
                text: 'Colorir cenas bíblicas se torna uma forma de oração silenciosa. As crianças refletem sobre verdades eternas enquanto acalmam a mente e fortalecem sua fé.'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-gray-600 italic max-w-3xl mx-auto">
              "Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho" (Salmo 119:105)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Atividades do Céu</h3>
              <p className="text-gray-400 leading-relaxed">
                Material educativo cristão de qualidade para desenvolvimento espiritual e criativo das crianças.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#oferta" className="text-gray-400 hover:text-pink-400 transition-colors">Oferta Especial</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Dúvidas Frequentes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-lg">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-lg">Instagram</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Atividades do Céu. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-slide {
          animation: slide 25s linear infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
