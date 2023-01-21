import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Todos from './pages/todos/Todos';

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
