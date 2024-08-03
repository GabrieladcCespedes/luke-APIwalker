import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Home from './Componentes/Home';
import Resource from './Componentes/Resource';

const HomeWithResource = () => {
  const { resource, id } = useParams();
  console.log("Params:", resource, id);  // Para verificar los parámetros
  return (
    <div>
      <Home />
      {resource && id && <Resource />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:resource/:id" element={<HomeWithResource />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


