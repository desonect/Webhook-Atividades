import { useNavigate } from 'react-router-dom';
import { BookOpen, Heart, Star, Shield, Gift, Sparkles } from 'lucide-react';
import Logo from '../assets/Logo.png';

export default function App() {
  const navigate = useNavigate();

  const goToAtividades = () => {
    navigate('/atividades');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="Logo Atividades do Céu" className="h-12 w-12 object-contain" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Atividades do Céu
                </h1>
                <p className="text-sm text-amber-700">Atividades que edificam</p>
              </div>
            </div>
            <button
              onClick={goToAtividades}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Ver Atividades
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-yellow-100/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/90 px-4 py-2 rounded-full shadow-md border border-amber-200">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-semibold text-amber-800">Atividades Cristãs Premium</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Colorindo a Fé das</span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Nossas Crianças
                </span>
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed">
                Atividades para colorir que ensinam valores cristãos, desenvolvem habilidades
                e fortalecem a fé dos pequenos através da arte e criatividade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={goToAtividades}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Gift className="w-6 h-6" />
                  <span>Explorar Atividades</span>
                </button>
                <button
                  onClick={goToAtividades}
                  className="px-8 py-4 bg-white text-amber-700 rounded-full font-bold text-lg shadow-lg hover:shadow-xl border-2 border-amber-200 transform hover:scale-105 transition-all duration-200"
                >
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por Que Escolher Atividades do Céu?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Cada atividade é cuidadosamente desenvolvida para unir diversão, aprendizado e valores cristãos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Atividades Educativas",
                description: "Páginas para colorir cuidadosamente desenvolvidas para ensinar valores cristãos"
              },
              {
                icon: Heart,
                title: "Conteúdo com Amor",
                description: "Cada atividade é criada com carinho e dedicação para edificar as crianças"
              },
              {
                icon: Star,
                title: "Qualidade Premium",
                description: "Ilustrações de alta qualidade prontas para impressão e uso imediato"
              },
              {
                icon: Shield,
                title: "Valores Cristãos",
                description: "Fortalecendo a fé e ensinando princípios bíblicos de forma lúdica"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-amber-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Famílias Felizes" },
              { number: "1000+", label: "Atividades Criadas" },
              { number: "100%", label: "Satisfação" },
              { number: "24/7", label: "Acesso Ilimitado" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefícios para Seu Filho
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Mais do que atividades, são momentos de crescimento e aprendizado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Desenvolve criatividade e coordenação motora",
              "Ensina histórias e princípios bíblicos",
              "Momentos de qualidade em família",
              "Material seguro e apropriado para crianças",
              "Atividades que edificam o caráter cristão",
              "Recursos prontos para usar em casa ou igreja"
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform hover:translate-x-2 transition-all duration-300"
              >
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  ✓
                </div>
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O Que Dizem Nossas Famílias
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Centenas de pais e educadores confiam em nossas atividades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                text: "As atividades são maravilhosas! Meus filhos aprendem enquanto se divertem. Recomendo muito!"
              },
              {
                name: "João Santos",
                text: "Qualidade excepcional. Uso nas aulas da escola dominical e as crianças adoram."
              },
              {
                name: "Ana Costa",
                text: "Conteúdo edificante e bem elaborado. Vale cada centavo investido!"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg border border-amber-100"
              >
                <div className="flex space-x-1 text-amber-500 text-xl mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-amber-700">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-yellow-600" id="cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Comece a Colorir a Fé Hoje Mesmo
          </h3>
          <p className="text-xl text-white/95 mb-10 leading-relaxed">
            Junte-se a centenas de famílias que estão educando seus filhos
            com valores cristãos através de atividades criativas e edificantes.
          </p>
          <button
            onClick={goToAtividades}
            className="px-10 py-5 bg-white text-amber-700 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-3"
          >
            <Gift className="w-7 h-7" />
            <span>Explorar Atividades Agora</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent mb-2">
              Atividades do Céu
            </div>
            <p className="text-white/70">Atividades que edificam a fé das nossas crianças</p>
          </div>
          <div className="text-center pt-8 border-t border-white/10 text-white/60">
            <p>&copy; 2025 Atividades do Céu. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
