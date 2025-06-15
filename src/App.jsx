import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './componentes/Header';
import MainContent from './componentes/MainContent';
import Contacto from './componentes/Contacto';
import ContactoFormularioSlider from './componentes/ContactoFormularioSlider';
import PublicidadDebajo from './componentes/MainPublicidadSlider';
import Footer from './componentes/Footer';
import Tienda from './componentes/Tienda';
import CarritoCompleto from './componentes/TiendaCarritoCompra';
import { OfertasProvider } from './componentes/TiendaOfertasContext';
import { AuthProvider } from './componentes/SesionAuthContext';
import Login from './componentes/SesionLogin';
import Register from './componentes/SesionRegistrate';
import Logout from './componentes/SesionLogout';
import Musica from './componentes/Musica';
import MainWhatsappIcon from './componentes/MainWhatsappIcon';
import './assets/scss/estilo.scss';

const loadAudio = async (path) => {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('Audio not found');
    return path;
  } catch (error) {
    console.warn(`No se pudo cargar el sonido ${path}:`, error);
    return null;
  }
};

function App() {
  const [productCart, setProductCart] = useState([]);
  const [musicCart, setMusicCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [audioFiles, setAudioFiles] = useState({
    pop: null,
    rock: null
  });

  useEffect(() => {
    const loadSounds = async () => {
      const pop = await loadAudio('/audio/digital-pop.mp3');
      const rock = await loadAudio('/audio/synth-chord.mp3');
      setAudioFiles({ pop, rock });
    };
    loadSounds();
  }, []);

  const addProductToCart = (product) => {
    setProductCart([...productCart, product]);
    if (audioFiles.pop) {
      new Audio(audioFiles.pop).play().catch(e => console.error('Error al reproducir sonido:', e));
    }
  };

  const removeProductFromCart = (id) => {
    setProductCart(productCart.filter((product) => product.id !== id));
  };

  const addMusicToCart = (song) => {
    setMusicCart([...musicCart, song]);
    if (audioFiles.rock) {
      new Audio(audioFiles.rock).play().catch(e => console.error('Error al reproducir sonido:', e));
    }
  };

  const removeMusicFromCart = (id) => {
    setMusicCart(musicCart.filter((song) => song.id !== id));
  };

  const handlePagar = () => {
    Swal.fire({
      title: 'TRANSACCIÓN ENCRIPTADA',
      text: 'CONFIRMAR PAGO CON CRIPTOMONEDA?',
      icon: 'question',
      background: '#0a0a0a',
      color: '#00f0ff',
      showCancelButton: true,
      confirmButtonText: 'FIRMAR CONTRATO',
      cancelButtonText: 'CANCELAR',
      customClass: {
        popup: 'neo-popup',
        confirmButton: 'neo-button neo-button-primary',
        cancelButton: 'neo-button neo-button-secondary'
      },
      buttonsStyling: false,
      iconColor: '#ff00f0'
    }).then((result) => {
      if (result.isConfirmed) {
        window.open('https://www.paypal.com/paypalme/alegondramusic?country.x=AR&locale.x=es_XC', '_blank');
      }
    });
  };

  return (
    <Router>
      <AuthProvider>
        <OfertasProvider>
          <div className="neo-container">
            <div className="neo-scanline"></div>
            <div className="neo-grid-pattern"></div>
            
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div className="neo-divider"></div>
            
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/contacto" element={<><Contacto /><ContactoFormularioSlider /></>} />
              <Route path="/tienda" element={
                <Tienda 
                  setCart={setProductCart} 
                  cart={productCart} 
                  addToCart={addProductToCart} 
                  removeFromCart={removeProductFromCart} 
                  searchQuery={searchQuery} 
                  setSearchQuery={setSearchQuery} 
                />} 
              />
              <Route path="/carrito" element={
                <CarritoCompleto 
                  cart={productCart} 
                  removeFromCart={removeProductFromCart} 
                  handlePagar={handlePagar} 
                />} 
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/musica" element={
                <Musica 
                  setCart={setMusicCart} 
                  cart={musicCart} 
                  addToCart={addMusicToCart} 
                  removeFromCart={removeMusicFromCart} 
                  searchQuery={searchQuery} 
                  setSearchQuery={setSearchQuery} 
                />} 
              />
            </Routes>
            
            <div className="neo-divider"></div>
            <PublicidadDebajo />
            <Footer />
            <MainWhatsappIcon />
          </div>
        </OfertasProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;