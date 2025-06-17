import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './componentes/Header';
import MainContent from './componentes/MainContent';
import Contacto from './componentes/Contacto';
import PublicidadDebajo from './componentes/MainPublicidadSlider';
import Footer from './componentes/Footer';
import Tienda from './componentes/Tienda';
import CarritoCompleto from './componentes/TiendaCarritoCompra';
import { AuthProvider } from './componentes/SesionAuthContext';
import Login from './componentes/SesionLogin';
import Register from './componentes/SesionRegistrate';
import Logout from './componentes/SesionLogout';
import Musica from './componentes/Musica';
import AWhatsappIcon from './componentes/AWhatsappIcon';
import './assets/scss/estilo.scss';
import "../src/assets/scss/_01-General/_App.scss";

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
      background: 'linear-gradient(180deg, #0000144f 0%, #010d3554 100%)',
      color: '#00f0ff',
      showCancelButton: true,
      confirmButtonText: 'FIRMAR CONTRATO',
      cancelButtonText: 'CANCELAR',
      customClass: {
        popup: 'cyber-popup',
        confirmButton: 'cyber-button cyber-button-primary',
        cancelButton: 'cyber-button cyber-button-secondary'
      },
      buttonsStyling: false,
      iconColor: '#ff00f0',
      backdrop: `
        rgba(0,0,0,0.8)
        url("/img/cyber-grid-animated.gif")
        center top
        no-repeat
      `,
      width: '90%',
      padding: '2rem',
      borderRadius: '20px',
      border: '2px solid #00f0ff'
    }).then((result) => {
      if (result.isConfirmed) {
        window.open('https://www.paypal.com/paypalme/alegondramusic?country.x=AR&locale.x=es_XC', '_blank');
      }
    });
  };

  return (
    <Router>
      <AuthProvider>
        <div className="cyberpunk-app">
          <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          
          <div className="cyberpunk-content">
        
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/contacto" element={<Contacto />} />
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
            
            <div className="cyberpunk-divider"></div>
            <PublicidadDebajo />
          </div>
          {/* <div className="cyberpunk-divider"></div> */}
            
          <Footer />
          <AWhatsappIcon />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;