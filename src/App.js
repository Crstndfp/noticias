import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticas';

function App() {

  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);
  
  useEffect(() => {
    const request = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=9357dc63515f4912914baf810a39fbfa`;
      const response = await fetch(url);
      const noticias = await response.json();
      setNoticias(noticias.articles);
    };

    request();
  }, [categoria]);

  return (
    <Fragment>
      <Header 
        titulo="Buscador de noticias"
      />
      <div className="container white">
        <Formulario
        setCategoria={setCategoria} />
        <ListaNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
