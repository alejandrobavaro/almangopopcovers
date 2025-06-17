import React, { useEffect, useState } from 'react';
import TiendaProductos from './TiendaProductos'; 

import '../assets/scss/_03-Componentes/_TiendaProductosLista.scss'; 

const TiendaProductosLista = ({ onEncargar }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Efecto de sonido al cargar productos
    new Audio('/sounds/vinyl-spin.mp3').play().catch(e => console.log(e));
    
    fetch('/productos.json')
      .then(response => response.json())
      .then(data => {
        setProductos(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar los productos:', error);
        setIsLoading(false);
      });
  }, []);

  return (

  );
};

export default TiendaProductosLista;