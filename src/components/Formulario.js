import React from 'react';
import styles from './Formulario.module.css'
import PropTypes from 'prop-types';

import useSelect from '../hooks/useSelect';

const Formulario = ({setCategoria}) => {

    const OPCIONES = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ];

    const [categoria, SelectNoticias ] = useSelect('general', OPCIONES);

    const buscarNoticias = e => {
        e.preventDefault();
        setCategoria(categoria);
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-2">
                <form
                    onSubmit={buscarNoticias}  >
                    <h2 className={styles.heading} >Encuentra noticias por Categoria</h2>
                    <SelectNoticias />
                    <input type="submit" className={`${styles['btn-block']} btn-large amber darken-2`} value="Buscar" />
                </form>
            </div>
        </div>
    );
}

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
}

export default Formulario;