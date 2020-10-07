import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

const ListaNoticias = ({noticias}) => ( 
        <div className="row">
            {
                noticias.map(ln => ( <Noticia key={ln.url} noticia = {ln} /> ))
            }
        </div>
     );

ListaNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}

export default ListaNoticias;