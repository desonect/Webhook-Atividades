import { useEffect, useState } from 'react';
import { Download, CheckCircle, Heart, FileText } from 'lucide-react';

type ArquivosMap = {
  [key: string]: string[];
};

const categorias = [
  { nome: 'Atividades', chave: 'atividades' },
  { nome: 'Desenhos', chave: 'desenhos' },
  { nome: 'Bobbie Goods', chave: 'bobbiegoods' },
];

function App() {
  const [arquivos, setArquivos] = useState<ArquivosMap>({});
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/arquivos.json')
      .then(res => res.json())
      .then(data => setArquivos(data))
      .catch(err => console.error('Erro ao carregar arquivos:', err))
      .finally(() => setLoading(false));
  }, []);

  const handleDownload = (categoria: string, nome: string) => {
    const link = document.createElement('a');
    link.href = `/arquivos/${categoria}/${encodeURIComponent(nome)}`;
    link.download = nome;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadTodos = (categoria: string) => {
    arquivos[categoria]?.forEach(nome => handleDownload(categoria, nome));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full">
        {/* Cabeçalho */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Obrigado pela sua compra!
          </h1>

          <p className="text-center text-gray-600 mb-8 text-lg">
            Selecione o tipo de material que deseja baixar.
          </p>

          {/* Filtros flutuantes */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categorias.map(cat => (
              <button
                key={cat.chave}
                onClick={() =>
                  setCategoriaSelecionada(prev => (prev === cat.chave ? null : cat.chave))
                }
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                  categoriaSelecionada === cat.chave
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white scale-105'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat.nome}
              </button>
            ))}
          </div>

          {/* Área de arquivos */}
          {loading ? (
            <p className="text-center text-gray-500 py-4">Carregando arquivos...</p>
          ) : categoriaSelecionada && arquivos[categoriaSelecionada]?.length ? (
            <>
              <div className="grid gap-6 md:grid-cols-2">
                {arquivos[categoriaSelecionada].map((nome, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-transform transform hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center">
                      <FileText className="w-12 h-12 text-blue-600 mb-3" />
                      <p className="text-gray-800 font-medium text-center break-all mb-3">
                        {nome}
                      </p>
                      <button
                        onClick={() => handleDownload(categoriaSelecionada, nome)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full flex items-center gap-2"
                      >
                        <Download className="w-5 h-5" />
                        Baixar
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botão baixar todos */}
              <div className="text-center mt-10">
                <button
                  onClick={() => handleDownloadTodos(categoriaSelecionada)}
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
                >
                  <Download className="w-6 h-6 inline mr-2" />
                  Baixar Todos ({arquivos[categoriaSelecionada].length})
                </button>
              </div>
            </>
          ) : (
            categoriaSelecionada && (
              <p className="text-center text-gray-500">
                Nenhum arquivo encontrado em "{categoriaSelecionada}".
              </p>
            )
          )}
        </div>

        {/* Rodapé */}
        <div className="text-center text-sm text-gray-600 pb-10">
          <p>
            Feito com <Heart className="w-5 h-5 text-red-500 fill-current inline mx-1" /> para edificar
            a fé das crianças.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
