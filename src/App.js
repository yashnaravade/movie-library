
import './App.css';
import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Search from './components/Search';
import Login from './views/Login';

function App() {
  return (
    <div className="main-container">
      <h1 className="text-center text-light">Movie Library</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
