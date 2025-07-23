import './App.css';
import Intro1 from './components/Intro1';
import { Intro2, Intro5 } from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Promo from './components/Promo';
import Image from './components/Image';
import ImageSource from "./components/numberofpages.png";
import Button from './components/Button';
import { Routes, Route, Link } from 'react-router-dom';
import Video from './components/Video';
import { ObjetivosPage } from './components/List';
import Login from './components/Login';
import { useDarkMode } from './DarkModeContext';

Amplify.configure(awsExports);

function Header(){
  const { darkmode, toggleDarkMode } = useDarkMode()
  let title = "Welcome to My App";
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={toggleDarkMode}>
        Cambiar a {darkmode ? 'Claro' : 'Oscuro'}
      </button>
    </div>
  );
}

function App(){
  const loginMode = true;
  return (    
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/promo">Promo</Link>
          <Link to="/video">Video</Link>
          <Link to="/list">List of Items</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <div>
              <div>
                <Header />
              </div>
              <div>
                <Nav />
              </div>
              <div>
                <Promo />
              </div>
              <div className="responsive-image">
                <Image src={ImageSource}/>
              </div>
              <div>
                <Button />
              </div>
              <div>
                <Intro1 />
                <Intro2 />
                <Intro5 />
                <Intro3 />
              </div>
              <div>
                <Footer />
              </div>
            </div>
          }
        />
          <Route path="/promo" element={<Promo />} />
          <Route path="/video" element={<Video />} />
          <Route path="/list" element={<ObjetivosPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
  );
}

export default App;
