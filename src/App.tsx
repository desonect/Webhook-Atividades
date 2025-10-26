import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import BaixarArquivos from './routes/BaixarArquivos';
import Atividades from './routes/Atividades';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/baixar-arquivos" element={<BaixarArquivos />} />
        <Route path="/atividades" element={<Atividades />} />
      </Routes>
    </Router>
  );
}

export default App;
